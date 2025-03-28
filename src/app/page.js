import Header from "./components/layout/Header/header";
import Hero from "./components/sections/Hero/hero";
import SectionSkills from "./components/sections/Skills/sectionSkills";
import SectionExperience from "./components/sections/Experience/sectionExperience";
import SectionAbout from "./components/sections/About/sectionAbout";
import SectionProjects from "./components/sections/Projects/sectionProjects";
import SectionTestimonial from "./components/sections/Testimonial/sectionTestimonial";
import SectionCta from "./components/sections/Cta/sectionCta";
import Footer from "./components/layout/Footer/footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <SectionSkills/>
      <SectionExperience/>
      <SectionAbout/>
      <SectionProjects/> 
      <SectionTestimonial/>
      <SectionCta/>
      <Footer/>
    </main>
  );
}