
import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-10 py-8 bg-transparent ">
            {/* Logo Section - Image logo */}
            <div className="flex items-center cursor-pointer">
                <img
                    src="/image.png"
                    alt="Logo"
                    className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Skills</a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">My Projects</a>
                <a href="#contact me" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact Me</a>
            </div>
        </nav>
    );
}

export default Navbar;
