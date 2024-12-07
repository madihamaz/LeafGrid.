import { Heart, X, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const plants = [
  {
    id: 1,
    name: 'Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80',
    description: 'Fast-growing, perfect for beginners',
    traits: ['Easy care', 'Quick harvest', 'High yield'],
    match: 95,
  },
  {
    id: 2,
    name: 'Basil',
    image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?auto=format&fit=crop&w=800&q=80',
    description: 'Aromatic herb, great for cooking',
    traits: ['Fragrant', 'Continuous harvest', 'Versatile'],
    match: 88,
  },
  {
    id: 3,
    name: 'Cherry Tomatoes',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    description: 'Sweet and rewarding to grow',
    traits: ['Needs support', 'Long growing', 'High maintenance'],
    match: 75,
  },
];

export const PlantMatch = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setShowDetails(true);
    } else {
      setCurrentIndex((prev) => (prev + 1) % plants.length);
    }
  };

  return (
    <section id="match" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Find Your Plant Match</h2>
        <div className="max-w-md mx-auto">
          {!showDetails ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src={plants[currentIndex].image}
                alt={plants[currentIndex].name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white">{plants[currentIndex].name}</h3>
                <p className="text-white/90">{plants[currentIndex].description}</p>
                <div className="flex gap-2 mt-2">
                  {plants[currentIndex].traits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-white/20 text-white text-sm px-2 py-1 rounded-full"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={plants[currentIndex].image}
                  alt={plants[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold">{plants[currentIndex].name}</h3>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-green-600" />
                    <span className="text-lg font-semibold text-green-600">
                      {plants[currentIndex].match}% Match
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Growing Tips:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Maintain water temperature between 65-75°F</li>
                  <li>Check pH levels weekly</li>
                  <li>Harvest regularly to promote growth</li>
                </ul>
                <button
                  onClick={() => {
                    setShowDetails(false);
                    setCurrentIndex((prev) => (prev + 1) % plants.length);
                  }}
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mt-4"
                >
                  Continue Matching
                </button>
              </div>
            </motion.div>
          )}
          {!showDetails && (
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => handleSwipe('left')}
                className="p-4 bg-white rounded-full shadow-lg hover:bg-red-50"
              >
                <X className="w-8 h-8 text-red-500" />
              </button>
              <button
                onClick={() => handleSwipe('right')}
                className="p-4 bg-white rounded-full shadow-lg hover:bg-green-50"
              >
                <Heart className="w-8 h-8 text-green-500" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};