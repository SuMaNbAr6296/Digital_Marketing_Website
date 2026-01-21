import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Starter',
        price: { monthly: 999, yearly: 9990 },
        description: 'Perfect for small businesses starting their digital journey.',
        features: ['5 Page Website', 'Basic SEO Setup', 'Social Media Integration', 'Content Management System', '1 Month Support']
    },
    {
        name: 'Growth',
        price: { monthly: 1999, yearly: 19990 },
        description: 'Ideal for growing brands that need more power and flexibility.',
        popular: true,
        features: ['10 Page Website', 'Advanced SEO & Analytics', 'Social Media Strategy', 'E-commerce Integration', 'Priority Support', 'Blog Setup']
    },
    {
        name: 'Enterprise',
        price: { monthly: 3999, yearly: 39990 },
        description: 'Full-scale digital transformation for large organizations.',
        features: ['Unlimited Pages', 'Custom Web Applications', 'Full Marketing Suite', '24/7 Dedicated Support', 'Quarterly Strategy Reviews', 'Custom Integrations']
    }
];

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-24 bg-zinc-950" id="pricing">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        Simple, Transparent <span className="text-gradient">Pricing</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Choose the perfect plan for your business needs. No hidden fees.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-14 h-8 rounded-full bg-white/10 p-1 relative transition-colors hover:bg-white/20"
                        >
                            <motion.div
                                animate={{ x: isYearly ? 24 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                className="w-6 h-6 rounded-full bg-violet-500 shadow-lg"
                            />
                        </button>
                        <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-500'}`}>
                            Yearly <span className="text-xs text-green-400 font-bold ml-1">SAVE 20%</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${plan.popular
                                    ? 'bg-white/5 border-violet-500/50 shadow-2xl shadow-violet-500/10'
                                    : 'bg-zinc-900/50 border-white/5 hover:border-white/10'
                                } backdrop-blur-sm flex flex-col`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-sm text-gray-400 mb-6 h-10">{plan.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold font-display">
                                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                                    </span>
                                    <span className="text-gray-500">/{isYearly ? 'year' : 'month'}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="p-0.5 rounded-full bg-green-400/20 text-green-400">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular
                                    ? 'bg-white text-black hover:scale-105 active:scale-95'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                                }`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
