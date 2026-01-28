
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Illustration from '../assets/contact_me_custom.png';

export default function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        // Replace these with your own EmailJS values
        const SERVICE_ID = 'service_your_id';
        const TEMPLATE_ID = 'template_your_id';
        const PUBLIC_KEY = 'your_public_key';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                form.current.reset();
            }, (error) => {
                setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
                console.error('EmailJS Error:', error.text);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section className="py-24 bg-[#0f172a] text-white" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black mb-4"
                    >
                        Contact <span className="text-indigo-500">Me</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-xl"
                    >
                        Let's discuss your project
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Column: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-lg"
                    >
                        <img
                            src={Illustration}
                            alt="Contact Illustration"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)] transition-transform duration-500 hover:scale-105"
                        />
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-xl bg-[#11121d] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full"></div>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                            {status.message && (
                                <div className={`p-4 rounded-xl text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                    }`}>
                                    {status.message}
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="first_name"
                                        required
                                        placeholder="First Name"
                                        className="w-full px-6 py-4 bg-[#1e1f29] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="last_name"
                                        required
                                        placeholder="Last Name"
                                        className="w-full px-6 py-4 bg-[#1e1f29] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="Email Address"
                                    className="w-full px-6 py-4 bg-[#1e1f29] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="tel"
                                    name="user_phone"
                                    placeholder="Phone Number"
                                    className="w-full px-6 py-4 bg-[#1e1f29] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full px-6 py-4 bg-[#1e1f29] border border-white/10 rounded-2xl focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-gray-500 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-indigo-500/20 active:scale-95 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}