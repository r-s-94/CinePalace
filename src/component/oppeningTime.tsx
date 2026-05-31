import "./oppeningTime.scss";
import "../variables.scss";

export default function OppeningTime() {
  return (
    <section id="opening-time" className="oppening-time-section">
      <h2 className="oppening-time-section__headline">Öffnungszeiten</h2>
      <div className="oppening-time-section__table">
        <div className="oppening-time-section__days">
          <span className="oppening-time-section__day">Mo</span>
          <span className="oppening-time-section__day">Di</span>
          <span className="oppening-time-section__day">Mi</span>
          <span className="oppening-time-section__day">Do</span>
          <span className="oppening-time-section__day">Fr</span>
          <span className="oppening-time-section__day">Sa</span>
          <span className="oppening-time-section__day">So</span>
        </div>
        <div className="oppening-time-section__times">
          <span className="oppening-time-section__time">Geschlossen</span>
          <span className="oppening-time-section__time">15:00 - 22:00 Uhr</span>
          <span className="oppening-time-section__time">15:00 - 22:00 Uhr</span>
          <span className="oppening-time-section__time">15:00 - 22:00 Uhr</span>
          <span className="oppening-time-section__time">15:00 - 0:00 Uhr</span>
          <span className="oppening-time-section__time">15:00 - 0:00 Uhr</span>
          <span className="oppening-time-section__time">Geschlossen</span>
        </div>
      </div>
    </section>
  );
}
