import "./footer.scss";
import { Link } from "react-router";
import "../variables.scss";

export default function Footer() {
  return (
    <div className="footer">
      <Link to="/imprint" className="footer__imprint link no-link">
        Impressum
      </Link>{" "}
      <span className="footer__border">|</span>
      <Link
        to="/dataProtection"
        className="footer__data-protection link no-link"
      >
        Datenschutz
      </Link>{" "}
      <span className="footer__border">|</span>
      <p className="footer__copy-right">&copy; cine.palace@gmx.de</p>
    </div>
  );
}
