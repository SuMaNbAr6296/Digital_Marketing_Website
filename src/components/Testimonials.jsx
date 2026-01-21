import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechFlow',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
        quote: "NovaDigital transformed our online presence. Their team's attention to detail and creative approach helped us double our leads in just three months."
    },
    {
        name: 'Michael Chen',
        role: 'Marketing Director, GreenLeaf',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
        quote: "Working with them was a game-changer. The website they built is not only beautiful but also incredibly fast and user-friendly."
    },
    {
        name: 'Emily Davis',
        role: 'Founder, ArtSpace',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150',
        quote: "Professional, innovative, and reliable. They understood our brand vision perfectly and delivered beyond our expectations."
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 relative overflow-hidden" id="testimonials">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-16">
                    What Our <span className="text-gradient">Clients Say</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm"
                        >
                            <div className="flex gap-1 mb-6 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/30"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
