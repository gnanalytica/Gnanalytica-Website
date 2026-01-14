import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Mock user database with role-based access
 * In production, replace this with actual database queries
 */
const users = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@gnanalytica.com",
    password: "admin123", // In production, use hashed passwords
    role: "admin",
    applications: ["igvpl", "analytics-dashboard", "data-pipeline", "ml-platform"],
  },
  {
    id: "2",
    name: "IGVPL Client",
    email: "client@igvpl.com",
    password: "igvpl123",
    role: "client",
    applications: ["igvpl"],
  },
  {
    id: "3",
    name: "Premium Client",
    email: "premium@client.com",
    password: "premium123",
    role: "premium",
    applications: ["igvpl", "analytics-dashboard"],
  },
  {
    id: "4",
    name: "Enterprise Client",
    email: "enterprise@client.com",
    password: "enterprise123",
    role: "enterprise",
    applications: ["igvpl", "analytics-dashboard", "data-pipeline", "ml-platform"],
  },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Find user by email
        const user = users.find((u) => u.email === credentials?.email);

        // Verify password (in production, use bcrypt or similar)
        if (user && user.password === credentials?.password) {
          // Return user object without password
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        }

        // Return null if authentication fails
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Add user data to token on sign in
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.applications = user.applications;
      }
      return token;
    },
    async session({ session, token }) {
      // Add custom fields to session
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.applications = token.applications;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || "your-development-secret-key-change-in-production",
};

export default NextAuth(authOptions);
