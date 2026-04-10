
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';
import Logo from '../assets/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <nav className="flex items-center justify-between px-8 py-3 bg-secondary/80 backdrop-blur-md rounded-full border border-accent/20 shadow-2xl">

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
                    <a href="#" className="text-gray-400 hover:text-accent text-sm font-medium transition-colors">Home</a>
                    <a href="#about" className="text-gray-400 hover:text-accent text-sm font-medium transition-colors">About</a>
                    <a href="#skills" className="text-gray-400 hover:text-accent text-sm font-medium transition-colors">Skills</a>
                    <a href="#projects" className="text-gray-400 hover:text-accent text-sm font-medium transition-colors">Projects</a>
                    <a href="#contact" className="text-gray-400 hover:text-accent text-sm font-medium transition-colors">Contact</a>
                </div>

                {/* Right Side Actions */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 cursor-pointer transition-colors text-accent"
                    >
                        {theme === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden text-accent cursor-pointer p-2 hover:bg-accent/10 rounded-full transition-colors font-bold">
                    {menuOpen ? (
                        <AiOutlineClose size={24} onClick={() => setMenuOpen(false)} />
                    ) : (
                        <AiOutlineMenu size={24} onClick={() => setMenuOpen(true)} />
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full mt-4 left-0 w-full bg-secondary border border-accent/20 rounded-2xl flex flex-col p-6 space-y-4 lg:hidden shadow-2xl">
                    <a href="#" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-accent transition-colors">Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-accent transition-colors">About</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-accent transition-colors">Skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-accent transition-colors">Projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="text-accent transition-colors">Contact</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
