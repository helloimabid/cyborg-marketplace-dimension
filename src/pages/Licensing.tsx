
import React from 'react';
import { motion } from 'framer-motion';

const Licensing = () => {
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
            Licensing Information
          </h1>
          
          <div className="neo-glass rounded-lg p-6 md:p-10 space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Product Licensing</h2>
              <p>
                All CYBERTECH enhancements and cybernetic products are licensed, not sold, to end users. When you purchase a CYBERTECH product, you are acquiring a license to use the product in accordance with these licensing terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">License Grant</h2>
              <p className="mb-4">
                Subject to your compliance with these terms, CYBERTECH grants you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use your purchased enhancement for personal use only</li>
                <li>Receive firmware updates and security patches</li>
                <li>Access the CYBERTECH neural network for standard operations</li>
                <li>Utilize your enhancement's full functionality within legal parameters</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Restrictions</h2>
              <p className="mb-4">
                As a licensee, you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reverse engineer or attempt to extract the source code of any CYBERTECH product</li>
                <li>Bypass or disable security or encryption features</li>
                <li>Use your enhancement for military or unauthorized law enforcement purposes</li>
                <li>Transfer your license to another individual without CYBERTECH approval</li>
                <li>Modify hardware components beyond authorized customization parameters</li>
                <li>Use your enhancement to harm others or violate privacy laws</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Enhancement Registration</h2>
              <p>
                All CYBERTECH enhancements must be registered with the Global Enhancement Registry (GER) within 30 days of installation. Failure to register may result in limited functionality and potential legal consequences in certain jurisdictions.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Software Updates</h2>
              <p>
                CYBERTECH will periodically provide software updates to improve functionality, security, and compatibility. These updates are covered under your license and may be automatically downloaded and installed. Critical security updates are mandatory and cannot be declined.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">License Termination</h2>
              <p>
                CYBERTECH may terminate your license if you fail to comply with these terms. Upon termination, certain non-essential features of your enhancement may be disabled remotely. Life-sustaining or critical medical functions will never be remotely disabled, in accordance with the Cybernetic Ethics Act of 2090.
              </p>
            </section>
            
            <p className="text-sm text-white/50 pt-4 border-t border-white/10">
              Last updated: April 3, 2100
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Licensing;
