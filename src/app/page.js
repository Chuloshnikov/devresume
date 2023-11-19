import ContactSection from "./_components/ContactSection";
import FaqSection from "./_components/FaqSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import ServicesSection from "./_components/ServicesSection";
import TestimonialsSection from "./_components/TestimonialsSection";


const getLandingPageData = async () => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}`;
  let req = await fetch(url, {cach: "no-store"});

  const storyData = await req.json();
  const { nav_section, hero_section, services_section } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
  }
}


export default async function Home() {
  const storyData = await getLandingPageData();
  return (
   <div>
      <Navbar data={storyData.nav_section} />
      <HeroSection data={storyData.hero_section}/>
      <ServicesSection data={storyData.services_section}/>
      {/*
      <TestimonialsSection/>
      <ContactSection/>
      <FaqSection/>
      <Footer/>
  */}
   </div>
  )
}
