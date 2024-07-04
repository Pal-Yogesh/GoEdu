import About from "../../components/About";
import Faq from "../../components/FAQ";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Howwework from "../../components/Howwework";
import Navbar from "../../components/Navbar";
import SimpleCarousel from "../../components/SimpleCarousel";
import Testimonial from "../../components/Testimonial";
import Work from "../../components/Work";

export default function Home() {
  return (
    
    <>
      <Navbar />
      <Hero />
      <About />
      <Howwework />
      <SimpleCarousel />
      <Work />
      <Testimonial />
      <Faq />
      <Footer />

    </>
  );
}
