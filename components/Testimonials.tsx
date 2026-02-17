import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    name: 'Michael Davis',
    role: 'Pro Member',
    content: "The best gym I've ever been to. The atmosphere is electric and the equipment is top-tier. I've seen massive gains in just 3 months.",
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: 5
  },
  {
    name: 'Jessica Brown',
    role: 'Yoga Enthusiast',
    content: "The classes are incredible. The instructors really care about your form and progress. It feels like a second home.",
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5
  },
  {
    name: 'David Wilson',
    role: 'Elite Member',
    content: "Worth every penny. The spa facilities after a hard workout are a game changer. Highly recommend the personal training.",
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-bg to-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-4xl font-bold text-white mb-16">What Our Members Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-2xl relative border border-white/5"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-neon-green fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/10" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};