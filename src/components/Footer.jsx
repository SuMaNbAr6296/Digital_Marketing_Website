import React from 'react';
import { Rocket, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-1.5 bg-linear-to-br from-violet-600 to-pink-500 rounded-lg">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-lg font-bold font-display">
                                Sumo<span className="text-violet-400">Digital</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering brands to reach new heights through innovative digital solutions and strategic marketing.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4">
                            {['Web Development', 'UI/UX Design', 'SEO Optimization', 'Digital Marketing'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-violet-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Work', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-400 hover:text-violet-400 transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-violet-500"
                            />
                            <button className="px-4 py-2 bg-violet-600 rounded-lg text-white text-sm font-semibold hover:bg-violet-700 transition-colors">
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">© 2026 Created By <a href="https://www.linkedin.com/in/suman-bar-6296sb721232/" target="_blank" className="underline">SumanBar</a>. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
