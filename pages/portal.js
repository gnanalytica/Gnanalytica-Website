import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import ApplicationCard from '../components/ApplicationCard';
import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

/**
 * Customer Portal - Role-based Application Dashboard
 * Shows available applications based on user's access level
 */
export default function Portal() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [applications, setApplications] = useState([]);

  // Application catalog with metadata
  const allApplications = {
    'igvpl': {
      id: 'igvpl',
      name: 'IGVPL Platform',
      description: 'Intelligent Graph Visualization and Processing Lab - Advanced graph analytics and visualization platform.',
      url: 'https://igvpl.vercel.app', // Replace with actual deployed URL
      status: 'active',
    },
    'analytics-dashboard': {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard',
      description: 'Comprehensive business intelligence and analytics platform with real-time insights.',
      url: null, // Not deployed yet
      status: 'beta',
    },
    'data-pipeline': {
      id: 'data-pipeline',
      name: 'Data Pipeline Manager',
      description: 'Orchestrate and manage your data pipelines with automated ETL workflows.',
      url: null,
      status: 'coming-soon',
    },
    'ml-platform': {
      id: 'ml-platform',
      name: 'ML Training Platform',
      description: 'Train, deploy, and monitor machine learning models at scale.',
      url: null,
      status: 'coming-soon',
    },
  };

  useEffect(() => {
    // Redirect to sign-in if not authenticated
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }

    // Filter applications based on user's access
    if (session?.user?.applications) {
      const userApps = session.user.applications.map(appId => allApplications[appId]).filter(Boolean);
      setApplications(userApps);
    }
  }, [session, status, router]);

  // Loading state
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-editorial-paper via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-editorial-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-editorial-muted">Loading your portal...</p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!session) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Customer Portal - Gnanalytica</title>
        <meta name="description" content="Access your Gnanalytica applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-editorial-paper via-white to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-editorial-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-72 h-72 bg-editorial-secondary/10 rounded-full blur-3xl"
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

        {/* Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-premium sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo and Title */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/logos/gnanalytica-logo.png"
                  alt="Gnanalytica"
                  className="h-10 w-auto"
                />
                <div>
                  <h1 className="text-2xl font-bold text-editorial-ink tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Customer Portal
                  </h1>
                  <p className="text-sm text-editorial-muted">
                    Welcome back, {session.user?.name}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="/"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-editorial-charcoal hover:text-editorial-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HomeIcon className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </motion.a>
                <motion.button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-600 border border-red-200 font-medium rounded-lg hover:bg-red-50 transition-colors shadow-premium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  <span className="hidden sm:inline">Sign Out</span>
                </motion.button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* User Info Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-premium p-6 mb-12 border border-gray-200/50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-editorial-primary to-editorial-secondary rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-premium">
                {session.user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-editorial-ink mb-1">{session.user?.name}</h2>
                <p className="text-editorial-muted mb-2">{session.user?.email}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-editorial-primary/10 to-editorial-secondary/10 rounded-full">
                  <UserCircleIcon className="w-4 h-4 text-editorial-primary" />
                  <span className="text-sm font-semibold text-editorial-primary capitalize">
                    {session.user?.role} Account
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-editorial-primary">{applications.length}</div>
                  <div className="text-sm text-editorial-muted">Applications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-editorial-secondary">
                    {applications.filter(app => app.status === 'active').length}
                  </div>
                  <div className="text-sm text-editorial-muted">Active</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Applications Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Squares2X2Icon className="w-8 h-8 text-editorial-primary" />
              <h2 className="text-3xl font-bold text-editorial-ink tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Your Applications
              </h2>
            </div>
            <p className="text-editorial-muted mb-8">
              Access your authorized applications below. Click "Launch Application" to open in a new tab.
            </p>

            {/* Applications Grid */}
            {applications.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((app, index) => (
                  <ApplicationCard key={app.id} app={app} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-premium p-12 text-center border border-gray-200/50"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Squares2X2Icon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-editorial-ink mb-2">No Applications Available</h3>
                <p className="text-editorial-muted mb-6">
                  You don't have access to any applications yet.
                </p>
                <motion.a
                  href="/#scheduling"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-editorial-primary to-editorial-secondary text-white font-semibold rounded-lg shadow-premium-lg hover:shadow-premium-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.a>
              </motion.div>
            )}
          </div>

          {/* Need More Access Section */}
          <motion.div
            className="bg-gradient-to-r from-editorial-primary/5 to-editorial-secondary/5 rounded-2xl p-8 border border-editorial-primary/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold text-editorial-ink mb-2">Need More Access?</h3>
            <p className="text-editorial-muted mb-4">
              Want to explore more applications or upgrade your plan? Schedule a call with our team to discuss your needs.
            </p>
            <motion.a
              href="/#scheduling"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-editorial-primary to-editorial-secondary text-white font-semibold rounded-lg shadow-premium-lg hover:shadow-premium-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.a>
          </motion.div>
        </main>
      </div>
    </>
  );
}
