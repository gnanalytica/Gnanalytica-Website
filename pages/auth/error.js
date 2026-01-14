import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ExclamationTriangleIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function AuthError() {
  const router = useRouter();
  const { error } = router.query;

  const errorMessages = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have permission to sign in.",
    Verification: "The verification token has expired or has already been used.",
    Default: "An error occurred during authentication.",
  };

  const errorMessage = error ? errorMessages[error] || errorMessages.Default : errorMessages.Default;

  return (
    <>
      <Head>
        <title>Authentication Error - Gnanalytica</title>
        <meta name="description" content="Authentication error" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-editorial-paper via-white to-red-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-md w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="bg-red-100 p-4 rounded-full">
              <ExclamationTriangleIcon className="h-16 w-16 text-red-600" />
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold text-editorial-ink mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Authentication Error
          </h1>

          <p className="text-editorial-muted mb-8">
            {errorMessage}
          </p>

          <div className="space-y-4">
            <motion.a
              href="/auth/signin"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-editorial-primary to-editorial-secondary text-white font-semibold rounded-lg shadow-premium-lg hover:shadow-premium-xl transition-all w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Try Again
            </motion.a>

            <motion.a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-editorial-charcoal font-medium rounded-lg hover:bg-gray-50 transition-all w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Home
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
}
