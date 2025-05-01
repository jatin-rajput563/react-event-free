import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/svg/logo.svg'
import CommonButton from './CustomButton';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav className='mb-10 md:mb-[80px] lg:mb-[143px]'>
            <div className="max-w-[1320px] px-4 mx-auto">
                <div className="flex justify-between items-center py-[17px]">
                    <div className="flex items-center gap-3.5">
                        <a href="#"><img src={logo} alt="nav-logo" className='max-w-[50px] sm:max-w-[98px]' /></a>
                        <a className='poppins font-bold text-2xl sm:text-4xl leading-[135%] text-[#2C49FE] mb-0' href='#'>Events<span className='text-[#01C8FF]'>Free</span></a>
                    </div>
                    <div onClick={toggleNavbar} className="z-50 lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-white transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
                    </div>
                    <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-[60px] mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                        <li><a className='poppins font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">HOME</a></li>
                        <li><a className='poppins font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">EVENTS</a></li>
                        <li><a className='poppins font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">FEED</a></li>
                        <li><a className='poppins font-normal text-base leading-[100%] text-white hover:font-semibold' href="#">FESTIVALS PROFILE</a></li>
                        <li><CommonButton btnText="Log Out" /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;