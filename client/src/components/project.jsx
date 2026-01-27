import React from 'react';
import {
    Map,
    GraduationCap,
    ShoppingCart,
    DollarSign,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Campus Safety Hub",
        subheading: "campus safety management",
        description: "Campus Safety Hub is a full-stack MERN-style application focused on real-world campus safety management, built with React, Node.js, Express, and MongoDB.",
        icon: <Map size={48} className="text-indigo-500" />,
        color: "indigo"
    },
    {
        id: 2,
        title: "SCHOOL MANAGEMENT SYSTEM",
        subheading: "Java Swing & MySQL Application",
        description: "A desktop-based school management system developed using Java Swing and JDBC. It enables structured collection of student personal and academic data through a multi-panel interface and securely stores records in a MySQL database.",
        icon: <GraduationCap size={48} className="text-purple-500" />,
        color: "purple"


    },
    {
        id: 3,
        title: "E-Ecommerce",
        subheading: "Frontend Shopping & Cart System",
        description: "A responsive e-commerce web application built using HTML, CSS, and JavaScript. The project features product filtering, dynamic shopping cart management, checkout flow, and a simulated payment system with multiple payment options and success confirmation.",
        icon: <ShoppingCart size={48} className="text-green-500" />,
        color: "green"
    },

    {

        id: 4,
        title: "Currency Converter",
        subheading: "Python-Based Financial Utility",
        description: "A Python-based currency converter application that allows users to convert amounts between different international currencies using real-time exchange rates. The project demonstrates core Python concepts, API integration, and accurate financial calculations.",
        icon: <DollarSign size={48} className="text-blue-500" />,
        color: "blue"


    }
];

const Project = () => {
    return (
        <section className="py-24 bg-[#0a0a12] text-white overflow-hidden relative" id="projects">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tighter"
                    >
                        MY <span className="text-indigo-500">PROJECTS</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#11121d] border border-white/5 rounded-3xl p-8 md:p-10 hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)]"
                        >
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                                <div className="flex-1 text-center lg:text-left">
                                    <span className="inline-block text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3 px-3 py-1 bg-indigo-500/10 rounded-full">
                                        {project.subheading}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center justify-center lg:justify-start gap-2 text-indigo-400 font-semibold group/link cursor-pointer hover:text-indigo-300 transition-colors">
                                        <span>View Details</span>
                                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </div>
                                </div>

                                <div className="shrink-0">
                                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                                        {project.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Decorative accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;