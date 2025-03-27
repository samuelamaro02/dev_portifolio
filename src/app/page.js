import Hero from "./components/hero";
import SectionSkills from "./components/sectionSkills";
import SectionExperience from "./components/sectionExperience";
import SectionAbout from "./components/sectionAbout";
import SectionProjetcs from "./components/sectionProjects";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SectionSkills/>
      <SectionExperience/>
      <SectionAbout/>
      <SectionProjetcs/>
    </main>
  );
}
