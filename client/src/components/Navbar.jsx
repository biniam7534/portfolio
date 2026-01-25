import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About Me', href: '#about' },
        { label: 'View MyProjects', href: '#projects' },
        { label: 'Contact Me', href: '#contact' }
    ];

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#2a2a2a]/95 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-8 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center"
                    >
                        <a href="#" className="text-xl font-bold text-white hover:text-orange-500 transition-colors">
                            Portfolio
                        </a>
                    </motion.div>

                    {/* Navigation Links */}

                    <ul className="flex gap-8 text-sm font-medium text-white">

                        {navItems.map((item, i) => (
                            <motion.li
                                key={item.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="hover:text-orange-500 cursor-pointer transition-colors duration-300"
                            >
                                <a href={item.href}>
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <a
                            href="#contact"
                            className="px-5 py-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 rounded-full font-medium text-sm text-white transition-all shadow-lg shadow-orange-500/25"
                        >
                            Let's Talk
                        </a>
                    </motion.div>

                    {/* Mobile Menu Button (Optional) */}
                    <div className="md:hidden">
                        <button className="text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
