import "./backToTop.scss";
import { useEffect, useState } from "react";
import "../../variables.scss";

export default function BackToTop() {
  const [showToTop, setShowToTop] = useState<boolean>(false);
  const [interaction, setInteraction] = useState<boolean>(true);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScrollEvents);
    };
  }, []);

  window.addEventListener("scroll", handleScrollEvents);

  function handleScrollEvents() {
    console.log(window.pageYOffset);
    const trigger = document.body.scrollHeight * 0.2;

    if (window.pageYOffset > trigger) {
      setShowToTop(true);
      setInteraction(false);
    } else {
      setShowToTop(false);
      setInteraction(true);
    }
  }

  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <button
      onClick={toTop}
      disabled={interaction}
      className={`to-top-button ${showToTop ? " secondary-button hover show" : "no-interaction"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="to-up-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
        />
      </svg>
    </button>
  );
}
