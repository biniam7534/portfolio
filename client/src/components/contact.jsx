
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Illustration from '../assets/contact_me_custom.png';

export default function Contact() {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(form.current);
        const data = {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            user_email: formData.get('user_email'),
            user_phone: formData.get('user_phone'),
            message: formData.get('message'),
        };

        try {
            // Send to Backend
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
            const backendResponse = await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await backendResponse.json().catch(() => ({}));

            if (!backendResponse.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            setStatus({
                type: 'success',
                message: result.message || 'Message sent and saved successfully!'
            });
            form.current.reset();
        } catch (error) {
            console.error('Error:', error);
            setStatus({
                type: 'error',
                message: error.message || 'Something went wrong. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section className="py-24" id="contact">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black mb-4"
                    >
                        Contact <span className="text-accent">Me</span>
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

                <div className="flex justify-center">
                    {/* Centered Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full max-w-2xl bg-secondary/50 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl rounded-full"></div>

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
                                        className="w-full px-6 py-4 bg-secondary border border-white/10 rounded-2xl focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        name="last_name"
                                        required
                                        placeholder="Last Name"
                                        className="w-full px-6 py-4 bg-secondary border border-white/10 rounded-2xl focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="Email Address"
                                    className="w-full px-6 py-4 bg-secondary border border-white/10 rounded-2xl focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="tel"
                                    name="user_phone"
                                    placeholder="Phone Number"
                                    className="w-full px-6 py-4 bg-secondary border border-white/10 rounded-2xl focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full px-6 py-4 bg-secondary border border-white/10 rounded-2xl focus:outline-none focus:border-accent transition-colors placeholder:text-gray-500 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 bg-gradient-to-r from-accent to-amber-600 hover:brightness-110 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-accent/20 active:scale-95 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
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