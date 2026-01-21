import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';


const brands = [
    { name: 'Google', color: '#4285F4' },
    { name: 'Spotify', color: '#1DB954' },
    { name: 'Shopify', color: '#95BF47' },
    { name: 'Slack', color: '#4A154B' }, // Or #E01E5A
    { name: 'Netflix', color: '#E50914' },
    { name: 'Adobe', color: '#FF0000' },
    { name: 'Microsoft', color: '#00A4EF' },
    { name: 'Amazon', color: '#FF9900' }
];

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-72 h-72 bg-violet-600/30 rounded-full blur-[100px] mix-blend-screen animate-rgb-cycle"
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-40 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen animate-rgb-cycle"
                />
                {/* Extra RGB Blob for more color */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen animate-rgb-cycle"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-medium text-gray-300">Accepting new projects for 2026</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-11 mb-6"
                >
                    Elevate Your Brand in the <br className="hidden md:block" />
                    <span className="text-rgb">Digital Universe</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
                >
                    We craft stunning websites, effective marketing campaigns, and digital experiences that drive growth and engagement.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="group relative px-8 py-4 bg-white text-black text-lg font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-linear-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-gray-300 hover:text-white group">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                        <span className="font-semibold">View Showreel</span>
                    </button>
                </motion.div>

                {/* Infinite Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 pt-10 border-t border-white/5 relative overflow-hidden mask-gradient"
                >
                    <div className="flex gap-16 items-center animate-scroll whitespace-nowrap">
                        {[...brands, ...brands, ...brands].map((brand, i) => (
                            <span
                                key={i}
                                className="text-2xl font-bold text-gray-600 transition-colors cursor-default select-none hover:opacity-100"
                                style={{ '--hover-color': brand.color }}
                            >
                                <span className="hover:text-(--hover-color) transition-colors duration-300">
                                    {brand.name}
                                </span>
                            </span>
                        ))}
                    </div>
                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black to-transparent z-10" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
