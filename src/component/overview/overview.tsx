import Nav from "../nav/nav";
import "../../index.scss";
import "./overview.scss";
import ThreeDSlider from "../threeDSlider/threedSlider";
import AboutUs from "../aboutUs/aboutUs";
import Contact from "../contact/contact";
import OppeningTime from "../oppeningTime/oppeningTime";
import Footer from "../footer/footer";
import BackToTop from "../backToTop/backToTop";

export default function Overview() {
  return (
    <section className="overview-secetion">
      <Nav />

      <ThreeDSlider />
      <AboutUs />
      <OppeningTime />
      <Contact />
      <BackToTop />
      <Footer />
    </section>
  );
  /*  
      <h1 className="overview-section__headline">CinePalace</h1>
     
    
  */
}
