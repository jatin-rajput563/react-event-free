import React, { useEffect, useState } from 'react';
import ArrowUp from '../assets/images/png/up-arrow.png'

const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-3 rounded-full border-black shadow-lg transition-opacity duration-300 text-white z-10 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Back to Top"
        >
            <img src={ArrowUp} alt="" />
        </button>
    );
}

export default Backtotop
