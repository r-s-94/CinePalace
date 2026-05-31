import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import "./nav.scss";

export default function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="link">
        Home
      </Link>
      <HashLink to="/#slider" className="link">
        Filme
      </HashLink>
      <Link to="/bookingOverview" className="link">
        Buchungen
      </Link>
      <HashLink to="/#about-us" className="link">
        Über Uns
      </HashLink>
      <HashLink to="/#opening-time" className="link">
        Öffnungzeiten
      </HashLink>
      <HashLink to="/#contact" className="link">
        Kontakt
      </HashLink>
    </nav>
  );
}
