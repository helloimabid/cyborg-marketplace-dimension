
import React from 'react';
import { motion } from 'framer-motion';

const Cookies = () => {
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
            Cookie Policy
          </h1>
          
          <div className="neo-glass rounded-lg p-6 md:p-10 space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">What Are Cookies</h2>
              <p>
                Cookies are small data files that are placed on your device when you visit our website. They help us provide you with a better browsing experience and allow us to remember your preferences.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Types of Cookies We Use</h2>
              <p className="mb-4">We use the following types of cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be switched off.</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website.</li>
                <li><strong>Functional Cookies:</strong> These allow our website to remember choices you make and provide enhanced features.</li>
                <li><strong>Targeting Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed.</li>
                <li><strong>Neural Interface Cookies:</strong> For users with direct neural interfaces, these specialized cookies optimize the digital-neural experience.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies for various purposes, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Understanding and saving user preferences</li>
                <li>Keeping track of advertisements and preventing the same ad from reappearing</li>
                <li>Compiling aggregate data about site traffic and site interactions</li>
                <li>Optimizing neural interface responsiveness and calibration</li>
                <li>Enhancing cybernetic visual processing for augmented reality users</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Managing Cookies</h2>
              <p className="mb-4">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.
              </p>
              <p>
                For users with neural interfaces, cookie preferences can be managed through your neural settings panel or by subvocalizing "Cookie Preferences" while on our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Cookies</h2>
              <p>
                Some of our pages display content from external providers, such as YouTube, Facebook, and Twitter. To view this third-party content, you first have to accept their specific terms and conditions. This includes their cookie policies, which we have no control over.
              </p>
            </section>
            
            <p className="text-sm text-white/50 pt-4 border-t border-white/10">
              Last updated: February 8, 2100
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
