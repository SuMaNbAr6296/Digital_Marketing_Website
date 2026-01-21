import React from 'react';
import { BarChart, Globe, Palette, Megaphone, Search, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Globe className="w-8 h-8 text-violet-400" />,
        title: 'Web Development',
        description: 'Custom, high-performance websites built with modern technologies like React and Next.js.'
    },
    {
        icon: <Palette className="w-8 h-8 text-pink-400" />,
        title: 'UI/UX Design',
        description: 'Intuitive and visually stunning interfaces that provide seamless user experiences.'
    },
    {
        icon: <Search className="w-8 h-8 text-blue-400" />,
        title: 'SEO Optimization',
        description: 'Boost your visibility on search engines and drive organic traffic to your site.'
    },
    {
        icon: <Megaphone className="w-8 h-8 text-orange-400" />,
        title: 'Digital Marketing',
        description: 'Strategic campaigns including PPC, email marketing, and social media management.'
    },
    {
        icon: <Smartphone className="w-8 h-8 text-teal-400" />,
        title: 'App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
        icon: <BarChart className="w-8 h-8 text-green-400" />,
        title: 'Data Analytics',
        description: 'In-depth insights and reporting to track performance and optimize ROI.'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section className="py-24 bg-black" id="services">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold font-display mb-6"
                    >
                        Our <span className="text-gradient">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg"
                    >
                        We offer a comprehensive suite of digital services to help your business thrive in the modern world.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            variants={item}
                            key={index}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="mb-6 p-4 rounded-xl bg-black/50 w-fit border border-white/10 group-hover:border-white/20 transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
