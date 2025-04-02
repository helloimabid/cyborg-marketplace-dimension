
import React from 'react';
import { Mail, Phone, MapPin, Globe, ChevronRight, Users, History, Shield } from 'lucide-react';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';

const Contact = () => {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText text="CONTACT US" />
          </h1>
          <p className="text-white/60">
            Have questions about our augmentations? Reach out to our team of neural specialists for personalized assistance.
          </p>
        </div>
        
        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="neo-glass border border-neon-blue/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-4 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-white/70">support@cybertech.future</p>
                  <p className="text-white/70">sales@cybertech.future</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-4 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-white/70">+1 (800) CYBER-TECH</p>
                  <p className="text-white/70">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-4 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Headquarters</h3>
                  <p className="text-white/70">Neo Tokyo Tower, Level 142</p>
                  <p className="text-white/70">Shibuya District, Tokyo, Japan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-4 mt-1">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Global Locations</h3>
                  <p className="text-white/70">Installation Centers in 42 major cities worldwide</p>
                  <p className="text-white/70">Virtual consultations available globally</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="neo-glass border border-neon-blue/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-neon-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-blue"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-neon-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-blue"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-white/5 border border-neon-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-blue"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-white/5 border border-neon-blue/30 rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-blue"
                  placeholder="Enter your message"
                />
              </div>
              
              <div className="pt-2">
                <CyberButton className="w-full">
                  Send Message
                </CyberButton>
              </div>
            </form>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="neo-glass border border-neon-blue/20 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">Are consultations available before installation?</h3>
              <p className="text-white/70">Yes, we offer both in-person and virtual consultations with our neural specialists before any enhancement procedure.</p>
            </div>
            
            <div className="neo-glass border border-neon-blue/20 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">What is the warranty period for augmentations?</h3>
              <p className="text-white/70">All CYBERTECH enhancements come with a standard 10-year warranty, with options to extend up to 25 years with our premium maintenance plan.</p>
            </div>
            
            <div className="neo-glass border border-neon-blue/20 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2">How long is the recovery period after installation?</h3>
              <p className="text-white/70">Recovery varies by enhancement type, ranging from 24 hours for basic interfaces to 2 weeks for major cardiovascular replacements. Our medical team provides full support throughout the recovery process.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
