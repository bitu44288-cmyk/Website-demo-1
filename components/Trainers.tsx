import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';
import { Trainer } from '../types';

const trainers: Trainer[] = [
  {
    name: 'Alex Rivera',
    role: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop',
    socials: { instagram: '#' }
  },
  {
    name: 'Sarah Chen',
    role: 'HIIT & Yoga Specialist',
    image: 'https://images.unsplash.com/photo-1609899537878-39d4a797bc21?q=80&w=1887&auto=format&fit=crop',
    socials: { instagram: '#', twitter: '#' }
  },
  {
    name: 'Marcus Johnson',
    role: 'Bodybuilding Coach',
    image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop',
    socials: { instagram: '#' }
  },
  {
    name: 'Elena Rodriguez',
    role: 'CrossFit Expert',
    image: 'https://images.unsplash.com/photo-1611672585731-fa1060a80910?q=80&w=1887&auto=format&fit=crop',
    socials: { instagram: '#', twitter: '#' }
  }
];

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
            <h2 className="text-neon-purple font-bold tracking-widest uppercase mb-2">Our Experts</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Meet The Team</h3>
           </div>
           <button className="hidden md:block text-neon-purple border-b border-neon-purple pb-1 hover:text-white hover:border-white transition-colors">
             View All Trainers
           </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold text-white mb-1">{trainer.name}</h4>
                <p className="text-neon-blue font-medium text-sm mb-4">{trainer.role}</p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href={trainer.socials.instagram} className="p-2 bg-white/10 rounded-full hover:bg-neon-purple hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  {trainer.socials.twitter && (
                    <a href={trainer.socials.twitter} className="p-2 bg-white/10 rounded-full hover:bg-neon-blue hover:text-black transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};