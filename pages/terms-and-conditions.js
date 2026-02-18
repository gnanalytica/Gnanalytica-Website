import Head from 'next/head';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ModernNavBar from '../components/ModernNavBar';
import Footer from '../components/Footer';
import SmoothGradientBackground from '../components/SmoothGradientBackground';

export default function TermsAndConditions() {
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
    { id: 'parties', title: '1. PARTIES' },
    { id: 'incorporation', title: '2. INCORPORATION BY REFERENCE' },
    { id: 'definitions', title: '3. DEFINITIONS' },
    { id: 'scope', title: '4. SCOPE AND NATURE OF SERVICES' },
    { id: 'account', title: '5. ACCOUNT & GETTING STARTED' },
    { id: 'discovery', title: '6. DISCOVERY CALL' },
    { id: 'subscription', title: '7. SUBSCRIPTION TERMS' },
    { id: 'ai-outputs', title: '8. AI OUTPUTS – RESPONSIBLE USE AND DISCLAIMER' },
    { id: 'license', title: '9. LICENSE & PROPRIETARY RIGHTS' },
    { id: 'user-content', title: '10. USER CONTENT' },
    { id: 'data-retention', title: '11. DATA RETENTION AND DELETION' },
    { id: 'data-protection', title: '12. DATA PROTECTION, SECURITY & COMPLIANCE' },
    { id: 'security', title: '13. INFORMATION SECURITY' },
    { id: 'access', title: '14. ACCESS, CORRECTION AND ACCURACY' },
    { id: 'disclosure', title: '15. LAWFUL DISCLOSURE' },
    { id: 'confidentiality', title: '16. CONFIDENTIALITY' },
    { id: 'feedback', title: '17. FEEDBACK' },
    { id: 'communications', title: '18. COMMUNICATIONS' },
    { id: 'business-transfers', title: '19. BUSINESS TRANSFERS' },
    { id: 'changes', title: '20. CHANGES TO SERVICES & AGREEMENT' },
    { id: 'support', title: '21. CUSTOMER SUPPORT' },
    { id: 'warranties', title: '22. DISCLAIMER OF WARRANTIES' },
    { id: 'liability', title: '23. LIMITATION OF LIABILITY' },
    { id: 'indemnification', title: '24. INDEMNIFICATION' },
    { id: 'force-majeure', title: '25. FORCE MAJEURE' },
    { id: 'dispute-resolution', title: '26. DISPUTE RESOLUTION' },
    { id: 'severability', title: '27. SEVERABILITY' },
    { id: 'waiver', title: '28. WAIVER' },
    { id: 'survival', title: '29. SURVIVAL' },
    { id: 'entire-agreement', title: '30. ENTIRE AGREEMENT' },
    { id: 'electronic-records', title: '31. ELECTRONIC RECORDS AND SIGNATURES' },
    { id: 'notices', title: '32. NOTICES' },
    { id: 'no-third-party', title: '33. NO THIRD-PARTY BENEFICIARIES' },
    { id: 'contact', title: '34. CONTACT INFORMATION' }
  ];

  return (
    <>
      <Head>
        <title>Terms & Conditions - Gnanalytica</title>
        <meta
          name="description"
          content="Gnanalytica Terms & Conditions. Read our comprehensive service terms, subscription policies, data protection, and legal agreements governing your use of our platform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Terms & Conditions - Gnanalytica" />
        <meta property="og:description" content="Gnanalytica Terms & Conditions - Service Agreement" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://gnanalytica.com/terms-and-conditions" />
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
                Terms & Conditions
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
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
              <p className="text-sm font-semibold text-yellow-800 mb-2">Important Agreement</p>
              <p className="text-sm text-yellow-700">
                By clicking "I Agree", registering, accessing, or subscribing to the Platform, you confirm that you have read and understood these Subscription Terms & Conditions and have the authority to bind the entity you represent.
              </p>
            </div>
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
            <motion.div id="parties" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">1. PARTIES</h2>
              <p className="text-gray-700">This Agreement is entered into between:</p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-editorial-ink">M/s Gnanalytica Technologies LLP</p>
                <p className="text-sm text-gray-700 mt-2">
                  A limited liability partnership incorporated under the laws of India, having its registered office at:
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  SY No B1-, Shraddha Whitecliff Apartment, Seegehalli,<br />
                  Bengaluru Rural – 560115, Karnataka, India
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  ("Gnanalytica", "We", "Us", "Service Provider", "Processor")
                </p>
              </div>
              <p className="text-gray-700 mt-4">AND</p>
              <p className="text-gray-700">
                The business entity subscribing to the Services ("Client", "Customer", "You", "Data Fiduciary").
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div id="incorporation" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">2. INCORPORATION BY REFERENCE</h2>
              <p className="text-gray-700">This Agreement incorporates the following documents, which together form a single binding contract:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><a href="/privacy-policy" className="text-editorial-primary hover:text-editorial-secondary transition-colors">Privacy Policy</a></li>
                <li>Refund & Cancellation Policy</li>
                <li>End User License Agreement (EULA)</li>
                <li>Data Processing Agreement (DPA)</li>
              </ul>
              <p className="text-gray-700 mt-4">In the event of any conflict, this Agreement shall prevail.</p>
            </motion.div>

            {/* Section 3 */}
            <motion.div id="definitions" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">3. DEFINITIONS</h2>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-editorial-ink">"Platform"</p>
                  <p className="text-gray-700">
                    The AI-powered SaaS platform owned and operated by Gnanalytica, including all software, algorithms, models, APIs, dashboards, interfaces, databases, and infrastructure.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-editorial-ink">"Services"</p>
                  <p className="text-gray-700">
                    Analytics, automation, artificial intelligence, decision-support and related services provided through the Platform.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-editorial-ink">"Client Data"</p>
                  <p className="text-gray-700">
                    All data, content, information and materials uploaded, submitted or processed by the Client, including Personal Data.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-editorial-ink">"Personal Data"</p>
                  <p className="text-gray-700">
                    Shall have the meaning assigned under the Digital Personal Data Protection Act, 2023 ("DPDP Act").
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-editorial-ink">"Subscription Term"</p>
                  <p className="text-gray-700">
                    The period for which the Client has subscribed to the Services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div id="scope" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">4. SCOPE AND NATURE OF SERVICES</h2>
              <p className="text-gray-700">Gnanalytica provides the Services on a software-as-a-service (SaaS) subscription basis.</p>
              <p className="text-gray-700 mt-4">The Services are designed to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Automate workflows</li>
                <li>Generate analytics and insights</li>
                <li>Support business and operational decision-making</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>The Services are not intended to replace professional judgment, regulatory compliance, or independent verification.</strong>
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div id="account" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">5. ACCOUNT & GETTING STARTED</h2>
              <p className="text-gray-700">
                To use the Services, you will be required to create an account by providing basic information such as your name, email address, company name (if applicable), and contact details. You may also register or sign in using Google Sign-In, in which case your basic Google profile information (name, email address, and profile picture) will be used to create or link your account.
              </p>
              <p className="text-gray-700 mt-4">You agree that:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>The information you provide is accurate and up to date</li>
                <li>You will keep your login credentials secure</li>
                <li>You are responsible for all activities carried out under your account</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Gnanalytica is not responsible for any unauthorised access resulting from your failure to maintain account security.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div id="discovery" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">6. DISCOVERY CALL</h2>
              <p className="text-gray-700">
                Before subscribing, you may request a discovery call to learn about the Platform, discuss your business needs, and determine whether the Services are suitable for your business needs.
              </p>
              <p className="text-gray-700 mt-4">The discovery call:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Is purely informational in nature</li>
                <li>Does not create any obligation for you to subscribe</li>
                <li>Does not constitute professional, legal, or financial advice</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Any insights or suggestions shared during the discovery call are based on the information you provide and are meant only to help you evaluate the Services. <strong>Gnanalytica does not guarantee outcomes or results from a discovery call.</strong>
              </p>
            </motion.div>

            {/* Section 7 */}
            <motion.div id="subscription" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">7. SUBSCRIPTION TERMS</h2>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Subscriptions</h3>
                <p className="text-gray-700">
                  Gnanalytica offers its Services on a monthly subscription basis. The available plans, features, and pricing will be communicated to you at the time of purchase or through the Platform.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Billing</h3>
                <p className="text-gray-700">The Client agrees to pay:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li>A one-time installation / onboarding fee (non-refundable)</li>
                  <li>Recurring subscription fees as displayed at the time of purchase</li>
                </ul>
                <p className="text-gray-700 mt-2">Subscription fees are billed in advance on a monthly basis. All fees are exclusive of applicable taxes.</p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Cancellation</h3>
                <p className="text-gray-700">
                  You may cancel your subscription at any time by providing at least fifteen (15) days' prior notice before the start of the next billing cycle.
                </p>
                <p className="text-gray-700 mt-2">If you cancel:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
                  <li>Your subscription will remain active until the end of the current billing month</li>
                  <li>You will not be charged for the following billing cycle</li>
                  <li>No refunds will be provided for the current month</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-lg text-editorial-ink mb-2">Suspension or Termination</h3>
                <p className="text-gray-700">
                  Gnanalytica reserves the right to suspend or terminate your access if you breach these Terms, fail to pay fees, or use the Services unlawfully.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-gray-700">
                  <strong>Non-payment may result in suspension or termination of Services.</strong>
                </p>
              </div>
            </motion.div>

            {/* Section 8 */}
            <motion.div id="ai-outputs" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">8. AI OUTPUTS – RESPONSIBLE USE AND DISCLAIMER</h2>
              <p className="text-gray-700">
                The Platform utilises artificial intelligence and machine learning models to generate insights, analytics, predictions, recommendations and outputs ("AI Outputs").
              </p>
              <p className="text-gray-700 mt-4">The Client acknowledges and agrees that:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>AI Outputs are generated using probabilistic models and available datasets</li>
                <li>AI Outputs are inherently subject to technical limitations</li>
                <li>AI Outputs may be incomplete, inaccurate, outdated, biased, or contextually incorrect</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>The Platform is an assistive automation and decision-support tool only.</strong>
              </p>
              <p className="text-gray-700 mt-4">The Client shall:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Independently validate all AI Outputs</li>
                <li>Apply professional and business judgment before implementation</li>
                <li>Ensure compliance with applicable laws and internal policies</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Gnanalytica does not provide legal, financial, regulatory, medical or professional advice.</strong>
              </p>
              <p className="text-gray-700 mt-4">
                <strong>Gnanalytica shall not be responsible or liable for any loss, damage, liability or consequences arising from decisions taken by the Client based on AI Outputs.</strong>
              </p>
            </motion.div>

            {/* Section 9 */}
            <motion.div id="license" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">9. LICENSE & PROPRIETARY RIGHTS</h2>
              <p className="text-gray-700">
                Gnanalytica grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your internal business purposes, subject to these Terms and the End User License Agreement (EULA).
              </p>
              <p className="text-gray-700 mt-4"><strong>The Services are licensed, not sold.</strong></p>
              <p className="text-gray-700 mt-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Resell, sublicense, rent, lease, or share the Services</li>
                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                <li>Use the Services to build or support a competing product</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>All intellectual property rights in the Services remain the exclusive property of Gnanalytica or its licensors. You acquire no ownership rights in the Platform.</strong>
              </p>
            </motion.div>

            {/* Sections 10-34 Summary */}
            <motion.div id="user-content" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">10. USER CONTENT</h2>
              <p className="text-gray-700">
                You retain ownership of any content, data, or materials you upload to the Platform. By uploading content, you grant Gnanalytica a limited license to use it solely for providing the Services. You are responsible for ensuring your content does not violate any applicable laws or third-party rights.
              </p>
            </motion.div>

            <motion.div id="data-retention" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">11. DATA RETENTION AND DELETION</h2>
              <p className="text-gray-700">
                Your data may be stored and processed on secure cloud servers operated by third-party infrastructure providers.
              </p>
              <p className="text-gray-700 mt-4">
                Gnanalytica shall retain Client Data only for the Subscription Term, as required by law, or as necessary for legitimate business purposes.
              </p>
              <p className="text-gray-700 mt-4">
                Upon termination, Client Data shall be deleted or anonymised within a reasonable period, unless legally required to retain. Data handling is governed by our Privacy Policy and DPA.
              </p>
            </motion.div>

            <motion.div id="data-protection" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">12. DATA PROTECTION, SECURITY & COMPLIANCE</h2>
              <p className="text-gray-700">For data protection purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You (the Client) act as the Data Fiduciary / Data Controller</li>
                <li>Gnanalytica acts as the Data Processor</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Gnanalytica processes personal data strictly in accordance with your documented instructions, these Terms, our Data Processing Agreement (DPA) and Privacy Policy, and the Digital Personal Data Protection Act, 2023 (India) and other applicable laws.
              </p>
            </motion.div>

            <motion.div id="security" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">13. INFORMATION SECURITY</h2>
              <p className="text-gray-700">
                Gnanalytica shall implement reasonable and appropriate technical and organisational security measures, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Encryption of data in transit and at rest</li>
                <li>Role-based access control</li>
                <li>Secure cloud infrastructure</li>
                <li>Network security controls</li>
                <li>Regular vulnerability assessments</li>
              </ul>
              <p className="text-gray-700 mt-4">
                While Gnanalytica adopts industry-standard safeguards, <strong>no system is completely secure, and absolute security cannot be guaranteed.</strong>
              </p>
            </motion.div>

            <motion.div id="access" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">14. ACCESS, CORRECTION AND ACCURACY</h2>
              <p className="text-gray-700">
                The Client is responsible for ensuring the accuracy and completeness of data submitted to the Platform.
              </p>
              <p className="text-gray-700 mt-4">
                The Client may access, correct, or request deletion of its data in accordance with the Privacy Policy and applicable law.
              </p>
            </motion.div>

            <motion.div id="disclosure" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">15. LAWFUL DISCLOSURE</h2>
              <p className="text-gray-700">Gnanalytica may disclose Client Data where required to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Comply with legal obligations</li>
                <li>Respond to lawful government requests</li>
                <li>Enforce legal rights</li>
                <li>Prevent fraud or security incidents</li>
                <li>Support audits, tax or regulatory filings</li>
              </ul>
              <p className="text-gray-700 mt-4">Such disclosures do not require further consent.</p>
            </motion.div>

            <motion.div id="confidentiality" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">16. CONFIDENTIALITY</h2>
              <p className="text-gray-700">
                Both you and Gnanalytica agree to treat all non-public business, technical, and commercial information exchanged in connection with the Services as confidential. This obligation continues even after your subscription ends.
              </p>
            </motion.div>

            <motion.div id="feedback" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">17. FEEDBACK</h2>
              <p className="text-gray-700">
                If you provide feedback, suggestions, ideas, or recommendations regarding the Services, you agree that Gnanalytica may use, implement, or modify the Feedback without compensation or credit owed to you.
              </p>
            </motion.div>

            <motion.div id="communications" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">18. COMMUNICATIONS</h2>
              <p className="text-gray-700">
                Gnanalytica may send transactional and service communications (account notifications, security alerts, billing, technical updates, support) which are essential and cannot be opted out of.
              </p>
              <p className="text-gray-700 mt-4">
                Subject to your consent, Gnanalytica may also send marketing communications (product updates, newsletters, event invitations, promotional offers). You may opt out at any time.
              </p>
            </motion.div>

            <motion.div id="business-transfers" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">19. BUSINESS TRANSFERS</h2>
              <p className="text-gray-700">
                In the event of merger, acquisition, or asset sale, your data may be transferred as part of the business assets, subject to the same privacy protections.
              </p>
            </motion.div>

            <motion.div id="changes" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">20. CHANGES TO SERVICES & AGREEMENT</h2>
              <p className="text-gray-700">
                Gnanalytica may update these Terms or modify features of the Platform from time to time. We will notify you of any material changes via email or the Platform. Continued use after notification constitutes acceptance of the updated Terms.
              </p>
            </motion.div>

            <motion.div id="support" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">21. CUSTOMER SUPPORT</h2>
              <p className="text-gray-700">
                Gnanalytica provides customer support via email, in-app chat, or other channels as made available. Response times depend on your subscription plan and the nature of the inquiry.
              </p>
              <p className="text-gray-700 mt-4">
                Support is available during business hours, Monday through Saturday, unless otherwise stated.
              </p>
            </motion.div>

            <motion.div id="warranties" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">22. DISCLAIMER OF WARRANTIES</h2>
              <p className="text-gray-700">
                The Services are provided on an "as is" and "as available" basis. Gnanalytica does not guarantee that the Services will be uninterrupted or error-free, that AI-generated outputs will be accurate or complete, or that the Platform will meet all your specific business requirements.
              </p>
              <p className="text-gray-700 mt-4">
                <strong>The Platform is intended as a support tool and not as a substitute for professional judgment.</strong>
              </p>
            </motion.div>

            <motion.div id="liability" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">23. LIMITATION OF LIABILITY</h2>
              <p className="text-gray-700">To the maximum extent permitted by law, Gnanalytica shall not be liable for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Reliance on AI-generated outputs</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Gnanalytica's total liability shall not exceed the amount paid by you for the Services in the three (3) months preceding the claim.
              </p>
            </motion.div>

            <motion.div id="indemnification" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">24. INDEMNIFICATION</h2>
              <p className="text-gray-700">You agree to indemnify and hold harmless Gnanalytica from any claims, losses, or damages arising from:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Your misuse of the Services</li>
                <li>Your violation of these Terms or related policies</li>
                <li>Your data or content</li>
                <li>Breach of this Agreement</li>
              </ul>
            </motion.div>

            <motion.div id="force-majeure" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">25. FORCE MAJEURE</h2>
              <p className="text-gray-700">
                Neither Party shall be liable for failure due to events beyond reasonable control, including natural disasters, cyber incidents, government actions, or network outages.
              </p>
            </motion.div>

            <motion.div id="dispute-resolution" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">26. DISPUTE RESOLUTION</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of India.
              </p>
              <p className="text-gray-700 mt-4">
                In the event of any dispute, the Parties shall first make a genuine effort to resolve the matter amicably through good faith discussions.
              </p>
              <p className="text-gray-700 mt-4">
                If not resolved within a reasonable period, it shall be referred to and finally resolved by arbitration seated in Bangalore, Karnataka, India, in accordance with the Arbitration and Conciliation Act, 1996, as amended.
              </p>
            </motion.div>

            <motion.div id="severability" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">27. SEVERABILITY</h2>
              <p className="text-gray-700">
                If any provision of this Agreement is found to be invalid, illegal, or unenforceable, such provision shall be severed, and the remaining provisions shall continue in full force and effect.
              </p>
            </motion.div>

            <motion.div id="waiver" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">28. WAIVER</h2>
              <p className="text-gray-700">
                No failure or delay by Gnanalytica in exercising any right shall constitute a waiver thereof. Any waiver must be expressly made in writing and signed by the waiving Party.
              </p>
            </motion.div>

            <motion.div id="survival" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">29. SURVIVAL</h2>
              <p className="text-gray-700">
                The termination or expiry of this Agreement shall not affect the rights, obligations, or liabilities of the Parties that have accrued prior to termination or that, by their nature, are intended to survive, including Intellectual Property, Confidentiality, Limitation of Liability, Indemnification, and Dispute Resolution clauses.
              </p>
            </motion.div>

            <motion.div id="entire-agreement" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">30. ENTIRE AGREEMENT</h2>
              <p className="text-gray-700">
                This Agreement, together with the Agreement Documents, constitutes the entire agreement between the Parties and supersedes all prior and contemporaneous agreements, negotiations, representations, understandings, communications, and arrangements.
              </p>
            </motion.div>

            <motion.div id="electronic-records" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">31. ELECTRONIC RECORDS AND SIGNATURES</h2>
              <p className="text-gray-700">
                The Parties agree that this Agreement is executed and accepted electronically and shall constitute a valid and legally binding contract under the Information Technology Act, 2000.
              </p>
              <p className="text-gray-700 mt-4">
                Acceptance of this Agreement by clicking "I Agree" or by accessing or using the Platform constitutes a valid electronic signature and evidences your intent to be legally bound by this Agreement.
              </p>
            </motion.div>

            <motion.div id="notices" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">32. NOTICES</h2>
              <p className="text-gray-700">
                All notices shall be in writing and shall be deemed duly given if sent by email to the registered email address, registered post/courier to the registered office address, or in-platform notification through the Services.
              </p>
            </motion.div>

            <motion.div id="no-third-party" variants={itemVariants} className="space-y-4">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">33. NO THIRD-PARTY BENEFICIARIES</h2>
              <p className="text-gray-700">
                This Agreement is entered into solely between the Parties and is intended for the exclusive benefit of the Parties. No third party has any right to enforce or rely upon any provision of this Agreement.
              </p>
            </motion.div>

            <motion.div id="contact" variants={itemVariants} className="space-y-4 pb-12">
              <h2 className="text-2xl font-bold font-serif text-editorial-ink">34. CONTACT INFORMATION</h2>
              <p className="text-gray-700">For any questions regarding these Terms:</p>
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
