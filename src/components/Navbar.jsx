/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    // { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="shrink-0 flex items-center gap-2 cursor-pointer no-underline">
            <div className="p-2 bg-linear-to-br from-cyan-400 to-blue-600 rounded-xl">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-display tracking-tight hover:text-white/90 transition-colors">
              Sumo<span className="text-cyan-400">Digital</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-display-link text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-white/10 absolute top-20 left-0 w-full p-6 flex flex-col gap-4 animate-fade-in shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full mt-2 px-5 py-3 rounded-lg bg-linear-to-r from-violet-600 to-pink-600 text-white font-semibold text-center">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
