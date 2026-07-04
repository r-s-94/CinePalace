import { Link } from "react-router";
import Nav from "../nav/nav";
import "./finishBooking.scss";
import "../../variables.scss";
import { useContext, useEffect } from "react";
import { threeDSliderOptionsContent } from "../../threeDSliderOptionsContent";
import Footer from "../footer/footer";

export default function FinishBooking() {
  const { threeDSliderOptions, setThreeDSliderOptions } = useContext(
    threeDSliderOptionsContent,
  );

  useEffect(() => {
    setThreeDSliderOptions({
      ...threeDSliderOptions,
      currentSliderIndex: -1,
      currentRotatePosition: 0,
    });
  }, []);

  return (
    <section className="finish-booking">
      <Nav />
      <p className="finish-booking__text">Vielen Dank für deine Buchung.</p>
      <Link to="/" className="finish-booking__back-link no-link link hover">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="finish-booking__back-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
        zur Hauptseite
      </Link>

      <Footer />
    </section>
  );
}
