import React from 'react';
import Container from './Layout/Container';
import privacy from '../assets/privacy.jpg'
function PrivacyPolicy() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-white rounded-lg shadow-md max-w-6xl mx-auto mt-8">
        
        {/* Privacy Policy Text Section */}
        <div className="flex flex-col justify-center p-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to Clesto. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Information We Collect</h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6 leading-relaxed">
            <li>Personal Information: We may collect your name, email address, and other contact information when you voluntarily submit it through forms or account registration.</li>
            <li>Usage Data: We collect information on how you interact with our website, including IP address, browser type, and pages visited.</li>
            <li>Cookies: Our website may use cookies to enhance your user experience.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-gray-700">How We Use Your Information</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            - To improve our services and user experience.<br />
            - To respond to your inquiries and support requests.<br />
            - To send promotional content and updates with your consent.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us</h3>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:support@clesto.com" className="text-blue-600 underline hover:text-blue-800">
              support@clesto.com
            </a>.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center h-100 w-100">
          <img 
            src={privacy}
            alt="Privacy Illustration" 
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>  
      </div>
    </Container>
  );
}

export default PrivacyPolicy;
