import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does the spiral hydroponic system work?',
    answer: 'Our spiral system uses vertical space efficiently by growing plants in a helical pattern. Nutrient-rich water flows from top to bottom, ensuring each plant receives optimal nutrition and hydration.',
  },
  {
    question: 'What plants can I grow?',
    answer: 'You can grow a variety of plants including leafy greens, herbs, strawberries, and small vegetables. The system is particularly effective for lettuce, basil, spinach, and similar plants.',
  },
  {
    question: 'How often do I need to refill nutrients?',
    answer: "Typically, you will need to refill the nutrient solution every 2-3 weeks, depending on your plants and growing conditions. Our app will notify you when it's time for a refill.",
  },
  {
    question: 'How much space does the system require?',
    answer: 'Our spiral system is designed for compact spaces. The standard unit occupies only 2 square feet of floor space while providing growing area equivalent to 12 square feet.',
  },
  {
    question: 'Is it suitable for beginners?',
    answer: 'Absolutely! Our system comes with smart monitoring and an intuitive app that guides you through the entire growing process. Perfect for both beginners and experienced gardeners.',
  },
  {
    question: 'What maintenance is required?',
    answer: 'Maintenance is minimal. Regular tasks include checking water levels, refilling nutrients every 2-3 weeks, and occasional cleaning. The app provides maintenance reminders and guidance.',
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};