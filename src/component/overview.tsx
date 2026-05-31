import Nav from "./nav";
import "../index.scss";
import "./overview.scss";
import ThreeDSlider from "./threedSlider";
import AboutUs from "./aboutUs";
import Contact from "./contact";
import OppeningTime from "./oppeningTime";
import Footer from "./footer";
import BackToTop from "./backToTop";

export default function Overview() {
  return (
    <section className="overview-secetion">
      <Nav />
      <h1 className="overview-section__headline">CinePalace</h1>
      <ThreeDSlider />
      <AboutUs />
      <OppeningTime />
      <Contact />
      <Footer />
      <BackToTop />
    </section>
  );
}
