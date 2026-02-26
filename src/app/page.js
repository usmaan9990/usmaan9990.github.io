import Navbar          from '../components/Navbar';
import HeroSection     from '../components/HeroSection';
import AboutSection    from '../components/AboutSection';
import SkillsSection   from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection  from '../components/ContactSection';
import Footer          from '../components/Footer';
import Chatbot         from '../components/Chatbot';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
