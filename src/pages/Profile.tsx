import { useState, useEffect } from 'react';
import { User, Package, Heart, CreditCard, Settings, LogOut, Shield, Brain, ChevronRight, Edit } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import GlitchText from '@/components/GlitchText';
import CyberButton from '@/components/CyberButton';
import { toast } from 'sonner';

const userData = {
  id: 'user-123',
  email: 'user@cybertech.future',
  firstName: 'Shakamal',
  lastName: 'Sajid',
  avatar: 'https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/484229009_969213428527396_9025203486548390394_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGC1MI-jJbtcrhcmAWdnFeRRg8swhujEF9GDyzCG6MQX1ysEqG7qTD0CUzbwwD0e5RtX_zFe36L7IsSQozCMQ1s&_nc_ohc=wHKjuiLNgiAQ7kNvgGrwZz9&_nc_oc=Adm8nsEVRNBbeoWn51u-Ad4JEpsUMzTcmoLTdi-DnwwlCKqbWO4Ax8Jvj1qpgjB_8Y4&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=E_28mrruNfNI6VDqgGzyew&oh=00_AYHfRXS3Nxdi7sekEjTsVf3-x3NtRWxqAbbQIUq_kpnwog&oe=67F1BDFA',
  neuralId: 'NEO-78453-XB',
  memberSince: '2099-07-15',
  enhancementLevel: 'Tier 3',
  securityClearance: 'Ultra',
  credits: 75000,
  recentOrders: [
    { id: 'ord-7842', product: 'NeuroCortex X9', date: '2100-03-15', status: 'Processing' },
    { id: 'ord-7601', product: 'Optical Enhancement V3', date: '2100-02-27', status: 'Shipped' },
    { id: 'ord-7455', product: 'Neural Firewall', date: '2100-01-18', status: 'Completed' }
  ],
  savedItems: [
    { id: 'prod-123', name: 'BioProcessor Elite', price: 18999 },
    { id: 'prod-456', name: 'Memory Expander Pro', price: 12499 }
  ]
};

const Profile = () => {
  const [user, setUser] = useState(userData);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(userData);
  const [privacySettings, setPrivacySettings] = useState({
    neuralDataCollection: true,
    marketingCommunications: false,
    neuralInterfaceAccess: true
  });
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('cybertech_user');
    if (!isLoggedIn) {
      navigate('/auth');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('cybertech_user');
    toast.success("Successfully logged out");
    navigate('/auth');
  };
  
  const handleToggle = (setting: keyof typeof privacySettings) => {
    setPrivacySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
    
    toast.success(`${setting} setting updated`);
  };
  
  const handleEditProfile = () => {
    setIsEditing(true);
  };
  
  const handleSaveProfile = () => {
    setUser(editedUser);
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };
  
  const handleCancelEdit = () => {
    setEditedUser(user);
    setIsEditing(false);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleRunSecurityScan = () => {
    toast.success("Security scan initiated. This may take a few minutes.");
    setTimeout(() => {
      toast.success("Neural security scan completed. No unauthorized access attempts detected.");
    }, 3000);
  };
  
  const handleViewNeuralMap = () => {
    toast.info("Neural map visualization loading...");
    setTimeout(() => {
      toast.success("Neural map loaded successfully");
    }, 2000);
  };
  
  const handleSecurityAction = (action: string) => {
    toast.success(`${action} process initiated`);
  };
  
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <GlitchText text="NEURAL PROFILE" />
          </h1>
          <div className="text-white/60 flex items-center">
            <span>Neural ID: {user.neuralId}</span>
            <span className="mx-2">•</span>
            <span>Enhancement Level: {user.enhancementLevel}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="neo-glass border border-neon-blue/20 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-neon-blue mr-4">
                  <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{user.firstName} {user.lastName}</h3>
                  <p className="text-white/60 text-sm">{user.email}</p>
                </div>
              </div>
              
              <div className="mb-4 p-3 rounded-md bg-neon-blue/10 border border-neon-blue/30">
                <div className="text-white/60 text-sm mb-1">Available Credits</div>
                <div className="text-neon-blue text-xl font-bold">¤ {user.credits.toLocaleString()}</div>
              </div>
              
              <div className="space-y-1 mb-6">
                <button 
                  onClick={() => setActiveTab('profile')} 
                  className={cn(
                    "w-full flex items-center p-3 rounded-md text-left transition-colors",
                    activeTab === 'profile' ? "bg-neon-blue/20 text-neon-blue" : "text-white/70 hover:bg-white/5"
                  )}
                >
                  <User size={18} className="mr-3" />
                  <span>Profile</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('orders')} 
                  className={cn(
                    "w-full flex items-center p-3 rounded-md text-left transition-colors",
                    activeTab === 'orders' ? "bg-neon-blue/20 text-neon-blue" : "text-white/70 hover:bg-white/5"
                  )}
                >
                  <Package size={18} className="mr-3" />
                  <span>Orders</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('wishlist')} 
                  className={cn(
                    "w-full flex items-center p-3 rounded-md text-left transition-colors",
                    activeTab === 'wishlist' ? "bg-neon-blue/20 text-neon-blue" : "text-white/70 hover:bg-white/5"
                  )}
                >
                  <Heart size={18} className="mr-3" />
                  <span>Wishlist</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('payment')} 
                  className={cn(
                    "w-full flex items-center p-3 rounded-md text-left transition-colors",
                    activeTab === 'payment' ? "bg-neon-blue/20 text-neon-blue" : "text-white/70 hover:bg-white/5"
                  )}
                >
                  <CreditCard size={18} className="mr-3" />
                  <span>Payment</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab('settings')} 
                  className={cn(
                    "w-full flex items-center p-3 rounded-md text-left transition-colors",
                    activeTab === 'settings' ? "bg-neon-blue/20 text-neon-blue" : "text-white/70 hover:bg-white/5"
                  )}
                >
                  <Settings size={18} className="mr-3" />
                  <span>Settings</span>
                </button>
              </div>
              
              <button 
                onClick={handleLogout}
                className="w-full flex items-center justify-center p-3 border border-white/10 rounded-md text-white/60 hover:text-neon-blue hover:border-neon-blue/30 transition-colors"
              >
                <LogOut size={18} className="mr-2" />
                <span>Logout</span>
              </button>
            </div>
            
            <div className="neo-glass border border-neon-purple/20 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3 text-white">Security Status</h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/60">Neural Firewall</span>
                <span className="text-neon-purple">Active</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/60">Thought Encryption</span>
                <span className="text-neon-purple">Level 9</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/60">Last Scan</span>
                <span className="text-white/80">12 hours ago</span>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <CyberButton size="sm" variant="outline" className="w-full" onClick={handleRunSecurityScan}>
                  <Shield size={16} className="mr-2" />
                  Run Security Scan
                </CyberButton>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 neo-glass border border-neon-blue/20 rounded-lg p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <User size={22} className="mr-3 text-neon-blue" />
                  Profile Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4 pb-2 border-b border-white/10">Personal Details</h3>
                    
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white/60 mb-1">First Name</label>
                          <input 
                            type="text"
                            name="firstName"
                            value={editedUser.firstName}
                            onChange={handleInputChange}
                            className="w-full py-2 px-3 bg-white/5 border border-neon-blue/30 rounded-sm text-white focus:outline-none focus:border-neon-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 mb-1">Last Name</label>
                          <input 
                            type="text"
                            name="lastName"
                            value={editedUser.lastName}
                            onChange={handleInputChange}
                            className="w-full py-2 px-3 bg-white/5 border border-neon-blue/30 rounded-sm text-white focus:outline-none focus:border-neon-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-white/60 mb-1">Email</label>
                          <input 
                            type="email"
                            name="email"
                            value={editedUser.email}
                            onChange={handleInputChange}
                            className="w-full py-2 px-3 bg-white/5 border border-neon-blue/30 rounded-sm text-white focus:outline-none focus:border-neon-blue"
                          />
                        </div>
                        
                        <div className="flex space-x-2 pt-2">
                          <CyberButton size="sm" onClick={handleSaveProfile}>
                            Save Changes
                          </CyberButton>
                          <CyberButton size="sm" variant="outline" onClick={handleCancelEdit}>
                            Cancel
                          </CyberButton>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-white/60">Full Name</span>
                            <span className="text-white">{user.firstName} {user.lastName}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Email</span>
                            <span className="text-white">{user.email}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Neural ID</span>
                            <span className="text-neon-blue">{user.neuralId}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Member Since</span>
                            <span className="text-white">{user.memberSince}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <CyberButton size="sm" variant="outline" onClick={handleEditProfile}>
                            <Edit size={14} className="mr-2" />
                            Edit Profile
                          </CyberButton>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4 pb-2 border-b border-white/10">Enhancement Status</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-white/60">Enhancement Level</span>
                        <span className="text-neon-blue">{user.enhancementLevel}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Security Clearance</span>
                        <span className="text-neon-purple">{user.securityClearance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Neural Capacity</span>
                        <span className="text-white">78% Utilized</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/60">Enhancement Count</span>
                        <span className="text-white">7 Active</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <CyberButton size="sm" onClick={handleViewNeuralMap}>
                        <Brain size={14} className="mr-2" />
                        View Neural Map
                      </CyberButton>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-md border border-white/10 bg-white/5">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Neural Interface Update</span>
                      <span className="text-white/60 text-sm">Yesterday, 14:32</span>
                    </div>
                    <p className="text-white/70 text-sm">
                      Your neural interface firmware was updated to version 12.4.7 with enhanced thought processing algorithms.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-md border border-white/10 bg-white/5">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Security Scan Completed</span>
                      <span className="text-white/60 text-sm">3 days ago</span>
                    </div>
                    <p className="text-white/70 text-sm">
                      Routine neural security scan completed. No unauthorized access attempts detected.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-md border border-white/10 bg-white/5">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">Enhancement Maintenance</span>
                      <span className="text-white/60 text-sm">1 week ago</span>
                    </div>
                    <p className="text-white/70 text-sm">
                      Scheduled maintenance performed on your Ocular Enhancement V2. Visual acuity improved by 12%.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Package size={22} className="mr-3 text-neon-blue" />
                  Order History
                </h2>
                
                <div className="space-y-6">
                  {user.recentOrders.map((order, index) => (
                    <div key={index} className="p-4 rounded-md border border-white/10 bg-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-neon-blue font-medium">{order.id}</div>
                        <div className="text-white mt-1">{order.product}</div>
                        <div className="text-white/60 text-sm mt-1">Ordered on {order.date}</div>
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className={cn(
                          "text-sm px-3 py-1 rounded-full",
                          order.status === 'Processing' ? "bg-yellow-500/20 text-yellow-400" :
                          order.status === 'Shipped' ? "bg-blue-500/20 text-blue-400" :
                          "bg-green-500/20 text-green-400"
                        )}>
                          {order.status}
                        </span>
                        
                        <Link to={`/order/${order.id}`} className="flex items-center text-neon-blue text-sm mt-3 hover:underline">
                          View Details
                          <ChevronRight size={14} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'wishlist' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Heart size={22} className="mr-3 text-neon-blue" />
                  Wishlist
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {user.savedItems.map((item, index) => (
                    <div key={index} className="p-4 rounded-md border border-white/10 bg-white/5 flex justify-between">
                      <div>
                        <div className="text-white font-medium">{item.name}</div>
                        <div className="text-neon-purple mt-1">¤ {item.price.toLocaleString()}</div>
                      </div>
                      
                      <div className="flex flex-col space-y-2">
                        <Link to={`/product/${item.id}`}>
                          <CyberButton size="sm" variant="outline">View</CyberButton>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'payment' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <CreditCard size={22} className="mr-3 text-neon-blue" />
                  Payment Methods
                </h2>
                
                <div className="mb-6 p-4 rounded-md border border-white/10 bg-white/5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue mr-3">
                      <Brain size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">Neural Direct Debit</div>
                      <div className="text-white/60 text-sm">Connected to your neural implant</div>
                    </div>
                    <div className="ml-auto bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">
                      Primary
                    </div>
                  </div>
                  <div className="ml-13 pl-13">
                    <div className="text-white/70 text-sm">Neural ID: ••••••••7845</div>
                    <div className="text-white/70 text-sm">Last used: Yesterday</div>
                  </div>
                </div>
                
                <div className="mb-6 p-4 rounded-md border border-white/10 bg-white/5">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 mr-3">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <div className="text-white font-medium">Quantum Card</div>
                      <div className="text-white/60 text-sm">Expires 06/2105</div>
                    </div>
                  </div>
                  <div className="ml-13 pl-13">
                    <div className="text-white/70 text-sm">Card number: ••••••••••••4921</div>
                    <div className="text-white/70 text-sm">Last used: 3 weeks ago</div>
                  </div>
                </div>
                
                <CyberButton>
                  <CreditCard size={16} className="mr-2" />
                  Add Payment Method
                </CyberButton>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Settings size={22} className="mr-3 text-neon-blue" />
                  Account Settings
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3 pb-2 border-b border-white/10">Privacy Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white">Neural Data Collection</div>
                          <div className="text-white/60 text-sm">Allow anonymous data collection to improve services</div>
                        </div>
                        <div 
                          className={cn(
                            "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors",
                            privacySettings.neuralDataCollection ? "bg-neon-blue/30" : "bg-white/20"
                          )}
                          onClick={() => handleToggle('neuralDataCollection')}
                        >
                          <div 
                            className={cn(
                              "w-4 h-4 rounded-full transition-transform",
                              privacySettings.neuralDataCollection 
                                ? "bg-neon-blue translate-x-6" 
                                : "bg-white/60"
                            )}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white">Marketing Communications</div>
                          <div className="text-white/60 text-sm">Receive updates on new enhancements</div>
                        </div>
                        <div 
                          className={cn(
                            "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors",
                            privacySettings.marketingCommunications ? "bg-neon-blue/30" : "bg-white/20"
                          )}
                          onClick={() => handleToggle('marketingCommunications')}
                        >
                          <div 
                            className={cn(
                              "w-4 h-4 rounded-full transition-transform",
                              privacySettings.marketingCommunications 
                                ? "bg-neon-blue translate-x-6" 
                                : "bg-white/60"
                            )}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white">Neural Interface Access</div>
                          <div className="text-white/60 text-sm">Allow CYBERTECH to access your neural interface</div>
                        </div>
                        <div 
                          className={cn(
                            "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors",
                            privacySettings.neuralInterfaceAccess ? "bg-neon-blue/30" : "bg-white/20"
                          )}
                          onClick={() => handleToggle('neuralInterfaceAccess')}
                        >
                          <div 
                            className={cn(
                              "w-4 h-4 rounded-full transition-transform",
                              privacySettings.neuralInterfaceAccess 
                                ? "bg-neon-blue translate-x-6" 
                                : "bg-white/60"
                            )}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 pb-2 border-b border-white/10">Security Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white">Change Neural Key (Password)</div>
                        <CyberButton 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSecurityAction('Password change')}
                        >
                          Update
                        </CyberButton>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-white">Two-Factor Authentication</div>
                        <CyberButton 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSecurityAction('Two-factor authentication')}
                        >
                          Enable
                        </CyberButton>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-white">Security Questions</div>
                        <CyberButton 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleSecurityAction('Security questions')}
                        >
                          Manage
                        </CyberButton>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3 pb-2 border-b border-white/10">Account Actions</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="text-white">Download Personal Data</div>
                        <CyberButton 
                          size="sm" 
                          variant="outline"
                          onClick={() => {
                            toast.success("Starting data download");
                            setTimeout(() => {
                              toast.success("Personal data downloaded successfully");
                            }, 2000);
                          }}
                        >
                          Download
                        </CyberButton>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-white">Delete Account</div>
                        <CyberButton 
                          size="sm" 
                          variant="outline" 
                          className="text-red-500 border-red-500/30 hover:bg-red-500/10"
                          onClick={() => {
                            toast.error("Warning: Account deletion is irreversible");
                            setTimeout(() => {
                              toast.info("Enter your password to confirm account deletion");
                            }, 1000);
                          }}
                        >
                          Delete
                        </CyberButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
