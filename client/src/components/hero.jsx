// import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTelegram } from 'react-icons/bs';
import HeroPic from '../assets/bina.jpg';

const Hero = () => {
    return (
        <section id="home" className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white min-h-[80vh] pt-32'>
            {/* 1: Social Links Section */}
            <div className='flex flex-col space-y-6 ssm:flex-row ssm:space-y-0 ssm:space-x-6 lg:flex-col lg:space-x-0 lg:space-y-6'>
                <a href="https://www.facebook.com/share/19o1jPRNpq/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-indigo-500 transition-all duration-300 transform hover:scale-125'>
                    <BsFacebook size={28} />
                </a>
                <a href="https://t.me/bina_t30" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-sky-500 transition-all duration-300 transform hover:scale-125'>
                    <BsTelegram size={28} />
                </a>
                <a href="https://www.instagram.com/30_bin/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-125'>
                    <BsInstagram size={28} />
                </a>
                <a href="https://www.linkedin.com/in/biniam-abu-a7a4b5395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-125'>
                    <BsLinkedin size={28} />
                </a>
            </div>

            {/* 2: Main Content Section */}
            <div className='max-w-xl text-center lg:text-left'>
                <h2 className='text-indigo-500 font-bold tracking-widest uppercase mb-4'>I'm a Developer</h2>
                <h1 className='text-6xl font-black mb-6 leading-tight'>
                    Hi, I'm <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>Biniam</span>
                </h1>
                <p className='text-gray-400 text-lg mb-8 leading-relaxed'>
                    Building modern, responsive, and highly interactive web applications that solve real-world problems.
                </p>
                <button className='px-10 py-4 bg-indigo-600 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transform hover:-translate-y-1'>
                    Show More...
                </button>
            </div>

            {/* 3: Image Section */}
            <div className='relative group'>
                <div className='absolute -inset-4 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all'></div>
                <img
                    src={HeroPic}
                    alt="Biniam"
                    className='relative w-80 h-80 rounded-full border-8 border-indigo-500/10 object-cover grayscale hover:grayscale-0 transition-all duration-500 transform hover:rotate-3 shadow-2xl'
                />
            </div>
        </section>
    );
}

export default Hero;