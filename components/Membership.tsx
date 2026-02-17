import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    name: 'Standard',
    price: '$49',
    features: ['Gym Access', 'Locker Room Access', '1 Free Training Session', 'Free WiFi', 'Standard App Access'],
  },
  {
    name: 'Pro Athlete',
    price: '$89',
    popular: true,
    features: ['24/7 Gym Access', 'All Group Classes', '5 Personal Training Sessions', 'Sauna & Spa Access', 'Nutrition Plan', 'Priority Support'],
  },
  {
    name: 'Elite',
    price: '$149',
    features: ['All Pro Features', 'Unlimited Personal Training', 'Private Locker', 'Massage Therapy (2x/mo)', 'Guest Pass (Unlimited)', 'Exclusive Merch'],
  },
];

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-24 relative">
       {/* Background gradient blob */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-2">Membership Plans</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Invest In Yourself</h3>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose the plan that fits your goals. No hidden fees, flexible cancellation, and pure results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 group
                ${plan.popular 
                  ? 'bg-white/10 border-neon-blue/50 shadow-[0_0_40px_rgba(0,243,255,0.15)] scale-100 md:scale-110 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-300'}`}>{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className={`mt-0.5 rounded-full p-0.5 ${plan.popular ? 'bg-neon-blue text-black' : 'bg-gray-700 text-white'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300
                  ${plan.popular 
                    ? 'bg-neon-blue text-black hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};