import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Plant {
  id: number;
  name: string;
  growth: number;
  waterLevel: number;
  nutrientLevel: number;
  readyToHarvest: boolean;
}

interface GameState {
  coins: number;
  plants: Plant[];
  addCoins: (amount: number) => void;
  addPlant: (plant: Omit<Plant, 'growth' | 'waterLevel' | 'nutrientLevel' | 'readyToHarvest'>) => void;
  waterPlant: (id: number) => void;
  addNutrients: (id: number) => void;
  harvestPlant: (id: number) => void;
  updateGrowth: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      coins: 0,
      plants: [],
      addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
      addPlant: (plant) =>
        set((state) => ({
          plants: [
            ...state.plants,
            {
              ...plant,
              growth: 0,
              waterLevel: 100,
              nutrientLevel: 100,
              readyToHarvest: false,
            },
          ],
        })),
      waterPlant: (id) =>
        set((state) => ({
          plants: state.plants.map((plant) =>
            plant.id === id
              ? { ...plant, waterLevel: Math.min(plant.waterLevel + 30, 100) }
              : plant
          ),
        })),
      addNutrients: (id) =>
        set((state) => ({
          plants: state.plants.map((plant) =>
            plant.id === id
              ? { ...plant, nutrientLevel: Math.min(plant.nutrientLevel + 30, 100) }
              : plant
          ),
        })),
      harvestPlant: (id) =>
        set((state) => ({
          plants: state.plants.filter((plant) => plant.id !== id),
          coins: state.coins + 50,
        })),
      updateGrowth: () =>
        set((state) => ({
          plants: state.plants.map((plant) => {
            if (plant.readyToHarvest) return plant;
            const growthIncrease =
              plant.waterLevel > 30 && plant.nutrientLevel > 30 ? 5 : 0;
            const newGrowth = Math.min(plant.growth + growthIncrease, 100);
            return {
              ...plant,
              growth: newGrowth,
              waterLevel: Math.max(plant.waterLevel - 2, 0),
              nutrientLevel: Math.max(plant.nutrientLevel - 2, 0),
              readyToHarvest: newGrowth === 100,
            };
          }),
        })),
    }),
    {
      name: 'leafgrid-game',
    }
  )
);