
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, ShieldAlert, Lock, Eye, Database } from 'lucide-react';

const Security = () => {
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
            Security Protocols
          </h1>
          
          <div className="neo-glass rounded-lg p-6 md:p-10 space-y-12 text-white/80">
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-neon-blue/10 p-4 rounded-full">
                <ShieldCheck size={40} className="text-neon-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">Enhancement Security</h2>
                <p>
                  All CYBERTECH enhancements are secured with military-grade encryption and multi-layer authentication. Our proprietary NEUROSEC™ system provides continuous protection against unauthorized access attempts, cyber attacks, and rogue signals that could compromise your enhancements or neural data.
                </p>
              </div>
            </section>
            
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-neon-blue/10 p-4 rounded-full">
                <Database size={40} className="text-neon-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">Data Protection</h2>
                <p>
                  Your neural and biometric data is protected by quantum encryption and stored in secure, distributed data centers. All data transmissions are encrypted end-to-end, ensuring that your information remains private. We employ a strict data minimization policy, collecting only what is necessary for your enhancements to function optimally.
                </p>
              </div>
            </section>
            
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-neon-blue/10 p-4 rounded-full">
                <Shield size={40} className="text-neon-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">Threat Response</h2>
                <p>
                  Our Security Operations Center (SOC) actively monitors the global network for threats targeting enhancement users. We deploy automated countermeasures and security patches in real-time to address evolving threats. In the event of a detected attack, your enhancements will automatically activate defensive protocols to protect your systems and data.
                </p>
              </div>
            </section>
            
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-neon-blue/10 p-4 rounded-full">
                <Lock size={40} className="text-neon-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">Authentication</h2>
                <p>
                  CYBERTECH uses multi-factor biometric authentication, including neural pattern recognition, retinal scanning, and DNA verification for critical operations. Enhanced users can customize their security levels based on their personal threat profile and privacy preferences.
                </p>
              </div>
            </section>
            
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-neon-blue/10 p-4 rounded-full">
                <Eye size={40} className="text-neon-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">Privacy Controls</h2>
                <p>
                  Take control of your privacy with our granular permission system. Choose exactly what data is shared, with whom, and for what purpose. Our privacy dashboard allows you to monitor all data access requests and revoke permissions at any time. Your enhancement data belongs to you, and we provide the tools to maintain your privacy.
                </p>
              </div>
            </section>
            
            <section className="flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-neon-blue/10 p-4 rounded-full">
                <ShieldAlert size={40} className="text-neon-blue" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">Emergency Protocols</h2>
                <p>
                  In the event of a critical security breach or emergency situation, CYBERTECH enhancements can activate Emergency Lockdown Mode, isolating critical systems while maintaining essential functions. Our 24/7 Emergency Response Team can be contacted through your neural interface or any communication device for immediate assistance.
                </p>
              </div>
            </section>
            
            <div className="bg-neon-blue/5 p-6 rounded border border-neon-blue/20 mt-8">
              <h3 className="text-xl font-medium mb-3 text-neon-blue">Security Certification</h3>
              <p>
                CYBERTECH's security protocols exceed all requirements set by the Global Cybernetic Security Standards (GCSS) and have been certified by independent security auditors. We are committed to maintaining the highest level of security to protect our users and their enhancements.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;
