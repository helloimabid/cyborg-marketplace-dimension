import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronRight, Shield, Zap, Award, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';

const timeline = [
  {
    year: 2075,
    title: 'Company Founded',
    description: 'CYBERTECH established by Dr. Elena Chen and Dr. Marcus Webb to push the frontiers of human enhancement.'
  },
  {
    year: 2082,
    title: 'First Neural Interface',
    description: 'Released the groundbreaking SynaptiCore 1.0, revolutionizing brain-computer interfaces.'
  },
  {
    year: 2089,
    title: 'Global Expansion',
    description: 'Opened research centers in Neo-Tokyo, Singapore, and European Union megacities.'
  },
  {
    year: 2094,
    title: 'Military Contracts',
    description: 'Secured exclusive partnerships with global defense forces for enhanced soldier programs.'
  },
  {
    year: 2100,
    title: 'Present Day',
    description: 'Leading the industry with over 200 patented enhancement technologies and 5 million augmented customers.'
  }
];

const values = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Innovation',
    description: "Constantly pushing the boundaries of what's possible in human enhancement technology."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Security',
    description: "Quantum-encrypted enhancements with impenetrable neural firewalls for complete protection."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Excellence',
    description: "Uncompromising quality in every enhancement, backed by our 50-year warranty."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Humanity',
    description: "Advancing human potential while maintaining ethical standards and user autonomy."
  }
];

const About = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index') || 0);
            setActiveTimelineIndex(index);
          }
        });
      },
      { threshold: 0.7 }
    );
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));
    
    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);
  
  return (
    <main className="pt-32 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cyber-grid opacity-20 -z-10"
          style={{ transform: `translateY(${scrollPosition * 0.1}px)` }}
        />
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gradient">ABOUT CYBERTECH</span>
              <GlitchText text="LEADERS IN ENHANCEMENT" className="block mt-2" />
            </h1>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Since 2075, we've been at the forefront of cybernetic innovation, 
              pushing the boundaries of what it means to be human in the 22nd century.
            </p>
          </div>
        </div>
        
        <div 
          className="hidden md:block absolute h-40 w-40 rounded-full bg-neon-blue/5 border border-neon-blue/10 blur-xl -z-10"
          style={{ 
            left: mousePosition.x - 80, 
            top: mousePosition.y - 80,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.5s cubic-bezier(0.23, 1, 0.32, 1), top 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
          }}
        />
      </section>
      
      {/* Company Timeline */}
      <section 
        ref={timelineRef}
        className="py-24 relative"
      >
        <div 
          className="absolute inset-0 bg-neon-gradient animate-gradient-shift opacity-5 -z-10"
          style={{ 
            backgroundSize: '200% 200%',
            transform: `translateY(${(scrollPosition - 500) * 0.05}px)` 
          }}
        />
        
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <GlitchText text="OUR EVOLUTION" />
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A quarter-century of innovation and revolutionary advancements in human enhancement.
            </p>
          </div>
          
          <div className="md:hidden">
            <div className="relative pb-12">
              <div className="absolute h-full w-0.5 bg-neon-blue/30 left-8 top-0"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="mb-12 pl-16 relative timeline-item" data-index={index}>
                  <div className={cn(
                    "absolute left-[29px] -translate-x-1/2 w-4 h-4 rounded-full border-2",
                    activeTimelineIndex === index 
                      ? "border-neon-blue bg-neon-blue animate-pulse-neon" 
                      : "border-neon-blue/50 bg-background"
                  )}></div>
                  
                  <div className={cn(
                    "neo-glass p-6 border rounded-lg transition-all duration-500",
                    activeTimelineIndex === index 
                      ? "border-neon-blue/30 transform-none opacity-100" 
                      : "border-white/5 translate-y-4 opacity-70"
                  )}>
                    <div className="text-neon-blue font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute h-0.5 bg-neon-blue/30 left-0 right-0 top-24"></div>
              
              <div className="flex">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "w-1/5 px-4 timeline-item",
                      index % 2 === 0 ? "pt-0 pb-48" : "pt-48 pb-0"
                    )}
                    data-index={index}
                  >
                    <div className={cn(
                      "absolute top-24 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10",
                      activeTimelineIndex === index 
                        ? "border-neon-blue bg-neon-blue animate-pulse-neon" 
                        : "border-neon-blue/50 bg-background"
                    )}></div>
                    
                    <div className={cn(
                      "neo-glass p-6 border rounded-lg transition-all duration-500 h-full",
                      activeTimelineIndex === index 
                        ? "border-neon-blue/30 transform-none opacity-100" 
                        : "border-white/5 translate-y-4 opacity-70"
                    )}>
                      <div className="text-neon-blue font-bold text-xl mb-1">{item.year}</div>
                      <h3 className="text-white text-lg font-medium mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.description}</p>
                    </div>
                    
                    <div className={cn(
                      "absolute w-0.5 bg-neon-blue/30 left-1/2 h-24",
                      index % 2 === 0 ? "top-24" : "bottom-24 transform translate-y-[1px]"
                    )}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide our mission to enhance humanity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="neo-glass rounded-lg p-8 border border-white/5 group hover:border-neon-blue/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-md flex items-center justify-center bg-neon-blue/10 text-neon-blue mb-6 group-hover:animate-pulse-neon">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-white group-hover:text-neon-blue transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/50">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 relative">
        <div className="absolute inset-0 circuit-bg opacity-20 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="neo-glass p-8 border border-neon-blue/20 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">
                <GlitchText text="CONTACT US" />
              </h2>
              <p className="text-white/60 mb-8">
                Have questions about our enhancements? Our team of cybernetic specialists is ready to assist you.
              </p>
              
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">First Name</label>
                    <input 
                      type="text" 
                      className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white/80 mb-2 text-sm">Email</label>
                  <input 
                    type="email" 
                    className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-white/80 mb-2 text-sm">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue resize-none"
                  ></textarea>
                </div>
                
                <div className="text-right">
                  <CyberButton>
                    Send Message <Send size={14} className="ml-2" />
                  </CyberButton>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
              <p className="text-white/60 mb-8">
                Visit our headquarters or contact us through your preferred communication method.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-neon-blue/30 text-neon-blue">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium mb-2">Headquarters</h3>
                    <p className="text-white/60">
                      CyberTower, Level 180<br />
                      Neo-Tokyo District 7<br />
                      Global Union, Earth
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-neon-blue/30 text-neon-blue">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium mb-2">Email</h3>
                    <p className="text-white/60">
                      enhance@cybertech.future<br />
                      support@cybertech.future
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-neon-blue/30 text-neon-blue">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-medium mb-2">Neural Connect</h3>
                    <p className="text-white/60">
                      Direct: #CYB-22408-VH<br />
                      Public: 700.331.8000
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 neo-glass border border-neon-purple/30 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">Ready to evolve?</h3>
                    <p className="text-white/60">Schedule a consultation today.</p>
                  </div>
                  <CyberButton>
                    Get Started <ChevronRight size={14} className="ml-1" />
                  </CyberButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
