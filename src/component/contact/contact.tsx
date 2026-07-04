import "./contact.scss";
import "../../variables.scss";
import CinemaPicture from "../../assets/Kino-ousite2.jpg";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-section__headline">Kontakt</h2>
      <div className="contact-section__infos">
        <div className="contact-section__contacts">
          <p className="contact-section__info contact-section__street">
            Karlshäger Allee 23
          </p>
          <p className="contact-section__info contact-section__PLZ">
            16374 Offsbach
          </p>
          <p className="contact-section__info contact-section__tele">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="contact-section__phone-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            +49 276 3862476
          </p>
          <p className="contact-section__info contact-section__mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="contact-section__mail-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            cine.palace@gmx.de
          </p>

          <div className="contact-section__buttons">
            {" "}
            <a href="tel:" className="contact-section__phone-link no-link">
              <button className="contact-section__phone-button secondary-button hover">
                Phone
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="contact-section__phone-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </button>
            </a>
            <a href="mailto:" className="contact-section__mail-link no-link">
              <button className="contact-section__mail-button accent-button2 hover">
                Mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="contact-section__mail-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
        <div className="contact-section__decoration">
          <img src={CinemaPicture} className="contact-section__img" alt="" />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62618.36265556148!2d13.687302988713713!3d51.058130485956276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cfb617d41953%3A0x9d1f4c226896e8e2!2sUCI%20Elbe%20Park%20(Dresden)!5e1!3m2!1sde!2sde!4v1780160757172!5m2!1sde!2sde"
            className="about-us-section__iframe"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
  /* 
  
  */
}
