import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { PlantList } from './components/PlantList';
import { PlantMatch } from './components/PlantMatch';
import { GrowthTracker } from './components/GrowthTracker';
import { PlantQuiz } from './components/PlantQuiz';
import { WaitlistForm } from './components/WaitlistForm';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <PlantList />
        <PlantMatch />
        <GrowthTracker />
        <PlantQuiz />
        <WaitlistForm />
        <FAQ />
      </main>
    </div>
  );
}

export default App;