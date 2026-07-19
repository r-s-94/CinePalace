import { useContext, useEffect, useState } from "react";
import { filmArray } from "../../movieDatabase";
import "../../index.scss";
import "../../variables.scss";
import "./threedSlider.scss";
import { useNavigate } from "react-router";
import { ThreeDSliderOptionsContent } from "../../threeDSliderOptionsContent";

export default function ThreeDSlider() {
  const [sliderDeg, setSliderDeg] = useState<number>(0);
  const [sliderIndex, setSliderIndex] = useState<number>(0);
  const navigation = useNavigate();
  const { threeDSliderOptions } = useContext(ThreeDSliderOptionsContent);

  useEffect(() => {
    if (threeDSliderOptions.currentSliderIndex !== -1) {
      setSliderIndex(threeDSliderOptions.currentSliderIndex);
      setSliderDeg(threeDSliderOptions.currentRotatePosition);
    }
  }, []);

  function moveSlider(direction: number) {
    if (direction === 1) {
      setSliderDeg(
        (prevSliderDeg) => prevSliderDeg - (360 / filmArray.length - 1),
      );

      if (sliderIndex >= filmArray.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex((prevSliderIndex) => prevSliderIndex + 1);
      }
    } else {
      setSliderDeg(
        (prevSliderDeg) => prevSliderDeg + (360 / filmArray.length - 1),
      );

      if (sliderIndex <= 0) {
        setSliderIndex(filmArray.length - 1);
      } else {
        setSliderIndex((prevSliderIndex) => prevSliderIndex - 1);
      }
    }
  }

  function toMoreMovieInfo(id: number) {
    //setCurrentSliderIndex(sliderIndex);
    navigation(`/movieInfo/${id}`);
  }

  return (
    <section id="slider" className="slider-section">
      <h2 className="slider-section__headline">Unsere Filme</h2>

      <div className="slider-section__buttons-and-slider">
        <button
          onClick={() => {
            moveSlider(-1);
          }}
          className="slider-section__prev-button hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="slider-section__prev-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div className="slider-section__canvas">
          <div
            style={{ transform: `rotateY(${sliderDeg}deg)` }}
            className="slider-section__slider"
          >
            {filmArray.map((filmObject, index) => {
              const currentIMG = sliderIndex === index;
              const nextIMG = sliderIndex + 1 === index;
              const prevIMG = sliderIndex - 1 === index;

              const lastIMG = sliderIndex + filmArray.length - 1 === index;
              const firstIMG = sliderIndex - (filmArray.length - 1) === index;

              return (
                <div
                  style={{
                    display: `${currentIMG || nextIMG || prevIMG || lastIMG || firstIMG ? "flex" : "none"}`,
                  }}
                  className={`slider-section__cart ${filmObject.styleClass} ${currentIMG ? "active-cart" : ""} ${prevIMG || nextIMG || lastIMG || firstIMG ? "prev-card next-card" : ""}`}
                >
                  <div className="slider-section__img-container">
                    <img
                      onClick={() => {
                        toMoreMovieInfo(filmObject.id);
                      }}
                      src={filmObject.pictureArray[0]}
                      className="slider-section__img hover"
                      alt=""
                    />
                  </div>

                  <p className="slider-section__category">
                    {filmObject.category}
                  </p>

                  <p className="slider-section__cart-headline">
                    {filmObject.title}
                  </p>

                  <p className="slider-section__short-text">
                    {filmObject.description.short}
                  </p>
                  <div className="slider-section__film-options">
                    <button
                      onClick={() => {
                        //e.stopPropagation();
                        toMoreMovieInfo(filmObject.id);
                      }}
                      className="slider-section__more-info-button accent-button2 hover"
                    >
                      mehr Infos
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="slider-section__more-info-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => {
                        navigation(`/bookingMovie/${filmObject.id}`);
                      }}
                      className="slider-section__buy-ticket-button primary-button hover"
                    >
                      Ticket buchen
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="slider-section__buy-ticket-icon"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            moveSlider(1);
          }}
          className="slider-section__next-button hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="slider-section__next-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );

  /*
  
  */
}
