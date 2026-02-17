import React from 'react';
import { Dumbbell, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-6 h-6 text-neon-blue" />
              <span className="text-xl font-bold tracking-tighter text-white">
                NEON<span className="text-neon-blue">PHYSIQUE</span>
              </span>
            </div>
            <p className="text-gray-500 mb-6">
              Elevating fitness through luxury, technology, and community. Join the movement today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-neon-blue/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#about" className="hover:text-neon-green transition-colors">About Us</a></li>
              <li><a href="#membership" className="hover:text-neon-green transition-colors">Memberships</a></li>
              <li><a href="#trainers" className="hover:text-neon-green transition-colors">Trainers</a></li>
              <li><a href="#gallery" className="hover:text-neon-green transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-neon-green transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-500 mb-4">Subscribe to get exclusive offers and fitness tips.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white outline-none focus:border-neon-blue w-full"
              />
              <button className="bg-neon-blue text-black font-bold px-4 py-2 rounded-r-lg hover:bg-neon-green transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} NeonPhysique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};