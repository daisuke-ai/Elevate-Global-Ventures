import React from 'react';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
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
            <h1 className="text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Last Updated: April 14, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing and using the Elevate Global Ventures Group website (the "Site") and its services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">2. Use of the Website</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Site and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              You agree not to use the Site for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Site in any way that could damage the Site, the services, or the general business of Elevate Global Ventures Group.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              The Site and its original content, features, and functionality are owned by Elevate Global Ventures Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">4. User Submissions and Communication Consent</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When you submit information through forms on our Site (e.g., property information, loan applications, contact requests), you grant Elevate Global Ventures Group the right to use this information to respond to your inquiries, provide services, and for other business purposes as outlined in our Privacy Policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By providing your phone number and email address, you consent to receive communications from Elevate Global Ventures Group, including marketing and non-marketing text messages and emails, as detailed in our Privacy Policy and on the submission forms. You may opt-out of communications as described therein.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">5. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              The Site may contain links to third-party websites or services that are not owned or controlled by Elevate Global Ventures Group (e.g., links within blog posts, social media links). Elevate Global Ventures Group has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Elevate Global Ventures Group shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">6. Disclaimers and Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Site is provided on an "AS IS" and "AS AVAILABLE" basis. Elevate Global Ventures Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
             <p className="text-gray-600 leading-relaxed">
              In no event shall Elevate Global Ventures Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Elevate Global Ventures Group's website, even if Elevate Global Ventures Group or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">7. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              Any claim relating to Elevate Global Ventures Group's website shall be governed by the laws of the State of Hawaii, United States, without regard to its conflict of law provisions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Elevate Global Ventures Group reserves the right to modify these terms from time to time at our sole discretion. Therefore, you should review these page periodically. Your continued use of the Website or our service after any such change constitutes your acceptance of the new Terms. If you do not agree to any of these terms or any future version of the Terms, do not use or access (or continue to access) the website or the service. The date of the last update will be clearly posted at the top of this page.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-darkblue-900 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
               <p><span className="font-medium">📧 Email:</span> <a href="mailto:aloha@wepayhousecash.com" className="text-blue-600 hover:underline">aloha@wepayhousecash.com</a></p>
              <p><span className="font-medium">📍 Address:</span></p>
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

export default TermsAndConditions; 