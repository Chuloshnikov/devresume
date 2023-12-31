import ContactSection from "./_components/ContactSection";
import FaqSection from "./_components/FaqSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import ServicesSection from "./_components/ServicesSection";
import TestimonialsSection from "./_components/TestimonialsSection";



const getLandingPageData = async (lang) => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;
  let req = await fetch(url, {next: { revalidate: 10 }});

  const storyData = await req.json();
  const { nav_section, hero_section, services_section, testimonials_section, contact_section, faq_section, footer_section } = storyData.story.content;
  console.log(storyData.story.content);
  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    services_section: services_section[0],
    testimonials_section: testimonials_section[0],
    contact_section: contact_section[0],
    faq_section: faq_section[0],
    footer_section: footer_section[0],
  }
}


export default async function Home({ params: {lang}}) {
  const storyData = await getLandingPageData(lang);
  return (
   <div>
      <Navbar data={storyData.nav_section} lang={lang}/>
      <HeroSection data={storyData.hero_section}/>
      <ServicesSection data={storyData.services_section}/>
      <TestimonialsSection data={storyData.testimonials_section}/>
      <ContactSection data={storyData.contact_section}/>
      <FaqSection data={storyData.faq_section}/>
      <Footer data={storyData.footer_section}/>
   </div>
  )
}
