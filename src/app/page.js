import Hero from "./components/hero";
import SectionSkills from "./components/sectionSkills";
import SectionExperience from "./components/sectionExperience";
import SectionAbout from "./components/sectionAbout";
import SectionProjects from "./components/sectionProjects"; 
import SectionTestimonial from "./components/sectionTestimonial";
import SectionCta from "./components/sectionCta"; 
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
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