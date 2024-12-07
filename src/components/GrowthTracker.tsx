import { Sprout, Droplet, Sun, Coins } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGameStore } from '../stores/gameStore';
import { useEffect } from 'react';

export const GrowthTracker = () => {
  const { plants, waterPlant, addNutrients, harvestPlant, updateGrowth } = useGameStore();

  useEffect(() => {
    const interval = setInterval(() => {
      updateGrowth();
    }, 3000);
    return () => clearInterval(interval);
  }, [updateGrowth]);

  return (
    <section id="game" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Your Garden</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant) => (
            <motion.div
              key={plant.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{plant.name}</h3>
                {plant.readyToHarvest && (
                  <button
                    onClick={() => harvestPlant(plant.id)}
                    className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full"
                  >
                    <Coins className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-700">Harvest!</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Growth Progress</span>
                    <span>{plant.growth}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${plant.growth}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Water Level</span>
                    <span>{plant.waterLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${plant.waterLevel}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Nutrient Level</span>
                    <span>{plant.nutrientLevel}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-yellow-600 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${plant.nutrientLevel}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => waterPlant(plant.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-100 py-2 rounded-lg hover:bg-blue-200"
                  >
                    <Droplet className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-700">Water</span>
                  </button>
                  <button
                    onClick={() => addNutrients(plant.id)}
                    className="flex-1 flex items-center justify-center gap-2 bg-yellow-100 py-2 rounded-lg hover:bg-yellow-200"
                  >
                    <Sun className="w-5 h-5 text-yellow-600" />
                    <span className="text-yellow-700">Feed</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};