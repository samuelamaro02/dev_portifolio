import Hero from "./components/hero";
import SectionSkills from "./components/sectionSkills";
import SectionExperience from "./components/sectionExperience";
import SectionAbout from "./components/sectionAbout";
import SectionProjetcs from "./components/sectionProjects";
import SectionTestimonial from "./components/sectionTestimonial";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SectionSkills/>
      <SectionExperience/>
      <SectionAbout/>
      <SectionProjetcs/>
      <SectionTestimonial/>
    </main>
  );
}
