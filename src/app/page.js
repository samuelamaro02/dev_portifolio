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
import { initFacebookPixel, trackEvent } from "../lib/facebookPixel";
import { sendFbEvent } from "../lib/facebookConversionApi";

const PIXEL_ID = '1337062430845620';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default function Home() {
  useEffect(() => {
    const eventId = `pageview-${Date.now()}`;
    const fbp = getCookie('_fbp') || '';
    const fbc = getCookie('_fbc') || '';

    initFacebookPixel(PIXEL_ID).then((ReactPixel) => {
      trackEvent(ReactPixel, 'PageView', eventId); // Agora com eventID
    });

    sendFbEvent('PageView', {
      value: 0,
      currency: 'BRL',
    }, {
      client_user_agent: navigator.userAgent,
      fbp,
      fbc,
      event_id: eventId,
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
