import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import "./nav.scss";
import { useState } from "react";

export default function Nav() {
  const [controlHamburgerMenu, setControlHamburgerMenu] =
    useState<boolean>(false);

  return (
    <section className="nav-section">
      <p className="nav-section__headline">CinePalace</p>
      <nav
        className={`nav-section__nav-bar ${controlHamburgerMenu ? "nav-animation" : ""}`}
      >
        <Link
          to="/"
          onClick={() => {
            setControlHamburgerMenu(false);
          }}
          className="nav-section__link link"
        >
          Home
        </Link>
        <HashLink
          to="/#slider"
          onClick={() => {
            setControlHamburgerMenu(false);
          }}
          className="nav-section__link link"
        >
          Filme
        </HashLink>
        <Link
          to="/bookingOverview"
          onClick={() => {
            setControlHamburgerMenu(false);
          }}
          className="nav-section__link link"
        >
          Buchungen
        </Link>
        <HashLink
          to="/#about-us"
          onClick={() => {
            setControlHamburgerMenu(false);
          }}
          className="nav-section__link link"
        >
          Über Uns
        </HashLink>
        <HashLink
          to="/#opening-time"
          onClick={() => {
            setControlHamburgerMenu(false);
          }}
          className="nav-section__link link"
        >
          Öffnungzeiten
        </HashLink>
        <HashLink
          to="/#contact"
          onClick={() => {
            setControlHamburgerMenu(false);
          }}
          className="nav-section__link link"
        >
          Kontakt
        </HashLink>
      </nav>

      <div
        onClick={() => {
          setControlHamburgerMenu(!controlHamburgerMenu);
        }}
        className="nav-section__hamburger-menu hover"
      >
        <div
          className={`nav-section__line ${controlHamburgerMenu ? "top-line-animation" : ""}`}
        ></div>
        <div
          className={`nav-section__line ${controlHamburgerMenu ? "middle-line-animation" : ""}`}
        ></div>
        <div
          className={`nav-section__line ${controlHamburgerMenu ? "bottom-line-animation" : ""}`}
        ></div>
      </div>
    </section>
  );
}
