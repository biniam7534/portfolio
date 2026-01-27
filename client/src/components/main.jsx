import Navbar from "./Navbar"
import Hero from "./hero"
import Project from "./project"
import Contact from "./contact"
import Footer from "./footer"

const Main = () => {
    return (
        <main className="min-h-screen bg-[#0f172a] text-white">
            <Navbar />
            <Hero />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}

export default Main
