import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Users, Zap } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    icon: Trophy,
    title: 'World Class Equipment',
    description: 'Train with the latest Technogym and Hammer Strength machines maintained daily.'
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Our certified coaches design personalized programs to maximize your results.'
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train on your schedule. We never close, so you never have to miss a workout.'
  },
  {
    icon: Zap,
    title: 'High Energy Classes',
    description: 'From HIIT to Yoga, join our group sessions to stay motivated and engaged.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-neon-green font-bold tracking-widest uppercase mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Redefining the Standard <br/> of <span className="text-gray-500">Modern Fitness</span>
            </h3>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed">
            We are not just a gym; we are a sanctuary for those who refuse to settle for average. Join a community of achievers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 border border-white/5 hover:border-neon-blue/30"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-white group-hover:text-neon-blue transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};