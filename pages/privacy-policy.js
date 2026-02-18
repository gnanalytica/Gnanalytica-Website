import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ModernNavBar from '../components/ModernNavBar';
import Footer from '../components/Footer';
import SmoothGradientBackground from '../components/SmoothGradientBackground';

export default function PrivacyPolicy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const sections = [
    { id: 'scope', title: '1. Scope of this Privacy Policy' },
    { id: 'role', title: '2. Our role and your role' },
    { id: 'data-collection', title: '3. What personal data we collect' },
    { id: 'how-we-collect', title: '4. How we collect personal data' },
    { id: 'how-we-use', title: '5. How we use your personal data' },
    { id: 'legal-basis', title: '6. Legal basis for processing' },
    { id: 'ai-usage', title: '7. Use of artificial intelligence' },
    { id: 'communications', title: '8. Communications' },
    { id: 'sharing', title: '9. Sharing of personal data' },
    { id: 'international-transfers', title: '10. International data transfers' },
    { id: 'security', title: '11. Data security' },
    { id: 'retention', title: '12. Data retention' },
    { id: 'user-rights', title: '13. Your rights and data deletion' },
    { id: 'cookies', title: '14. Cookies and tracking' },
    { id: 'third-party', title: '15. Third-party links' },
    { id: 'google-api', title: '16. Google API Services' },
    { id: 'changes', title: '17. Changes to this Privacy Policy' },
    { id: 'contact', title: '18. Contact us' }
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Gnanalytica</title>
        <meta
          name="description"
          content="Gnanalytica Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with the Digital Personal Data Protection Act, 2023."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Privacy Policy - Gnanalytica" />
        <meta property="og:description" content="Gnanalytica Privacy Policy - Data Protection & Privacy" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://gnanalytica.com/privacy-policy" />
      </Head>

      <div className="min-h-screen text-editorial-ink relative overflow-hidden">
        <SmoothGradientBackground />
        <ModernNavBar />

        <main className="pt-16 sm:pt-20 relative z-10">
          {/* Header */}
          <motion.section
            className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.a
              as="a"
              href="/"
              className="inline-flex items-center gap-2 text-editorial-primary hover:text-editorial-secondary transition-colors mb-8"
              whileHover={{ x: -4 }}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Home
            </motion.a>

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-4 text-editorial-ink">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                <strong>M/s Gnanalytica Technologies LLP</strong>
              </p>
              <p className="text-sm text-gray-500">
                Effective Date: 15 February 2026 | Last Updated: 15 February 2026
              </p>
            </motion.div>
          </motion.section>

          {/* Table of Contents */}
          <motion.section
            className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 mb-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-editorial-primary/5 to-editorial-secondary/5 rounded-lg p-6 border border-editorial-primary/10">
              <h2 className="text-lg font-semibold mb-4 text-editorial-ink">Table of Contents</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-editorial-primary hover:text-editorial-secondary transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Introduction */}
          <motion.section
            className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Gnanalytica, your privacy matters to us. We believe that transparency builds trust, and this Privacy Policy is meant to clearly explain how M/s Gnanalytica Technologies LLP ("Gnanalytica", "we", "us", or "our") collects, uses, stores, and protects your personal data when you use our website, platform, and services (collectively, the "Platform" or "Services").
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This Privacy Policy is framed in accordance with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong> and other applicable laws. It applies to all users, clients, and visitors who access or use our Services.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              By accessing or using the Platform, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </motion.section>

          {/* Content Sections */}
          <motion.section
            className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Section 1 */}
            <motion.div id="scope" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">1. Scope of this Privacy Policy</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>All individuals and business users who access or use the Gnanalytica Platform or website</li>
                <li>All personal data processed by Gnanalytica in the course of providing its Services</li>
                <li>All data processed where Gnanalytica acts on behalf of its business clients</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Gnanalytica is a business-to-business (B2B) software platform.</strong> This means that in most cases, we process data on behalf of our clients, who use our Platform for their own business purposes.
              </p>
              <p className="text-gray-700 mt-4">
                To provide our Services efficiently, we rely on trusted third-party technology partners, including cloud infrastructure providers and artificial intelligence service providers. In certain cases, we may use third-party AI services to generate insights, analytics, or outputs based on the data provided by our clients. These partners act as sub-processors and process data strictly on our instructions and under appropriate contractual, confidentiality, and security safeguards.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div id="role" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">2. Our role and your role</h2>
              <p className="text-gray-700">For the purposes of applicable data protection laws, including the Digital Personal Data Protection Act, 2023:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Our clients (i.e., the businesses that subscribe to and use our Platform) act as <strong>Data Controllers / Data Fiduciaries</strong></li>
                <li>Gnanalytica acts as a <strong>Data Processor</strong></li>
              </ul>
              <p className="text-gray-700 mt-4">In simple terms, this means:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Our clients decide what personal data is collected and why</li>
                <li>Gnanalytica processes that data only to provide the Services</li>
                <li>Gnanalytica does not independently decide how or why personal data should be used</li>
              </ul>
            </motion.div>

            {/* Section 3 */}
            <motion.div id="data-collection" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">3. What personal data we collect</h2>
              <p className="text-gray-700">We may collect and process different types of information depending on how you use our Platform.</p>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Information you provide directly:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li>Your name, email address, phone number</li>
                  <li>Company name, job title, and professional details</li>
                  <li>Account credentials such as username and password</li>
                  <li>Information shared when you contact our support team</li>
                  <li>Information provided during onboarding or demos</li>
                  <li>Your Google account profile information (name, email address, and profile picture) when you sign in using Google</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Information generated through use of the Platform:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li>Data uploaded or entered into the Platform by you or your organisation</li>
                  <li>System usage data, logs, and activity records</li>
                  <li>IP address, device type, browser type, and operating system</li>
                  <li>Time stamps and interaction data</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Sensitive or special data:</h3>
                <p className="text-gray-700">
                  We do not intentionally collect sensitive personal data (such as financial, health, biometric, or government identification data) unless it is expressly provided by the client and required for the specific use of the Services.
                </p>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div id="how-we-collect" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">4. How we collect personal data</h2>
              <p className="text-gray-700">We collect personal data in the following ways:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>When you create an account or register on our Platform</li>
                <li>When you log in and use the Services (including via Google Sign-In)</li>
                <li>When you communicate with us via email, chat, or support channels</li>
                <li>When you participate in product demos, onboarding, or training sessions</li>
                <li>Automatically through cookies, logs, and similar technologies</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Some information is collected automatically to ensure security, improve performance, and understand how users interact with the Platform.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div id="how-we-use" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">5. How we use your personal data</h2>
              <p className="text-gray-700">We use personal data only for legitimate business purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Providing, operating, and maintaining the Platform</li>
                <li>Enabling AI-based processing and insights</li>
                <li>Managing user accounts and access control</li>
                <li>Responding to support requests and queries</li>
                <li>Improving our features, performance, and user experience</li>
                <li>Ensuring platform security and preventing fraud</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Sending service-related communications</li>
                <li>Sending marketing communications (where consent has been given)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>We do not sell personal data</strong> and do not use personal data for unrelated commercial purposes.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div id="legal-basis" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">6. Legal basis for processing</h2>
              <p className="text-gray-700">We process personal data on one or more of the following legal grounds:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Performance of a contract (to provide the Services you have subscribed to)</li>
                <li>Consent (for marketing communications and optional features)</li>
                <li>Legitimate interests (such as security, analytics, and service improvement)</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </motion.div>

            {/* Section 7 */}
            <motion.div id="ai-usage" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">7. Use of artificial intelligence</h2>
              <p className="text-gray-700">
                Our Platform may use artificial intelligence and machine learning technologies to analyse data and generate insights or recommendations.
              </p>
              <p className="text-gray-700 mt-4">These systems:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Operate based on data provided by our clients</li>
                <li>Are designed to support business decisions and automation</li>
                <li>Do not replace professional or human judgment</li>
              </ul>
              <p className="text-gray-700 mt-4">
                AI outputs are intended to be advisory in nature, and users are responsible for validating and verifying any outputs before relying on them.
              </p>
            </motion.div>

            {/* Section 8 */}
            <motion.div id="communications" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">8. Communications</h2>
              <p className="text-gray-700">We may contact you for different types of communications such as:</p>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Service and transactional communications:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li>Account and login notifications</li>
                  <li>Security alerts</li>
                  <li>Billing and payment messages</li>
                  <li>Technical updates</li>
                  <li>Customer support communications</li>
                </ul>
                <p className="text-gray-700 mt-2">These communications are necessary to provide the Services and cannot be opted out of.</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Marketing communications:</h3>
                <p className="text-gray-700 mb-2">With your consent, we may also send:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li>Newsletters and product updates</li>
                  <li>Information about new features</li>
                  <li>Event invitations</li>
                  <li>Promotional offers</li>
                </ul>
                <p className="text-gray-700 mt-2">You may opt out of marketing communications at any time by using the unsubscribe link or contacting us directly.</p>
              </div>
            </motion.div>

            {/* Section 9 */}
            <motion.div id="sharing" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">9. Sharing of personal data</h2>
              <p className="text-gray-700">We may share personal data with:</p>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Our service providers:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li>Cloud hosting providers (Amazon Web Services)</li>
                  <li>AI technology partners (Google Gemini)</li>
                  <li>Authentication providers (Google Sign-In for identity verification only)</li>
                  <li>Analytics providers</li>
                  <li>Payment processors</li>
                  <li>Customer support tools</li>
                </ul>
                <p className="text-gray-700 mt-2">These partners process data only to help us deliver the Services and are bound by confidentiality and security obligations.</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Legal and regulatory authorities:</h3>
                <p className="text-gray-700">Where required by law, court order, or regulatory request.</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Business transfers:</h3>
                <p className="text-gray-700">
                  In case of a merger, acquisition, restructuring, or sale of assets, personal data may be transferred to the relevant successor entity.
                </p>
              </div>

              <p className="text-gray-700 mt-4"><strong>We do not sell or rent personal data to third parties.</strong></p>
            </motion.div>

            {/* Section 10-18 Summary */}
            <motion.div id="international-transfers" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">10. International data transfers</h2>
              <p className="text-gray-700">
                Some of our systems may store or process data on servers located outside India. When this happens, we ensure appropriate technical and contractual safeguards are in place to protect your data in accordance with applicable laws.
              </p>
            </motion.div>

            <motion.div id="security" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">11. Data security</h2>
              <p className="text-gray-700">We take data security seriously and implement reasonable technical and organisational measures, including:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure cloud infrastructure</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Monitoring and logging of system activity</li>
              </ul>
              <p className="text-gray-700 mt-4">
                While we follow industry best practices, no system can guarantee absolute security.
              </p>
            </motion.div>

            <motion.div id="retention" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">12. Data retention</h2>
              <p className="text-gray-700">We retain personal data only for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Provide the Services</li>
                <li>Meet legal or regulatory requirements</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p className="text-gray-700 mt-4">When data is no longer required, it is deleted or anonymised.</p>
            </motion.div>

            <motion.div id="user-rights" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">13. Your rights and data deletion</h2>
              <p className="text-gray-700">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Upon receiving a valid deletion request, we will delete or anonymise your data within a reasonable period, unless we are legally required to retain it.
              </p>
            </motion.div>

            <motion.div id="cookies" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">14. Cookies and tracking</h2>
              <p className="text-gray-700">
                Cookies are used by us to track content usage and traffic on the Website. We use cookies and similar technologies to keep you logged in, improve security, analyse usage patterns, and enhance user experience.
              </p>
              <p className="text-gray-700 mt-4">You can control cookies through your browser settings.</p>
            </motion.div>

            <motion.div id="third-party" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">15. Third-party links</h2>
              <p className="text-gray-700">
                Our Platform may contain links to third-party websites or services. We are not responsible for their privacy practices or content.
              </p>
            </motion.div>

            <motion.div id="google-api" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">16. Google API Services</h2>
              <p className="text-gray-700">
                Our Platform uses Google API Services for user authentication (sign-in). Our use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements.
              </p>
              <p className="text-gray-700 mt-4">Specifically:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>We only request the minimum OAuth scopes necessary for authentication: your basic profile information (openid, email, and profile)</li>
                <li>We do not request access to Google Drive, Google Docs, Gmail, or any other sensitive Google services</li>
                <li>Data received from Google APIs is used solely for authenticating your identity and creating or linking your account on our Platform</li>
                <li>We do not transfer Google user data to third parties except as necessary to provide or improve our Services</li>
                <li>We do not use Google user data for serving advertisements</li>
                <li>We do not allow humans to read Google user data unless we have your affirmative agreement, it is necessary for security purposes, or it is required by law</li>
              </ul>
            </motion.div>

            <motion.div id="changes" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">17. Changes to this Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you via email, the Platform, or our website.
              </p>
              <p className="text-gray-700 mt-4">
                Continued use of the Platform after such updates constitutes acceptance of the revised Policy.
              </p>
            </motion.div>

            <motion.div id="contact" variants={itemVariants} className="space-y-4 pb-12">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">18. Contact us</h2>
              <p className="text-gray-700">
                If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, you may contact us at:
              </p>
              <div className="bg-editorial-primary/5 border border-editorial-primary/10 rounded-lg p-6 mt-4">
                <p className="font-semibold text-editorial-ink mb-2">M/s Gnanalytica Technologies LLP</p>
                <p className="text-gray-700 mb-1">
                  <strong>Email:</strong> <a href="mailto:sandeep@gnanalytica.com" className="text-editorial-primary hover:text-editorial-secondary transition-colors">sandeep@gnanalytica.com</a>
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Registered Office:</strong>
                </p>
                <p className="text-gray-700">
                  B1-205, Shraddha Whitecliff Apartment, Seegehalli,<br />
                  Bengaluru – 560067, Karnataka, India
                </p>
              </div>
            </motion.div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </>
  );
}
