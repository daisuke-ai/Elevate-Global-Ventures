import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 pb-32 bg-darkblue-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-darkblue-900/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Effective Date: April 12, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed">
              At Elevate Global Ventures Group, your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our website, services, and communications.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong className="font-medium">Personal Information:</strong> Name, phone number, email address, property address, etc.</li>
              <li><strong className="font-medium">Usage Data:</strong> IP address, browser type, time of visit, and referring URLs.</li>
              <li><strong className="font-medium">Communication Data:</strong> Text message or email interactions, form submissions, and call records.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Respond to your inquiries and property submissions</li>
              <li>Provide cash offers and updates on your property</li>
              <li>Send appointment reminders or follow-ups via SMS, email, or phone</li>
              <li>Analyze site traffic and improve our services</li>
              <li>Comply with legal obligations or resolve disputes</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              We also use collected data to support our mission of revitalizing distressed properties, assisting homeowners in transition, and contributing to community preservation and disaster recovery efforts.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell your personal information. We may share information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Internal staff and contractors under confidentiality</li>
              <li>Third-party service providers (e.g., CRM, SMS, or email tools) strictly to perform services on our behalf</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We do not sell, rent, or share your phone number or SMS opt-in consent data with third parties or affiliates for their marketing purposes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">5. Communication & Consent</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              By submitting your information through our website forms, you consent to receive communications from Elevate Global Ventures Group via phone, SMS/text messages, and email.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong className="font-medium">Marketing Messages:</strong> Promotions, offers, and investment opportunities require your express written consent via checkbox opt-in on our forms.</li>
              <li><strong className="font-medium">Non-Marketing Messages:</strong> Appointment reminders, property offer updates, and loan application status updates require your express consent via checkbox opt-in.</li>
              <li>Consent to receive SMS messages is not a condition of any purchase or service.</li>
              <li>You may opt out of SMS at any time by replying <strong className="font-medium">STOP</strong> to any message. After opting out, you will receive one final confirmation message.</li>
              <li>For help, reply <strong className="font-medium">HELP</strong> to any message or contact us at <a href="mailto:aloha@wepayhousecash.com" className="text-blue-600 hover:underline">aloha@wepayhousecash.com</a> or call <a href="tel:808-736-6036" className="text-blue-600 hover:underline">808-736-6036</a>.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">6. SMS/Text Messaging Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Elevate Global Ventures Group offers an SMS messaging program to provide property updates, cash offer notifications, appointment reminders, loan application status, and promotional offers related to our real estate and financial services.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>By opting in, you agree to receive recurring text messages from Elevate Global Ventures Group at the mobile number you provided.</li>
              <li>Message frequency varies based on your interactions with us.</li>
              <li>Message and data rates may apply. Contact your wireless carrier for pricing details.</li>
              <li>You can opt out at any time by texting <strong className="font-medium">STOP</strong>. You will receive one final confirmation message.</li>
              <li>For assistance, text <strong className="font-medium">HELP</strong> or contact us at <a href="mailto:aloha@wepayhousecash.com" className="text-blue-600 hover:underline">aloha@wepayhousecash.com</a> or call <a href="tel:808-736-6036" className="text-blue-600 hover:underline">808-736-6036</a>.</li>
              <li>We will not sell, rent, or share your phone number or SMS consent information with any third parties or affiliates for marketing purposes.</li>
              <li>Your data may be shared with service providers (such as our CRM and messaging platform) solely for delivering the messages you consented to receive.</li>
              <li>Participating carriers are not liable for delayed or undelivered messages.</li>
              <li>Supported carriers include but are not limited to: AT&T, Verizon, T-Mobile, Sprint, Boost Mobile, Cricket, MetroPCS, and U.S. Cellular.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">7. TCPA Compliance</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Elevate Global Ventures Group complies with the Telephone Consumer Protection Act (TCPA) and all applicable federal and state regulations governing text message and telephone communications.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>We only send text messages to individuals who have provided prior express consent (for informational messages) or prior express written consent (for marketing messages) through our website forms.</li>
              <li>We honor all opt-out requests promptly. Upon receiving a STOP message, we will cease sending further communications within a reasonable timeframe.</li>
              <li>If you believe you have received a message in error, please contact us immediately at <a href="mailto:aloha@wepayhousecash.com" className="text-blue-600 hover:underline">aloha@wepayhousecash.com</a> or call <a href="tel:808-736-6036" className="text-blue-600 hover:underline">808-736-6036</a>.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">8. Cookies & Analytics</h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and third-party analytics to understand how visitors use our site and improve the user experience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">9. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement reasonable technical and organizational measures to protect your information against unauthorized access, loss, or misuse.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">10. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You may request access to, correction of, or deletion of your personal data at any time by contacting us.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">11. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically. Updates will be reflected on this page with a revised effective date.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <p><span className="font-medium">Email:</span> <a href="mailto:aloha@wepayhousecash.com" className="text-blue-600 hover:underline">aloha@wepayhousecash.com</a></p>
              <p><span className="font-medium">Address:</span></p>
              <p className="pl-4 text-gray-600">Elevate Global Ventures Group<br />
                200 N Vineyard Blvd, Ste. A325 A325 - 5603<br />
                Honolulu, HI 96817, United States
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
