import AboutPic from '../assets/1.bnu.jpg';
import CV from '../assets/cv.png';

const About = () => {
    return (
        <section id="about" className='py-20 px-10 bg-[#0f172a] text-white'>
            <div className='max-w-6xl mx-auto'>
                {/* Section Heading */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-black mb-4'>
                        About <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>Me</span>
                    </h2>
                    <div className='w-24 h-1.5 bg-indigo-500 mx-auto rounded-full'></div>
                </div>

                <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
                    {/* Image Section */}
                    <div className='lg:w-1/2 relative group'>
                        <div className='absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
                        <div className='relative'>
                            <img
                                src={AboutPic}
                                alt="About Biniam"
                                className='rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] transform group-hover:scale-[1.02] transition-all duration-500'
                            />
                        </div>
                        {/* Experience Card Overlay */}
                        <div className='absolute -bottom-6 -right-6 bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-indigo-500/20 ssm:hidden md:block'>
                            <p className='text-4xl font-bold text-indigo-500'>1+</p>
                            <p className='text-gray-400 text-sm'>Years Experience</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className='lg:w-1/2'>
                        <h3 className='text-2xl font-bold mb-6 text-indigo-400'>
                            A Passionate Web Developer Crafting Exceptional Digital Experiences
                        </h3>
                        <p className='text-gray-400 text-lg leading-relaxed mb-8'>
                            I am a dedicated Computer Science student and aspiring full stack developer with a strong focus on web and backend development. I enjoy building real-world applications using HTML, CSS, JavaScript, React, Node.js, and Python, and I continuously sharpen my problem-solving skills while writing clean, efficient, and scalable code.
                        </p>

                        {/* Info Grid */}
                        <div className='grid grid-cols-1 ssm:grid-cols-2 gap-6 mb-8'>
                            <div className='p-4 rounded-xl bg-[#1e293b] border border-indigo-500/10 hover:border-indigo-500/30 transition-all'>
                                <p className='text-gray-500 text-sm mb-1'>Location</p>
                                <p className='font-semibold'>Mojo, Ethiopia</p>
                            </div>
                            <div className='p-4 rounded-xl bg-[#1e293b] border border-indigo-500/10 hover:border-indigo-500/30 transition-all'>
                                <p className='text-gray-500 text-sm mb-1'>Education</p>
                                <p className='font-semibold'>Computer Science</p>
                            </div>
                            <div className='p-4 rounded-xl bg-[#1e293b] border border-indigo-500/10 hover:border-indigo-500/30 transition-all'>
                                <p className='text-gray-500 text-sm mb-1'>Availability</p>
                                <p className='font-semibold'>Student</p>
                            </div>
                            <div className='p-4 rounded-xl bg-[#1e293b] border border-indigo-500/10 hover:border-indigo-500/30 transition-all'>
                                <p className='text-gray-500 text-sm mb-1'>Interests</p>
                                <p className='font-semibold'>Tech, Full stack & AI</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap gap-4'>
                            <a
                                href={CV}
                                download="Biniam_Abu_CV.png"
                                className='px-8 py-3 bg-indigo-600 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 inline-block text-center'
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
