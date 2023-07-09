import Projects from "../components/projects_section/Projects";
import Skills from "../components/skills_section/Skills";
import AboutSec from "../components/about_section/About";
import Contact from "../components/contact_section/Contact";
import About from "../components/first_section_about/About";
import MouseTrail from "../components/mouse/mouse";
const Home_page = () => {
  return (
    <>
      <About />
      <MouseTrail/>
      <Skills />
      <Projects/>
      <AboutSec />
      <Contact />
    </>
  );
};
export default Home_page;
