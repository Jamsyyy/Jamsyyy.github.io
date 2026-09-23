import Navbar from "@/components/Navbar";
import Me from "@/components/Me";
import Footer from "@/components/Footer";
import Projects from "@/components/ProjectPage";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Me />

      <Projects />

      <About />

      <Contact />
      
      <Footer />
    </main>
  );
}