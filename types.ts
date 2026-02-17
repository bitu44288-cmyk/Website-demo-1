import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Plan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Trainer {
  name: string;
  role: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
  }
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}