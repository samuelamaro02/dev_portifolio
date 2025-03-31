'use client';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/layout/Header/header"
import Hero from "./components/sections/Hero/hero";
import SectionSkills from "./components/sections/Skills/sectionSkills";
import SectionExperience from "./components/sections/Experience/sectionExperience";
import SectionAbout from "./components/sections/About/sectionAbout";
import SectionProjects from "./components/sections/Projects/sectionProjects";
import SectionCta from "./components/sections/Cta/sectionCta";
import Footer from "./components/layout/Footer/footer";



export default function Home() {
  return (
    <main>
      <SpeedInsights/>
      <Header/>
      <Hero/>
      <SectionSkills/>
      <SectionExperience/>
      <SectionAbout/>
      <SectionProjects/> 
      <SectionCta/>
      <Footer/>
    </main>
  );
}