
import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterface = () => {
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
            Neural Interface
          </h1>
          
          <div className="neo-glass rounded-lg p-6 md:p-10 space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">About Our Neural Interface Technology</h2>
              <p>
                CYBERTECH's Neural Interface is our flagship brain-computer interface technology that enables direct communication between the human brain and digital systems. Our proprietary technology allows for seamless integration with both our cybernetic enhancements and external digital environments.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Thought-Based Control:</strong> Direct mental commands for all connected CYBERTECH enhancements</li>
                <li><strong>Sensory Feedback:</strong> Real-time sensory data from cybernetic components</li>
                <li><strong>Memory Enhancement:</strong> External storage and recall capabilities</li>
                <li><strong>Neural Network Access:</strong> Direct brain connection to the CYBERTECH global information network</li>
                <li><strong>Augmented Perception:</strong> Enhanced sensory processing and reality overlays</li>
                <li><strong>Emotional Regulation:</strong> Optional mood stabilization and stress management</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Installation Process</h2>
              <p>
                Neural Interface installation is a minimally invasive procedure performed by certified CyberMed surgeons. The process involves the placement of quantum nano-receivers throughout the cerebral cortex, with primary connection nodes at the temporal and frontal lobes. Recovery time is typically 48-72 hours, with full neural calibration achieved within one week.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Safety and Security</h2>
              <p className="mb-4">
                CYBERTECH prioritizes the safety and security of your neural data above all else. Our interfaces include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Military-grade quantum encryption for all neural transmissions</li>
                <li>Isolated secure processing for critical thought functions</li>
                <li>Biometric authentication for access control</li>
                <li>Automated threat detection and blocking</li>
                <li>Emergency offline mode with gesture activation</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Compatibility</h2>
              <p>
                The CYBERTECH Neural Interface is compatible with all current CYBERTECH enhancements and most major third-party cybernetic systems that adhere to the Universal Neural Protocol (UNP) standards of 2095 or later. Legacy systems may require an adapter module, available through authorized retailers.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">Support and Maintenance</h2>
              <p>
                All Neural Interface systems come with a standard 10-year warranty and lifetime software updates. Recommended maintenance includes annual neural calibration at any CYBERTECH clinic and quarterly software diagnostics, which can be performed remotely or at home.
              </p>
            </section>
            
            <p className="text-sm text-white/50 pt-4 border-t border-white/10">
              For more information or to schedule a consultation, please visit any CYBERTECH clinic or contact our Neural Division.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralInterface;
