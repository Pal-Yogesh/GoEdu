import About from "../../components/About";
import Faq from "../../components/FAQ";
import Featureandbenefits from "../../components/Featureandbenefits";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Howwework from "../../components/Howwework";
import Navbar from "../../components/Navbar";
import Popup from "../../components/Popup";
import Testimonials from "../../components/Testimonials";
import Work from "../../components/Work";

export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <Popup />
      <About />
      <Howwework />
      <Featureandbenefits />
    
      <Work />
      <Testimonials />
     
      <Faq />
      <Footer />

    </>
  );
}
