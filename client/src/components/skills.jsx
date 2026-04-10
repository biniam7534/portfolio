
import React from 'react';
import { motion } from 'framer-motion';
import {
    SiReact, SiTailwindcss, SiNodedotjs,
    SiMongodb, SiPython, SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';

const skills = [
    { name: 'React', level: '85%', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'Tailwind CSS', level: '90%', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'JavaScript', level: '80%', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Node.js', level: '75%', icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: 'MongoDB', level: '70%', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'Python', level: '80%', icon: <SiPython className="text-[#3776AB]" /> },
    { name: 'HTML', level: '95%', icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS', level: '90%', icon: <SiCss3 className="text-[#1572B6]" /> },
];

const Skills = () => {
    return (
        <section className="py-24" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
                    >
                        My <span className="text-accent">Skills</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        I specialize in building modern web applications using the latest technologies and best practices.
                    </motion.p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-secondary/30 backdrop-blur-sm border border-white/5 p-6 rounded-3xl hover:border-accent/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(217,119,6,0.05)]"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold group-hover:text-accent transition-colors uppercase tracking-wider text-sm">
                                    {skill.name}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400 font-medium">Proficiency</span>
                                    <span className="text-accent font-bold">{skill.level}</span>
                                </div>

                                {/* Progress Bar Container */}
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-accent to-amber-400 rounded-full"
                                    />
                                </div>

                                {/* Decorative Line */}
                                <div className="w-12 h-[2px] bg-accent/30 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
