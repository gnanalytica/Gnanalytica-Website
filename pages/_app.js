import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

/**
 * The custom App component initializes pages. We import global styles here so
 * Tailwind's base and utility classes are available throughout the app.
 * SessionProvider wraps the app to make authentication state available everywhere.
 */
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}