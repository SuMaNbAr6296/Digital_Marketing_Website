import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import BackgroundBubbles from './components/BackgroundBubbles';


function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-violet-500 selection:text-white cursor-none font-body">
      <BackgroundBubbles />
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white max-md:hidden mix-blend-difference rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-violet-500 max-md:hidden rounded-full pointer-events-none z-[9999]"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "spring", stiffness: 1500, damping: 50 }}
      />

      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
