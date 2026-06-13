import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import CursorHackathonCert from '../assets/cursor-hackathon-certificate.png';
import NexusBackendCert from '../assets/nexus-backend-certificate.png';

const certificates = [
    {
        id: 1,
        title: 'Cursor Virtual Hackathon Addis Ababa',
        subtitle: 'Certificate of Achievement — Third Place',
        issuer: 'Cursor',
        date: 'May 17, 2026',
        description: 'Recognized for innovation and technical proficiency, building solutions with the Cursor Agent SDK.',
        image: CursorHackathonCert,
    },
    {
        id: 2,
        title: 'Fundamentals of Backend Development',
        subtitle: 'Certificate of Completion',
        issuer: 'Nexus Tutorial',
        date: 'May 20, 2026',
        description: 'Successfully completed the in-depth bootcamp program in backend development fundamentals.',
        image: NexusBackendCert,
    },
];

const Certificates = () => {
    return (
        <section className="py-24" id="certificates">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
                    >
                        Certificates & <span className="text-accent">Achievements</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Professional certifications and awards that reflect my continuous learning and growth.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-secondary/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-accent/30 transition-all duration-500"
                        >
                            <div className="relative overflow-hidden bg-black/20">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-64 object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                            </div>

                            <div className="p-8">
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                        <Award size={20} />
                                    </div>
                                    <div>
                                        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">
                                            {cert.issuer}
                                        </p>
                                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">{cert.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {cert.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        {cert.date}
                                    </span>
                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-accent hover:brightness-110 transition-all"
                                    >
                                        View Certificate
                                        <ExternalLink size={16} />
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

export default Certificates;
