import { ArrowRight, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Grow More in Less Space with Smart Hydroponics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your indoor space into a thriving garden with our spiral hydroponic system.
              Sustainable, efficient, and perfect for urban farming.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 border-2 border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50">
                Learn More
                <Sprout className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80"
              alt="Hydroponic System"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};