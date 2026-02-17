import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 relative">
       {/* Glow effect */}
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-neon-blue font-bold tracking-widest uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Journey</h3>
            <p className="text-gray-400 mb-12">
              Ready to transform? Fill out the form or visit us at our premium location. Your first session is on us.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-neon-green">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Location</h4>
                  <p className="text-gray-400">123 Fitness Blvd, Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-neon-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-neon-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-gray-400">join@neonphysique.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-white/5 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.12643506466!2d-118.41164807469796!3d34.07361872118432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147cf%3A0x2948c3f4e38cdae6!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1709848372654!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Gym Location"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-3xl border border-white/10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="plan" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Interested Plan</label>
                  <select 
                    id="plan" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all appearance-none"
                  >
                    <option>Standard Plan</option>
                    <option>Pro Athlete Plan</option>
                    <option>Elite Plan</option>
                    <option>Free Trial</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue transition-all"
                    placeholder="Tell us about your fitness goals..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-neon-blue text-black font-extrabold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all transform hover:translate-y-[-2px] flex items-center justify-center gap-2"
                >
                  SEND MESSAGE <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};