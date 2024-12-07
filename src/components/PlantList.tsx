import { motion } from 'framer-motion';

const plants = [
  {
    name: 'Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=800&q=80',
    growthTime: '30-35 days',
    difficulty: 'Easy',
  },
  {
    name: 'Basil',
    image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?auto=format&fit=crop&w=800&q=80',
    growthTime: '20-25 days',
    difficulty: 'Easy',
  },
  {
    name: 'Spinach',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    growthTime: '25-30 days',
    difficulty: 'Medium',
  },
  {
    name: 'Cherry Tomatoes',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80',
    growthTime: '60-70 days',
    difficulty: 'Advanced',
  },
];

export const PlantList = () => {
  return (
    <section id="plants" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Plants You Can Grow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plants.map((plant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Growth Time: {plant.growthTime}</p>
                  <p>Difficulty: {plant.difficulty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};