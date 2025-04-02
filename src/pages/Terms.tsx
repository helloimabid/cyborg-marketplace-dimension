
import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
            Terms of Service
          </h1>
          
          <div className="neo-glass rounded-lg p-6 md:p-10 space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Agreement to Terms</h2>
              <p>
                By accessing or using CYBERTECH services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Cybernetic Enhancement Disclaimer</h2>
              <p className="mb-4">
                All CYBERTECH products are designed for human augmentation and enhancement. By purchasing our products, you acknowledge and accept the following:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All enhancements require proper medical oversight and installation by certified CyberMedics.</li>
                <li>CYBERTECH is not responsible for unauthorized installations or modifications.</li>
                <li>Enhancement compatibility varies by individual physical characteristics.</li>
                <li>Regular maintenance and updates are required as outlined in your product documentation.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Intellectual Property Rights</h2>
              <p>
                All CYBERTECH proprietary technology, including but not limited to neural interfaces, bionic components, and integration software, is protected under global intellectual property laws. Any attempt to reverse engineer, duplicate, or modify CYBERTECH technology without explicit written permission is strictly prohibited and subject to legal action.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Privacy & Data Collection</h2>
              <p>
                CYBERTECH collects user biometric and telemetry data to improve product functionality and user experience. By using our products, you consent to the collection and processing of this data as outlined in our Privacy Policy. All collected data is encrypted and stored in accordance with the highest security standards.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Limited Liability</h2>
              <p>
                CYBERTECH shall not be liable for any damages that result from the use of, or inability to use, our products or services. This includes but is not limited to direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United Earth Government, without regard to its conflict of law provisions.
              </p>
            </section>
            
            <p className="text-sm text-white/50 pt-4 border-t border-white/10">
              Last updated: January 15, 2100
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
