import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-zinc-950" id="contact">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                            Let's Create Something <span className="text-gradient">Amazing</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Ready to take your digital presence to the next level? Get in touch with us today for a free consultation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Email Us</h4>
                                    <p className="text-gray-400">hello@novadigital.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Call Us</h4>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Visit Us</h4>
                                    <p className="text-gray-400">123 Innovation Dr, Tech City, TC 90210</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button type="button" className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg font-bold text-white shadow-lg hover:shadow-violet-500/25 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
