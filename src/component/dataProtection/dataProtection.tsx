import "../../variables.scss";
import BackToTop from "../backToTop/backToTop";
import "./dataProtection.scss";
import Footer from "../footer/footer";
import Nav from "../nav/nav";

export default function DataProtection() {
  return (
    <section className="data-protection">
      <Nav />
      <h2 className="data-protection__headline">Datenschutzerklärung</h2>

      <div className="data-protection__overview">
        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">
            1. Allgemeine Hinweise
          </h3>
          Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Website
          dienst ausschließlich Demonstrations- und Lernzwecken und verarbeitet
          nur die technisch notwendigen Daten für die Nutzung der Website.
        </div>

        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">
            2. Verantwortlicher
          </h3>
          <p>CinePalace (Demo-Projekt)</p>
          <p>Geschäftsführer: Reinhard Thomas</p>
          <p>Karlshäger Allee 23</p>
          <p>16374 Offsbach</p>
          <p>Telefon: +49 276 3862476</p>
          <p>E-Mail: cine.palace@gmx.de</p>
        </div>

        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">
            3. Erhebung und Verarbeitung von Daten
          </h3>
          Bei der Nutzung dieser Website werden keine Benutzerkonten erstellt
          und keine Registrierungen angeboten.
          <br />
          <br />
          Die Buchungsdaten werden ausschließlich lokal im Browser des Nutzers
          gespeichert (LocalStorage). Diese Daten verlassen das Gerät des
          Nutzers nicht und werden nicht an uns übertragen.
          <br />
          <br />
          Gespeichert werden beispielsweise:
          <br />
          <br />
          <ul className="data-protection__ul">
            <li className="data-protection__li">ausgewählte Filme</li>
            <li className="data-protection__li">ausgewählte Sitzplätze</li>
            <li className="data-protection__li">
              ausgewählte Snacks und Getränke
            </li>
            <li className="data-protection__li">gewählte Zahlungsmethoden</li>
          </ul>
          <br />
          <br />
          Diese Daten dienen ausschließlich der Funktionalität der
          Demo-Anwendung.
        </div>

        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">
            4. Server-Logfiles
          </h3>
          Beim Besuch dieser Website können durch den Hosting-Anbieter
          automatisch technische Informationen erfasst werden. Dazu gehören
          beispielsweiße:
          <br />
          <br />
          <ul className="data-protection__ul">
            <li className="data-protection__li">IP-Adresse</li>
            <li className="data-protection__li">
              Datum und Uhrzeit des Zugriffs
            </li>
            <li className="data-protection__li">
              Browsertype und Browserversion
            </li>
            <li className="data-protection__li">verwendetes Betriebssystem</li>
            <li className="data-protection__li">aufgerufene Seiten</li>
          </ul>
          <br />
          <br />
          Diese Daten werden ausschließlich zur techninschen Bereitstellung und
          Sicherheit der Website verwendet.
        </div>

        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">
            5. Kontaktaufnahme
          </h3>
          Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen
          übermittleten Daten ausschließlich zur Bearbeitung Ihrer Anfragen
          verwendet.
          <br />
          <br />
          Eine Weitergabe an Dritte erfolgt nicht.
        </div>

        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">6. Google Maps</h3>
          Diese Website kann Kartenmaterial von Google Maps einbinden.
          <br />
          <br />
          Beim Aufruf der Kartenansicht können Daten an Google übertragen
          werden. Weitere Informationen finden Sie in der Datenschutzerlärung
          von Google:
          <br />
          <br />
          <a
            href="https://policies.google.com/privacy"
            target="blank"
            className="data-protection__link"
          >
            https://policies.google.com/privacy
          </a>
        </div>

        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">7. Ihre Rechte</h3>
          Sie haben Recht auf:
          <br />
          <br />
          <ul className="data-protection__ul">
            <li className="data-protection__li">
              Auskunft über gespeicherte Daten
            </li>
            <li className="data-protection__li">
              Berichtigung unrichtiger Daten
            </li>
            <li className="data-protection__li">
              Löschung gespeicherter Daten
            </li>
            <li className="data-protection__li">
              Einschränkung der Verarbeitung
            </li>
            <li className="data-protection__li">
              Beschwerde bei einer zuständigen Datenschutzaufsichtsbehörde
            </li>
          </ul>
        </div>

        <div className="data-protection__clause">
          <h3 className="data-protection__clause-headline">
            8. Änderung dieser Datenschutzerklärung
          </h3>
          Diese Datenschutzerklärung kann angepasst werden, wenn technische oder
          rechtliche Änderungen dies erforderlich machen.
          <br />
          <br />
          Stand: Mai 2026
        </div>
      </div>

      <Footer />
      <BackToTop />
    </section>
  );
  /*
  
  */
}
