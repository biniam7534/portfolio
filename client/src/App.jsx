import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout } from 'lucide-react';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="min-h-screen bg-primary font-sans text-white selection:bg-cyan-500/30">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]"></div>

                <div className="max-w-4xl mx-auto px-6 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block p-2 px-4 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <span className="text-cyan-400">👋 Welcome to my world</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
                    >
                        Crafting Digital <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            Experiences
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
                    >
                        I'm a Full Stack Developer passionate about building accessible, pixel-perfect, and performant web applications.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/25">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About / Skills Section */}
            <section id="about" className="py-20 bg-secondary/30 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">Tech Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Layout size={24} />
                                </div>
                                <h3 className="text-xl font-semibold">Frontend</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Tailwind CSS", "Framer Motion", "TypeScript", "Vite"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                    <Database size={24} />
                                </div>
                                <h3 className="text-xl font-semibold">Backend</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Node.js", "Express.js", "MongoDB", "REST APIs", "Git"].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((project) => (
                            <motion.div
                                key={project}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className="group rounded-2xl bg-secondary overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl"
                            >
                                <div className="h-48 bg-gray-800 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-80 z-10"></div>
                                    <Code2 className="text-gray-700 w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6 relative z-20 bg-secondary">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Project {project}</h3>
                                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                        A modern web application built with the MERN stack. Features authentication, real-time updates, and a responsive design.
                                    </p>
                                    <div className="flex gap-4">
                                        <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors">
                                            <Github size={16} /> Code
                                        </a>
                                        <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors">
                                            <ExternalLink size={16} /> Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-secondary/30">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                    <a
                        href="mailto:hello@example.com"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/25"
                    >
                        <Mail size={18} /> Say Hello
                    </a>

                    <div className="mt-12 flex justify-center gap-6">
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-all">
                            <Github size={20} />
                        </a>
                        <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-cyan-400 transition-all">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-primary">
                <p>© 2026 Portfolio. Built with React, Tailwind & Express.</p>
            </footer>
        </div>
    );
};

export default App;
