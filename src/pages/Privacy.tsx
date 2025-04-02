
import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neon-blue">
            Privacy Policy
          </h1>
          
          <div className="neo-glass rounded-lg p-6 md:p-10 space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Introduction</h2>
              <p>
                CYBERTECH ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our products and services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
              <p className="mb-4">We collect several types of information from and about users of our products, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal identification information (Name, email address, bio-signature)</li>
                <li>Biometric data (Neural patterns, physical metrics, enhancement integration data)</li>
                <li>Enhancement usage statistics and performance metrics</li>
                <li>Neural interface feedback and calibration data</li>
                <li>Environmental interaction data from your enhancements</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our products and services</li>
                <li>Develop new features and functionality</li>
                <li>Monitor the effectiveness of our enhancements</li>
                <li>Detect and prevent malfunctions or unauthorized access</li>
                <li>Provide critical updates and security patches</li>
                <li>Comply with regulatory requirements and law enforcement requests</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Neural Data Security</h2>
              <p>
                We implement advanced quantum encryption and neural firewalls to protect your data. All neural interfaces are equipped with proprietary security protocols that prevent unauthorized access to your cognitive functions and personal data.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Access</h2>
              <p>
                We do not sell your data to third parties. However, we may share anonymized, aggregate data with research partners to advance cybernetic technology. All such partnerships are strictly governed by confidentiality agreements.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Your Privacy Rights</h2>
              <p className="mb-4">
                As a CYBERTECH user, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request data modification or deletion</li>
                <li>Opt out of non-essential data collection</li>
                <li>Configure neural privacy settings</li>
                <li>Request a copy of your enhancement data</li>
              </ul>
            </section>
            
            <p className="text-sm text-white/50 pt-4 border-t border-white/10">
              Last updated: March 22, 2100
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
