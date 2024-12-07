import { useState } from 'react';
import { Send } from 'lucide-react';

export const WaitlistForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist submission
    console.log('Submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Waitlist</h2>
        <p className="text-xl mb-8 text-green-100">
          Be the first to experience the future of indoor gardening.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              Join
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};