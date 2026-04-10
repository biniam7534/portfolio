import Navbar from "./Navbar"
import Hero from "./hero"
import About from "./about"
import Skills from "./skills"
import Project from "./project"
import Contact from "./contact"
import Footer from "./footer"

const Main = () => {
    return (
        <main className="min-h-screen selection:bg-accent selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </main>
    )
}

export default Main
