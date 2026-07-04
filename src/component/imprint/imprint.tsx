import Footer from "../footer/footer";
import Nav from "../nav/nav";
import "./imprint.scss";
import "../../variables.scss";

export default function Imprint() {
  return (
    <div className="imprint">
      <Nav />
      <h2 className="imprint__headline">Impressum</h2>
      <p className="imprint__note">Angaben gemäß § 5 DDG</p>
      <div className="imprint__infos">
        <p className="imprint__info">Geschäftsführer: Reinhard Thomas</p>
        <p className="imprint__info imprint__street">
          Karlshäger Allee 23
          <br />
          16374 Offsbach
        </p>
        <p className="imprint__info ">Mail: cine.palace@gmx.de</p>
        <p className="imprint__info ">Tel.: +49 276 3862476</p>
      </div>{" "}
      <Footer />
    </div>
  );
  /* 
  
  */
}
