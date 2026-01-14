import { signIn, getCsrfToken } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { motion } from "framer-motion";
import { EnvelopeIcon, LockClosedIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function SignIn({ csrfToken }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError("Invalid email or password");
        setLoading(false);
      } else {
        // Redirect to portal on successful login
        router.push("/portal");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In - Gnanalytica Customer Portal</title>
        <meta name="description" content="Sign in to access your Gnanalytica applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-editorial-paper via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-editorial-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-editorial-secondary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Back to Home Button */}
        <motion.a
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-editorial-charcoal hover:text-editorial-primary transition-colors group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </motion.a>

        <motion.div
          className="max-w-md w-full space-y-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo and Title */}
          <div className="text-center">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/images/logos/gnanalytica-logo.png"
                alt="Gnanalytica Logo"
                className="h-16 w-auto"
              />
            </motion.div>
            <h2 className="text-3xl font-bold text-editorial-ink tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-editorial-muted">
              Sign in to access your applications
            </p>
          </div>

          {/* Sign In Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-premium-lg p-8 border border-gray-200/50"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

              {/* Error Message */}
              {error && (
                <motion.div
                  className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              )}

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-editorial-charcoal mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-editorial-primary focus:border-editorial-primary transition-all sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-editorial-charcoal mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-editorial-primary focus:border-editorial-primary transition-all sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white font-semibold bg-gradient-to-r from-editorial-primary via-editorial-secondary to-editorial-primary shadow-premium-lg hover:shadow-premium-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-editorial-primary transition-all duration-300 ${
                  loading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </motion.button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-editorial-muted text-center mb-3 font-semibold">Demo Credentials</p>
              <div className="space-y-2 text-xs text-editorial-muted">
                <div className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                  <span className="font-medium">Admin:</span>
                  <span className="font-mono">admin@gnanalytica.com / admin123</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                  <span className="font-medium">IGVPL Client:</span>
                  <span className="font-mono">client@igvpl.com / igvpl123</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 rounded-lg px-3 py-2">
                  <span className="font-medium">Premium:</span>
                  <span className="font-mono">premium@client.com / premium123</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <p className="text-center text-xs text-editorial-muted">
            Need access? Contact your administrator or{" "}
            <a href="/#scheduling" className="text-editorial-primary hover:text-editorial-secondary font-medium">
              schedule a call
            </a>
          </p>
        </motion.div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
