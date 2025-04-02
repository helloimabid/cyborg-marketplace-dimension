
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import GlitchText from '@/components/GlitchText';
import ProductCard from '@/components/ProductCard';

// Extended product data for showcase page (using the same data from Products.tsx)
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

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchResults, setSearchResults] = useState(products);
  
  useEffect(() => {
    if (query) {
      const term = query.toLowerCase();
      const results = products.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <GlitchText text={`SEARCH RESULTS: ${query}`} />
          </h1>
          <p className="text-white/60">
            Found {searchResults.length} results for "{query}"
          </p>
        </div>
        
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center neo-glass rounded-lg border border-neon-blue/20">
            <div className="text-neon-blue mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-medium mb-2">No results found</h3>
            <p className="text-white/60 mb-6">
              Try searching for different terms
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
