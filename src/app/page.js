'use client';

import { useEffect } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/layout/Header/header";
import Hero from "./components/sections/Hero/hero";
import SectionSkills from "./components/sections/Skills/sectionSkills";
import SectionExperience from "./components/sections/Experience/sectionExperience";
import SectionAbout from "./components/sections/About/sectionAbout";
import SectionProjects from "./components/sections/Projects/sectionProjects";
import SectionCta from "./components/sections/Cta/sectionCta";
import Footer from "./components/layout/Footer/footer";
import { initFacebookPixel, trackPageView } from "../lib/facebookPixel";
import { sendFbEvent } from "../lib/facebookConversionApi";

const PIXEL_ID = '1337062430845620';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default function Home() {
  useEffect(() => {
    let fbPixel;

    initFacebookPixel(PIXEL_ID).then((ReactPixel) => {
      fbPixel = ReactPixel;
      trackPageView(fbPixel);
    });

    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    sendFbEvent('PageView', {
      value: 0,
      currency: 'BRL',
    }, {
      client_user_agent: navigator.userAgent,
      fbp: fbp || '',
      fbc: fbc || '',
    });

  }, []);

  return (
    <main>
      <SpeedInsights />
      <Header />
      <Hero />
      <SectionSkills />
      <SectionExperience />
      <SectionAbout />
      <SectionProjects />
      <SectionCta />
      <Footer />
    </main>
  );
}
