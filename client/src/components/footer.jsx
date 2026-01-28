import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-[#11121d] text-white py-12 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left Side: Logo & Tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center space-x-2 mb-2">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide">
                            Full Stack Developer
                        </p>
                    </div>

                    {/* Center: Social Media Icons */}
                    <div className="flex items-center space-x-5">
                        <a
                            href="https://github.com/biniam7534"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-[#1a1b26] p-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                                <FaGithub size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/biniam-abu-a7a4b5395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-[#1a1b26] p-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                                <FaLinkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-[#1a1b26] p-3 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                                <FaTwitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                        </a>
                    </div>

                    {/* Right Side: Copyright Information */}
                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Copyright &copy; 2026 <span className="text-white font-semibold">Biniam Abu</span>.
                            <br className="hidden md:block" />
                            All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
