import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HelpCircle } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: 'How much time can you dedicate to plant care daily?',
    options: [
      { text: '5-10 minutes', score: { beginner: 3, intermediate: 1, advanced: 0 } },
      { text: '15-30 minutes', score: { beginner: 1, intermediate: 3, advanced: 1 } },
      { text: '30+ minutes', score: { beginner: 0, intermediate: 1, advanced: 3 } },
    ],
  },
  {
    id: 2,
    question: 'What is your primary goal for growing plants?',
    options: [
      { text: 'Fresh herbs for cooking', score: { herbs: 3, vegetables: 1, greens: 2 } },
      { text: 'Nutritious vegetables', score: { herbs: 1, vegetables: 3, greens: 2 } },
      { text: 'Leafy greens for salads', score: { herbs: 1, vegetables: 2, greens: 3 } },
    ],
  },
  {
    id: 3,
    question: 'How much space do you have available?',
    options: [
      { text: 'Small corner (2-3 sq ft)', score: { compact: 3, medium: 1, large: 0 } },
      { text: 'Medium area (4-6 sq ft)', score: { compact: 1, medium: 3, large: 1 } },
      { text: 'Large space (6+ sq ft)', score: { compact: 0, medium: 1, large: 3 } },
    ],
  },
];

const recommendations = {
  beginner: {
    plants: ['Lettuce', 'Basil', 'Spinach'],
    tips: ['Start with one type of plant', 'Follow the app notifications', 'Join our community'],
  },
  intermediate: {
    plants: ['Cherry Tomatoes', 'Kale', 'Mint'],
    tips: ['Experiment with nutrient mixes', 'Try companion planting', 'Track growth patterns'],
  },
  advanced: {
    plants: ['Bell Peppers', 'Strawberries', 'Cucumbers'],
    tips: ['Optimize growing conditions', 'Create custom nutrient solutions', 'Share your expertise'],
  },
};

export const PlantQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateRecommendations = () => {
    // Simple recommendation based on most common skill level
    const skillLevels = answers.reduce(
      (acc, curr) => {
        if (curr === 0) acc.beginner++;
        else if (curr === 1) acc.intermediate++;
        else acc.advanced++;
        return acc;
      },
      { beginner: 0, intermediate: 0, advanced: 0 }
    );

    const level = Object.entries(skillLevels).reduce((a, b) =>
      b[1] > a[1] ? b : a
    )[0] as keyof typeof recommendations;

    return recommendations[level];
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Find Your Perfect Plants</h2>
        
        {!showResults ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <HelpCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold">
                {questions[currentQuestion].question}
              </h3>
            </div>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  {option.text}
                </button>
              ))}
            </div>
            <div className="mt-6 text-center text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold">Your Recommendations</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Recommended Plants:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {calculateRecommendations().plants.map((plant, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-lg p-4 text-center"
                    >
                      {plant}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Growing Tips:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {calculateRecommendations().tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResults(false);
                }}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 mt-4"
              >
                Take Quiz Again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};