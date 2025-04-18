'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ButtonGradient } from '@/components/ui/button-gradient';
import { Menu, X, Activity } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Demo', href: '#demo' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 10);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 ${
        hasScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4 md:py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-primary flex items-center font-heading font-bold text-xl">
            <Activity className="mr-2 h-6 w-6" />
            HealthSync<span className="text-accent">AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">Sign In</Button>
            <ButtonGradient>Get Started</ButtonGradient>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white px-4 py-5 shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="outline" className="w-full">Sign In</Button>
              <ButtonGradient className="w-full">Get Started</ButtonGradient>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}