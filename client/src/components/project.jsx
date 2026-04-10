import React from 'react';
import {
    Map,
    GraduationCap,
    ShoppingCart,
    DollarSign,
    Github,
    ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import ECommerceImg from '../assets/E_commerce.png';
import StudentMgmtImg from '../assets/student_manegment.png';
import CampusSafetyImg from '../assets/campus-safety.png';
import CurrencyConverterImg from '../assets/currencyconverter.png';





const projects = [
    {
        id: 1,
        title: "Campus Safety Hub",
        subheading: "campus safety management",
        description: "A full-stack MERN-style application focused on real-world campus safety management, built with React, Node.js, Express, and MongoDB.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        image: CampusSafetyImg,
        github: "https://github.com/biniam7534/campus-safety-hub",
        demo: "#",
        color: "indigo"
    },
    {
        id: 2,
        title: "School Management",
        subheading: "Java Swing & MySQL Application",
        description: "A desktop-based school management system featuring structured student data collection and secure MySQL storage.",
        tags: ["Java", "Swing", "MySQL", "JDBC"],
        image: StudentMgmtImg,
        github: "https://github.com/biniam7534/new_project",
        demo: "#",
        color: "purple"
    },
    {
        id: 3,
        title: "E-Ecommerce",
        subheading: "Frontend Shopping System",
        description: "Responsive e-commerce application with product filtering, dynamic cart management, and simulated payment flow.",
        tags: ["HTML", "CSS", "JavaScript"],
        image: ECommerceImg,
        github: "https://github.com/biniam7534/Estore",
        demo: "#",
        color: "green"
    },
    {
        id: 4,
        title: "Currency Converter",
        subheading: "Python Financial Utility",
        description: "Python-based currency converter that utilizes real-time exchange rates via API integration.",
        tags: ["Python", "API", "Finance"],
        image: CurrencyConverterImg,
        github: "https://github.com/biniam7534/Currency-converter-",
        demo: "#",
        color: "blue"
    }
];

const Project = () => {
    return (
        <section className="py-24 overflow-hidden relative" id="projects">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
                    >
                        My <span className="text-accent">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        A showcase of my recent work
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-secondary/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-accent/30 transition-all duration-500 flex flex-col"
                        >
                            {/* Photo Area */}
                            <div className="h-52 bg-secondary/60 w-full flex items-center justify-center relative overflow-hidden text-accent">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
                                        <div className="w-16 h-1 bg-white/5 rounded-full"></div>
                                    </>
                                )}
                            </div>

                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-400 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/10 text-sm font-semibold"
                                    >
                                        <Github size={18} />
                                        Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent hover:brightness-110 text-black rounded-2xl transition-all shadow-lg shadow-accent/20 text-sm font-semibold"
                                    >
                                        <ExternalLink size={18} />
                                        Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;