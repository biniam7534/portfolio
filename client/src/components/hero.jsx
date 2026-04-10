// import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';
import HeroPic from '../assets/bina.jpg';

const Hero = () => {
    return (
        <section id="home" className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 min-h-[80vh] pt-32'>
            {/* 1: Social Links Section */}
            <div className='flex flex-col space-y-6 ssm:flex-row ssm:space-y-0 ssm:space-x-6 lg:flex-col lg:space-x-0 lg:space-y-6'>
                <a href="https://www.facebook.com/share/19o1jPRNpq/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-125'>
                    <BsFacebook size={28} />
                </a>
                <a href="https://t.me/bina_t30" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-125'>
                    <BsTelegram size={28} />
                </a>
                <a href="https://www.instagram.com/30_bin/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-125'>
                    <BsInstagram size={28} />
                </a>
                <a href="https://www.linkedin.com/in/biniam-abu-a7a4b5395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-125'>
                    <BsLinkedin size={28} />
                </a>
            </div>

            {/* 2: Main Content Section */}
            <div className='max-w-xl text-center lg:text-left'>
                <h2 className='text-accent font-bold tracking-widest uppercase mb-4'>I'm a Developer</h2>
                <h1 className='text-6xl font-black mb-6 leading-tight'>
                    Hi, I'm <span className='bg-gradient-to-r from-accent to-amber-500 bg-clip-text text-transparent'>Biniam Abu</span>
                </h1>
                <p className='text-gray-400 text-lg mb-8 leading-relaxed'>
                    Building modern, responsive, and highly interactive web applications that solve real-world problems.
                </p>
                <a href="#about" className='inline-block px-10 py-4 bg-accent rounded-full font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/40 transform hover:-translate-y-1 text-black'>
                    View Projects
                </a>
            </div>

            {/* 3: Image Section */}
            <div className='relative group'>
                <div className='absolute -inset-4 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-all'></div>
                <img
                    src={HeroPic}
                    alt="Biniam"
                    className='relative w-80 h-80 rounded-full border-8 border-accent/10 object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:rotate-3 shadow-2xl'
                />
            </div>
        </section>
    );
}

export default Hero;