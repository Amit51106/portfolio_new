import Navbar from "./component/nav";
import Hero from "./component/h";
import About from "./component/about";
import Skills from "./component/skill";
import Projects from "./component/project";
import Contact from "./component/contact";
import Footer from "./component/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}