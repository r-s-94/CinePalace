import "../../variables.scss";
import "./movieDetail.scss";
import { useNavigate, useParams } from "react-router";
import Nav from "../nav/nav";
import { useContext, useEffect, useState } from "react";
import { filmArray, type Film } from "../../movieDatabase";
import Footer from "../footer/footer";
import { ThreeDSliderOptionsContent } from "../../threeDSliderOptionsContent";

export default function MovieDetail() {
  const { id } = useParams();
  const navigation = useNavigate();
  const [currentMovie, setCurrentMovie] = useState<Film>({
    id: 0,
    title: "",
    category: "",
    description: {
      short: "",
      generally: "",
    },
    pictureArray: [],
    hall: 0,
    index: -1,
    rotatePosition: 0,
    styleClass: "",
  });
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const { threeDSliderOptions, setThreeDSliderOptions } = useContext(
    ThreeDSliderOptionsContent,
  );

  useEffect(() => {
    const findMovie = () => {
      const selectedMovie = filmArray.find((movie) => {
        return movie.id === Number(id);
      });

      setCurrentMovie({
        ...currentMovie,
        id: selectedMovie!.id,
        title: selectedMovie!.title,
        category: selectedMovie!.category,
        description: selectedMovie!.description,
        pictureArray: [...selectedMovie!.pictureArray],
        hall: selectedMovie!.hall,
      });

      setThreeDSliderOptions({
        ...threeDSliderOptions,
        currentSliderIndex: selectedMovie!.index,
        currentRotatePosition: selectedMovie!.rotatePosition,
      });
    };

    findMovie();
  }, []);

  function backToOverview() {
    setCurrentMovie({
      ...currentMovie,
      id: 0,
      title: "",
      category: "",
      description: {
        short: "",
        generally: "",
      },
      pictureArray: [],
      hall: 0,
      styleClass: "",
    });
    navigation(-1);
  }

  function moveSlider(direction: number) {
    if (direction === 1) {
      if (sliderIndex >= currentMovie.pictureArray.length - 1) {
        setSliderIndex(0);
      } else {
        setSliderIndex((prevSliderIndex) => prevSliderIndex + 1);
      }
    } else {
      if (sliderIndex === 0) {
        setSliderIndex(currentMovie.pictureArray.length - 1);
      } else {
        setSliderIndex((prevSliderIndex) => prevSliderIndex - 1);
      }
    }
  }

  return (
    <section className="movie-detail-section">
      <Nav />
      <button
        onClick={backToOverview}
        className="movie-detail-section__back-button button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="movie-detail-section__back-icon back-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="movie-detail-section__headline-container">
        <h2 className="movie-detail-section__headline">{currentMovie.title}</h2>

        <p className="movie-detail-section__category">
          {currentMovie.category}
        </p>

        <p className="movie-detail-section__hall">Saal: {currentMovie.hall}</p>
      </div>

      <div className="movie-detail-section__main-infos">
        <div className="movie-detail-section__main-slider">
          <button
            onClick={() => {
              moveSlider(-1);
            }}
            className="movie-detail-section__prev-button secondary-button hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="movie-detail-section__prev-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div className="movie-detail-section__canvas">
            {currentMovie.pictureArray.map((img, index) => (
              <img
                src={img}
                className={`movie-detail-section__img ${sliderIndex === index ? "active-img" : "inactive-img"}`}
                alt=""
              />
            ))}
          </div>
          <button
            onClick={() => {
              moveSlider(1);
            }}
            className="movie-detail-section__next-button secondary-button hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="movie-detail-section__next-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="movie-detail-section__infos">
          <p className="movie-detail-section__text">
            {currentMovie.description.generally}
          </p>

          <button
            onClick={() => {
              navigation(`/bookingMovie/${currentMovie.id}`);
            }}
            className="movie-detail-section__buy-ticket-button primary-button hover"
          >
            Ticket buchen
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="movie-detail-section__buy-ticket-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
              />
            </svg>
          </button>
        </div>{" "}
      </div>
      <Footer />
    </section>
  );
}
