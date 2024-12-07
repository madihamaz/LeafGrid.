import { Menu, Coins } from 'lucide-react';
import { Logo } from './Logo';
import { useGameStore } from '../stores/gameStore';

export const Navbar = () => {
  const coins = useGameStore((state) => state.coins);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-green-600">Products</a>
            <a href="#plants" className="text-gray-700 hover:text-green-600">Plants</a>
            <a href="#match" className="text-gray-700 hover:text-green-600">Plant Match</a>
            <a href="#game" className="text-gray-700 hover:text-green-600">Growth Tracker</a>
            <div className="flex items-center gap-2 bg-yellow-100 px-3 py-1 rounded-full">
              <Coins className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-yellow-700">{coins}</span>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Join Waitlist
            </button>
          </div>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};