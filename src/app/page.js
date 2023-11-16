import ContactSection from "./_components/ContactSection";
import FaqSection from "./_components/FaqSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import ServicesSection from "./_components/ServicesSection";
import TestimonialsSection from "./_components/TestimonialsSection";


export default function Home() {
  return (
   <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <FaqSection/>
      <Footer/>
   </div>
  )
}
