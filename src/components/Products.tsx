import { motion } from 'framer-motion';
import { Leaf, Droplets, Sprout } from 'lucide-react';

const products = [
  {
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    title: 'Spiral Hydroponic System',
    description: 'Space-efficient vertical growing system perfect for homes and small spaces.',
    price: '$299',
  },
  {
    icon: <Droplets className="w-12 h-12 text-blue-600" />,
    title: 'Nutrient Solutions',
    description: 'Premium plant nutrients optimized for maximum growth and yield.',
    price: '$24.99',
  },
  {
    icon: <Sprout className="w-12 h-12 text-green-500" />,
    title: 'Premium Seeds',
    description: 'High-quality seeds selected for hydroponic growing conditions.',
    price: '$9.99',
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <span className="text-2xl font-bold text-green-600">{product.price}</span>
                <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};