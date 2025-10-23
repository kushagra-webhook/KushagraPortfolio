import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Gallery } from "@/components/Gallery";
import { Skills } from "@/components/Skills";
import { RolesAchievements } from "@/components/RolesAchievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
// import { CustomCursor } from "@/components/CustomCursor";
import { Chatbot } from "@/components/chatbot/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <CustomCursor /> */}
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <Experience />
      <Projects />
      <Publications />
      <Gallery />
      <Skills />
      <RolesAchievements />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
