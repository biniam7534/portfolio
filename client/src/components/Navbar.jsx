
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsSun } from 'react-icons/bs';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <nav className="flex items-center justify-between px-8 py-3 bg-[#11121d]/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">

                {/* Logo */}
                <div className="flex items-center cursor-pointer group">
                    <span className="text-xl font-bold text-white tracking-tight">
                        Portfolio<span className="text-indigo-500">.</span>
                    </span>
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
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                        Hire Me
                    </button>
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
                    <button className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold mt-2">
                        Hire Me
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navbar;
