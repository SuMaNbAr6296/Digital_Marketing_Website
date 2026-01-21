import React, { useEffect, useState } from 'react';

const BackgroundBubbles = () => {
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        // specific bubble configurations for organic look
        const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${15 + Math.random() * 20}s`, // 15-35s
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.1 + Math.random() * 0.2, // 0.1 - 0.3
            size: `${20 + Math.random() * 60}px`, // 20px - 80px
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="bubble absolute rounded-full bg-white blur-md"
                    style={{
                        left: bubble.left,
                        width: bubble.size,
                        height: bubble.size,
                        opacity: bubble.opacity,
                        animation: `floatUp ${bubble.animationDuration} linear infinite`,
                        animationDelay: bubble.animationDelay,
                        bottom: '-100px', // Start below screen
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundBubbles;
