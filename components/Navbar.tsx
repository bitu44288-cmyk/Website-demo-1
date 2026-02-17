import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  scrolled: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Plans', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Dumbbell className="w-8 h-8 text-neon-blue group-hover:rotate-45 transition-transform duration-500" />
          <span className="text-2xl font-bold tracking-tighter text-white">
            NEON<span className="text-neon-blue">PHYSIQUE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-neon-blue transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-neon-blue after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#membership"
            className="px-6 py-2 bg-transparent border border-neon-blue text-neon-blue font-bold rounded-full hover:bg-neon-blue hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]"
          >
            JOIN NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-transform duration-300 flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0px' }}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-white hover:text-neon-blue tracking-widest uppercase"
          >
            {item.label}
          </a>
        ))}
        <a
            href="#membership"
            onClick={() => setIsOpen(false)}
            className="px-8 py-3 mt-4 bg-neon-blue text-black font-bold rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)]"
          >
            JOIN NOW
          </a>
      </div>
    </nav>
  );
};