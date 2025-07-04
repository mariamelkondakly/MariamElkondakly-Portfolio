import { Background } from '../components/Background';
import { Navbar } from '../components/Navbar';
import { ThemeToggle } from '../components/ThemeToggle';
import {HomeSection} from '../components/HomeSection';
import '../index.css';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { LanguagesSection } from '../components/LanguagesSection';
import { ProjectSection } from '../components/ProjectsSection';
import {Footer} from '../components/Footer';

export const Home = () => {
  return (
<section className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scroll-smooth touch-manipulation">
      <Background/>
      <Navbar/>
      <main>
        <HomeSection/>
        <AboutSection/>
        <SkillsSection/>
        <LanguagesSection/>
        <ProjectSection/>
      </main>
      <Footer/>
    </section>
  );
};

