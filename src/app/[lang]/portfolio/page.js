import ContactSection from "../_components/ContactSection";
import Footer from "../_components/Footer";
import PortfolioNavbar from "../_components/PortfolioPage/PortfolioNavbar";



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

export default async function Portfolio({ params: {lang}}) {
    const storyData = await getLandingPageData(lang);
    return (
        <>
        <PortfolioNavbar data={storyData.nav_section} lang={lang}/>
            <ContactSection data={storyData.contact_section}/>
        <Footer data={storyData.footer_section}/>
        </>
    )
}
