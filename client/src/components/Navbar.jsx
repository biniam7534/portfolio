
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-10 py-8 bg-transparent relative">

            {/* Logo */}
            <div className="flex items-center cursor-pointer">
                <img
                    src="/image.png"
                    alt="Logo"
                    className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
                <a href="#skills" className="text-gray-300 hover:text-white text-sm font-medium">
                    Skills
                </a>
                <a href="#projects" className="text-gray-300 hover:text-white text-sm font-medium">
                    My Projects
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white text-sm font-medium">
                    Contact Me
                </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden text-white">
                {menuOpen ? (
                    <AiOutlineClose size={24} onClick={() => setMenuOpen(false)} />
                ) : (
                    <AiOutlineMenu size={24} onClick={() => setMenuOpen(true)} />
                )}
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black flex flex-col items-left space-y-6 py-6 lg:hidden">
                    <a href="#skills" onClick={() => setMenuOpen(false)} className="text-white">
                        Skills
                    </a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white">
                        My Projects
                    </a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white">
                        Contact Me
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
