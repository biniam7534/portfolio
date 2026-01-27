
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsSun } from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <nav className="flex items-center justify-between px-8 py-3 bg-[#11121d]/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">

                {/* Logo */}
                <div className="flex items-center cursor-pointer group">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Home</a>
                    <a href="#about" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">About</a>
                    <a href="#skills" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Skills</a>
                    <a href="#projects" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Projects</a>
                    <a href="#contact" className="text-indigo-500 hover:text-indigo-400 text-sm font-medium transition-colors">Contact</a>
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 cursor-pointer transition-colors text-white">
                        <BsSun size={18} />
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden text-white cursor-pointer p-2 hover:bg-white/5 rounded-full transition-colors">
                    {menuOpen ? (
                        <AiOutlineClose size={24} onClick={() => setMenuOpen(false)} />
                    ) : (
                        <AiOutlineMenu size={24} onClick={() => setMenuOpen(true)} />
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full mt-4 left-0 w-full bg-[#11121d] border border-white/10 rounded-2xl flex flex-col p-6 space-y-4 lg:hidden shadow-2xl">
                    <a href="#" onClick={() => setMenuOpen(false)} className="text-white hover:text-indigo-500 transition-colors">Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="text-white hover:text-indigo-500 transition-colors">About</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)} className="text-white hover:text-indigo-500 transition-colors">Skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white hover:text-indigo-500 transition-colors">Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="text-indigo-500 transition-colors">Contact</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
