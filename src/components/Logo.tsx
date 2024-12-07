import { Leaf, Grid } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Grid className="w-8 h-8 text-green-600" />
        <Leaf className="w-4 h-4 text-green-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="text-2xl font-bold text-green-600">LeafGrid</span>
    </div>
  );
};