import Hero from "./components/hero";
import SectionSkills from "./components/sectionSkills";
import SectionExperience from "./components/sectionExperience";
import SectionAbout from "./components/sectionAbout";

export default function Home() {
  return (
    <main>
      <Hero/>
      <SectionSkills/>
      <SectionExperience/>
      <SectionAbout/>
    </main>
  );
}
