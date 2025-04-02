
import { useState, useEffect, useRef } from "react";
import { Filter, Search, ChevronDown, ArrowUpDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import GlitchText from "@/components/GlitchText";
import ProductCard from "@/components/ProductCard";
import CyberButton from "@/components/CyberButton";

// Extended product data for showcase page
const products = [
  {
    id: '1',
    name: 'NeuroCortex X9',
    category: 'Neural Interface',
    price: 25999,
    imageSrc: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1470&auto=format&fit=crop',
    description: 'Advanced brain-computer interface with 10TB neural storage capacity and quantum encryption.',
    rating: 4.9,
    tags: ['premium', 'cognitive', 'military-grade']
  },
  {
    id: '2',
    name: 'OcuFlex Titanium',
    category: 'Optical Enhancement',
    price: 18500,
    imageSrc: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop',
    description: 'Ultra-HD retinal implants with 50x optical zoom and infrared night vision capabilities.',
    rating: 4.7,
    tags: ['vision', 'tactical', 'premium']
  },
  {
    id: '3',
    name: 'CardioSync Pro',
    category: 'Cardiovascular',
    price: 32750,
    imageSrc: 'https://images.unsplash.com/photo-1634326599007-a108c3f5805e?q=80&w=1528&auto=format&fit=crop',
    description: 'Artificial heart with nanobots for continuous maintenance and 150 year operational lifespan.',
    rating: 4.8,
    tags: ['medical', 'premium', 'longevity']
  },
  {
    id: '4',
    name: 'ExoHand Genesis',
    category: 'Limb Enhancement',
    price: 14999,
    imageSrc: 'https://images.unsplash.com/photo-1624958723421-58ee9192bd54?q=80&w=1471&auto=format&fit=crop',
    description: 'Carbon fiber prosthetic with haptic feedback and 500kg grip strength.',
    rating: 4.6,
    tags: ['strength', 'dexterity', 'industrial']
  },
  {
    id: '5',
    name: 'SynaptiCore Lite',
    category: 'Neural Interface',
    price: 12499,
    imageSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop',
    description: 'Entry-level neural enhancement with 2TB storage and basic cognitive acceleration.',
    rating: 4.4,
    tags: ['cognitive', 'entry-level', 'civilian']
  },
  {
    id: '6',
    name: 'VisioSphere 360',
    category: 'Optical Enhancement',
    price: 22999,
    imageSrc: 'https://images.unsplash.com/photo-1585314062604-1a357de8b000?q=80&w=1471&auto=format&fit=crop',
    description: '360-degree vision system with augmented reality overlay and threat detection.',
    rating: 4.8,
    tags: ['vision', 'security', 'premium']
  },
  {
    id: '7',
    name: 'PulmoTech Quantum',
    category: 'Respiratory',
    price: 19750,
    imageSrc: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1472&auto=format&fit=crop',
    description: 'Synthetic lung replacement with built-in toxin filtering and oxygen efficiency boost.',
    rating: 4.5,
    tags: ['medical', 'environmental', 'premium']
  },
  {
    id: '8',
    name: 'DermaShield Pro',
    category: 'Dermal Enhancement',
    price: 15800,
    imageSrc: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1468&auto=format&fit=crop',
    description: 'Graphene-enhanced skin with adaptive camouflage and temperature regulation.',
    rating: 4.6,
    tags: ['protection', 'tactical', 'civilian']
  },
];

const categories = [
  'All Categories',
  'Neural Interface',
  'Optical Enhancement',
  'Cardiovascular',
  'Limb Enhancement',
  'Respiratory',
  'Dermal Enhancement'
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setSortDropdownOpen] = useState(false);
  
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'All Categories') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by tags
    if (activeTags.length > 0) {
      result = result.filter(product => 
        activeTags.some(tag => product.tags.includes(tag))
      );
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // Sort products
    switch (sortBy) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      // Default is 'featured', which is the original order
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy, activeTags, searchTerm]);
  
  // Get all unique tags for filter
  const allTags = Array.from(new Set(products.flatMap(product => product.tags)));
  
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };
  
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <GlitchText text="ENHANCEMENT CATALOG" />
          </h1>
          <p className="text-white/60 max-w-2xl">
            Browse our complete collection of cutting-edge cybernetic enhancements, designed for the elite citizens of 2100.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {/* Search */}
          <div className="w-full lg:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search enhancements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pl-12 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 focus:outline-none focus:border-neon-blue neo-glass"
              />
              <div className="absolute left-4 top-3.5 text-neon-blue">
                <Search size={18} />
              </div>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-3.5 text-white/60 hover:text-neon-pink transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-2/3">
            {/* Category Filter */}
            <div className="relative w-full sm:w-1/3" ref={categoryDropdownRef}>
              <button
                onClick={() => setCategoryDropdownOpen(!isCategoryDropdownOpen)}
                className="w-full flex items-center justify-between py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 neo-glass"
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={18} className={cn(
                  "transition-transform duration-300",
                  isCategoryDropdownOpen ? "rotate-180" : ""
                )} />
              </button>
              
              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 py-2 rounded-sm bg-black/90 border border-neon-blue/30 neo-glass z-20">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCategoryDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 transition-colors hover:bg-neon-blue/10",
                        selectedCategory === category ? "text-neon-blue" : "text-white/80"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Sort Filter */}
            <div className="relative w-full sm:w-1/3" ref={sortDropdownRef}>
              <button
                onClick={() => setSortDropdownOpen(!isSortDropdownOpen)}
                className="w-full flex items-center justify-between py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 neo-glass"
              >
                <div className="flex items-center">
                  <ArrowUpDown size={16} className="mr-2" />
                  <span>
                    {sortBy === 'featured' && 'Featured'}
                    {sortBy === 'price-low-high' && 'Price: Low to High'}
                    {sortBy === 'price-high-low' && 'Price: High to Low'}
                    {sortBy === 'name-a-z' && 'Name: A to Z'}
                    {sortBy === 'name-z-a' && 'Name: Z to A'}
                    {sortBy === 'rating' && 'Top Rated'}
                  </span>
                </div>
                <ChevronDown size={18} className={cn(
                  "transition-transform duration-300",
                  isSortDropdownOpen ? "rotate-180" : ""
                )} />
              </button>
              
              {isSortDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-2 py-2 rounded-sm bg-black/90 border border-neon-blue/30 neo-glass z-20">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'price-low-high', label: 'Price: Low to High' },
                    { value: 'price-high-low', label: 'Price: High to Low' },
                    { value: 'name-a-z', label: 'Name: A to Z' },
                    { value: 'name-z-a', label: 'Name: Z to A' },
                    { value: 'rating', label: 'Top Rated' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setSortDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 transition-colors hover:bg-neon-blue/10",
                        sortBy === option.value ? "text-neon-blue" : "text-white/80"
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Filter Button (Mobile) */}
            <div className="w-full sm:w-1/3">
              <button className="w-full flex items-center justify-center py-3 px-4 bg-white/5 border border-neon-blue/30 rounded-sm text-white/80 hover:bg-neon-blue/10 transition-colors neo-glass">
                <Filter size={18} className="mr-2" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Tag Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm transition-colors",
                  activeTags.includes(tag)
                    ? "bg-neon-blue text-black"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                )}
              >
                {tag}
              </button>
            ))}
            
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="px-3 py-1 rounded-full bg-white/5 text-neon-pink text-sm hover:bg-white/10 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center neo-glass rounded-lg border border-neon-blue/20">
            <div className="text-neon-blue mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium mb-2">No enhancements found</h3>
            <p className="text-white/60 mb-6">
              Try adjusting your filters or search criteria
            </p>
            <CyberButton variant="outline" onClick={() => {
              setSelectedCategory('All Categories');
              setActiveTags([]);
              setSearchTerm('');
              setSortBy('featured');
            }}>
              Reset Filters
            </CyberButton>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
