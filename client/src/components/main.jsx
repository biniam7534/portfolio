import Navbar from "./Navbar"

const Main = () => {
    return (
        <main className="min-h-screen bg-[#0f172a] text-white">
            <Navbar />

            <section className="max-w-7xl mx-auto px-10 py-20 flex flex-col items-center text-center">
                <h1 className="text-6xl font-black mb-6 tracking-tight">
                    Creative <span className="text-indigo-500">Developer</span> & Designer
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    Passionate about building beautiful, functional, and user-centered digital experiences.
                </p>
                <div className="mt-10 flex gap-4">
                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-bold transition-all transform hover:scale-105">
                        View Projects
                    </button>
                    <button className="px-8 py-3 border border-gray-700 hover:border-gray-500 rounded-full font-bold transition-all">
                        Contact Me
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Main
