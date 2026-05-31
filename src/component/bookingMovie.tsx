import "./bookingMovie.scss";
import "../variables.scss";
import { useNavigate, useParams } from "react-router";
import CinemaHall from "./cinemaHall";
import { useContext, useEffect, useState } from "react";
import { filmArray, type Film } from "../movieDatabase";
import PopCorn from "../assets/popcorn.png";
import Drink from "../assets/milk-shake.png";
import SingleSnack from "./singleSnack";
//import Drink2 from "../assets/shake.png";
import PaymentCard from "./paymentCard";
import { type Hall } from "../cinemaHallDatabase";
import { singleSnacks, snackPackage } from "../snackDatabase";
import { payments } from "../paymentsDatabase";
import {
  bookingsContent,
  type SingleSnackBooking,
  type Ticket,
} from "../bookingsContent";
import { LOCAL_STORAGE_KEY } from "../App";
import BackToTop from "./backToTop";
export type RowKey = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";

export default function BookingMovie() {
  type SinglesnackOffer = "s" | "m" | "l" | "xl";

  const { id } = useParams();
  const navigation = useNavigate();
  const [booking, setBooking] = useState<Ticket>({
    id: 0,
    title: "",
    seats: [],
    snackPackage: [],
    singleSnack: [],
    payment: "",
  });
  const { bookings, setBookings } = useContext(bookingsContent);

  /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  */

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
    styleClass: "",
  });

  const [showSnacksDrinks, setShowSnacksDrinks] = useState<boolean>(false);
  const [paymentsStatus, setPaymentsStatus] = useState<string>("");

  useEffect(() => {
    const loadMovieinfo = () => {
      const selectedMovie = filmArray.find((movie) => {
        return movie.id === Number(id);
      });

      setCurrentMovie({
        ...currentMovie,
        id: selectedMovie!.id,
        title: selectedMovie!.title,
        hall: selectedMovie!.hall,
      });

      setBooking({
        ...booking,
        id: selectedMovie!.id,
        title: selectedMovie!.title,
      });
    };

    loadMovieinfo();

    return () => {
      setBooking({
        ...booking,
        id: 0,
        title: "",
        seats: [],
        snackPackage: [],
        singleSnack: [],
        payment: "",
      });
    };
  }, []);

  useEffect(() => {
    console.log(booking);
  }, [booking]);

  useEffect(() => {
    console.log(bookings);
    if (bookings.length > 0) {
      setLocalstorage();
    }
  }, [bookings]);

  function chooseSeat(id: number, hall: Hall, row: string) {
    //console.log(id, hall);

    const selectedSeat = booking.seats.find((seat) => {
      return seat.id === id;
    });

    /*const findSeat = hall[currentRow].find((seat) => {
      return seat.id === id;
    });*/

    if (selectedSeat?.id) {
      const filteredSeat = booking.seats.filter((seat) => {
        return seat.id !== selectedSeat.id;
      });

      setBooking({ ...booking, seats: [...filteredSeat] });
    } else {
      const currentRow = row.toLocaleLowerCase() as RowKey;
      const findSeat = hall[currentRow].find((seat) => {
        return seat.id === id;
      });

      setBooking({ ...booking, seats: [...booking.seats, findSeat!] });
    }

    //console.log(selectedSeat);
  }

  function resetSnack(showSnack: boolean) {
    if (showSnack) {
      setBooking({
        ...booking,
        snackPackage: [],
        singleSnack: [],
      });
      setShowSnacksDrinks(!showSnacksDrinks);
    } else {
      setShowSnacksDrinks(!showSnacksDrinks);
    }
  }

  function addSnackPackage(id: number) {
    const selectedSnackpage = booking.snackPackage.find((snack) => {
      return snack.id === id;
    });

    if (selectedSnackpage) {
      const filteredSnackPackage = booking.snackPackage.filter((snack) => {
        return snack.id !== selectedSnackpage.id;
      });

      setBooking({ ...booking, snackPackage: [...filteredSnackPackage] });
    } else {
      const findSnackpage = snackPackage.find((snack) => {
        return snack.id === id;
      });

      setBooking({
        ...booking,
        snackPackage: [
          ...booking.snackPackage,
          {
            id: findSnackpage!.id,
            title: findSnackpage!.title,
            price: findSnackpage!.price,
            check: true,
          },
        ],
      });
    }
  }

  function addSingleSnack(singleSnackInfo: string) {
    const currentSingleSnackArray = booking.singleSnack;
    //console.log(singleSnackInfo);
    const id = Number(singleSnackInfo.slice(0, 1));
    /*const s = singleSnackInfo.slice(1, 2);
    const m = singleSnackInfo.slice(1, 2);
    const l = singleSnackInfo.slice(1, 2);
    const xl = singleSnackInfo.slice(1, 4);*/
    //const oneLetter = singleSnackInfo.slice(1, 2);
    const twoLetter = singleSnackInfo.slice(1, 3);
    const allOptions = singleSnackInfo.slice(1, 4);

    const selectedSinglesnack = booking.singleSnack.find((snack) => {
      return snack.id === id;
    });

    if (selectedSinglesnack) {
      if (allOptions !== "...") {
        const findSinglesnack = singleSnacks.find((snack) => {
          return snack.id === id;
        });

        const findOffer =
          findSinglesnack!.offers[0][allOptions.trimEnd() as SinglesnackOffer];

        const findSinglesnackIndex = booking.singleSnack.findIndex((snack) => {
          return snack.id === id;
        });

        const updateSingelSnack: SingleSnackBooking = {
          id: selectedSinglesnack!.id,
          title: selectedSinglesnack!.title,
          size: twoLetter,
          price: findOffer,
          quantity: selectedSinglesnack.quantity,
        };

        booking.singleSnack.splice(findSinglesnackIndex, 1, updateSingelSnack);

        setBooking({
          ...booking,
          singleSnack: [...currentSingleSnackArray],
        });
      } else {
        const filteredSinglesnack = booking.singleSnack.filter((snack) => {
          return snack.id !== selectedSinglesnack.id;
        });

        //console.log(filteredSinglesnack);

        setBooking({
          ...booking,
          singleSnack: [...filteredSinglesnack],
        });
      }
    } else {
      const findSinglesnack = singleSnacks.find((snack) => {
        return snack.id === id;
      });

      const offer =
        findSinglesnack!.offers[0][allOptions.trimEnd() as SinglesnackOffer];

      if (allOptions !== "...") {
        setBooking({
          ...booking,
          singleSnack: [
            ...booking.singleSnack,
            {
              id: findSinglesnack!.id,
              title: findSinglesnack!.title,
              size: twoLetter,
              price: offer,
              quantity: 1,
            },
          ],
        });
      }
    }

    /*if (s === "s" || m === "m" || l === "l" || xl === "xl") {
      console.log("Check");
    } else {
      console.log("Check2");
    }*/
  }

  function updateQuantity(id: number, quantity: number) {
    console.log(id);

    const currentSingleSnackArray = booking.singleSnack;

    const findSinglesnack = booking.singleSnack.find((snack) => {
      return snack.id === id;
    });

    const findSinglesnackIndex = booking.singleSnack.findIndex((snack) => {
      return snack.id === id;
    });

    const updateSingelSnack: SingleSnackBooking = {
      id: findSinglesnack!.id,
      title: findSinglesnack!.title,
      size: findSinglesnack!.size,
      price: findSinglesnack!.price,
      quantity: quantity,
    };

    currentSingleSnackArray.splice(findSinglesnackIndex, 1, updateSingelSnack);

    setBooking({
      ...booking,
      singleSnack: [...currentSingleSnackArray],
    });
  }

  function addPayment(type: string) {
    setBooking({ ...booking, payment: type });
    setPaymentsStatus(type);
  }

  function calculateBooking(booking: Ticket) {
    let totalSum = 0;

    const seatCalculation = booking.seats.reduce(
      (sum, seat) => sum + seat.price,
      0,
    );

    const snackPackageCalculation = booking.snackPackage.reduce(
      (sum, snackPackage) => sum + snackPackage.price,
      0,
    );

    const singleSnackCalculation = booking.singleSnack.reduce(
      (sum, singleSnack) => sum + singleSnack.price * singleSnack.quantity,
      0,
    );

    totalSum =
      seatCalculation + snackPackageCalculation + singleSnackCalculation;

    return totalSum;
  }

  function saveBooking() {
    const currentBookings = bookings;

    const findBooking = bookings.find((booking) => {
      return booking.id === Number(id);
    });

    if (findBooking) {
      const findBookinIndex = bookings.findIndex((booking) => {
        return booking.id === findBooking!.id;
      });

      currentBookings.splice(findBookinIndex, 1, booking);

      setBookings([...currentBookings]);
    } else {
      setBookings([...bookings, booking]);
    }

    setBooking({
      ...booking,
      id: 0,
      title: "",
      seats: [],
      snackPackage: [],
      singleSnack: [],
      payment: "",
    });

    navigation("/finishBooking");
  }

  function setLocalstorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookings));
  }

  return (
    <section className="booking-movie-section">
      <button
        onClick={() => {
          navigation(-1);
        }}
        className="booking-movie-section__back-button button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="booking-movie-section__back-icon back-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <h2 className="booking-movie-section__headline">Ticket kaufen</h2>

      <div className="booking-movie-section__booking-form">
        <div className="booking-movie-section__generally-info">
          <h3 className="booking-movie-section__generally-info-headline">
            Allgemeine Infos
          </h3>
          <p className="booking-movie-section__title">{currentMovie.title}</p>
          <p className="booking-movie-section__hall">
            Saal: {currentMovie.hall}
          </p>
        </div>

        <CinemaHall
          hall={currentMovie.hall}
          booking={booking}
          chooseSeat={chooseSeat}
        />

        <div className="booking-movie-section__snacks-and-drinks">
          <h3 className="booking-movie-section__snacks-and-drinks-headline">
            Snacks & Drinks
          </h3>
          <div className="booking-movie-section__snacks-and-drinks-note">
            <img
              src={PopCorn}
              className="booking-movie-section__snack-icon"
              alt=""
            />
            <img
              src={Drink}
              className="booking-movie-section__drink-icon"
              alt=""
            />
            <input
              type="checkbox"
              onChange={() => {
                resetSnack(showSnacksDrinks);
              }}
              className="hover"
              name=""
              id=""
            />
            Online buchen
          </div>
          {showSnacksDrinks && (
            <div className="booking-movie-section__choose-snack-and-drink">
              <div className="booking-movie-section__abo-snack-package">
                {snackPackage.map((snack) => (
                  <div
                    onClick={() => {
                      addSnackPackage(snack.id);
                    }}
                    className="booking-movie-section__snack-cart"
                  >
                    <div className="booking-movie-section__main-description">
                      {" "}
                      <h3 className="booking-movie-section__title-line">
                        {snack.title}
                      </h3>
                      <p className="booking-movie-section__description">
                        {snack.description}
                      </p>
                      <span className="booking-movie-section__price">
                        {snack.price.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </span>
                      <input
                        type="checkbox"
                        checked={booking.snackPackage.some(
                          (snackPackage) => snackPackage.id === snack.id,
                        )}
                        className="hover"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="booking-movie-section__img-container">
                      {snack.img.map((snackIMG) => (
                        <img
                          src={snackIMG}
                          className="booking-movie-section__snack-img"
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="booking-movie-section__border"></div>

              <div className="booking-movie-section__single-snacks">
                {singleSnacks.map((snack) => (
                  <SingleSnack
                    headline={snack.title}
                    id={snack.id}
                    addSingleSnack={addSingleSnack}
                    img={snack.img}
                    updateQuantity={updateQuantity}
                    booking={booking}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="booking-movie-section__payment">
            <h3 className="booking-movie-section__payment-headline">
              Online - Zahlung
            </h3>

            <div className="booking-movie-section__payments">
              {payments.map((payment) => (
                <PaymentCard
                  payment={() => {
                    addPayment(payment.title);
                  }}
                  title={payment.title}
                  status={paymentsStatus}
                  img={payment.img}
                  booking={booking}
                />
              ))}
            </div>
          </div>

          <div className="booking-movie-section__booking-overview">
            <div className="booking-movie-section__headlines">
              <div className="booking-movie-section__overview-headline">
                Film
              </div>
              <div className="booking-movie-section__overview-headline">
                Sitz(e)
              </div>
              <div className="booking-movie-section__overview-headline">
                Snack(s)
              </div>
              <div className="booking-movie-section__overview-headline">
                Zahlungsart
              </div>
              <div className="booking-movie-section__overview-headline">
                Betrag
              </div>
            </div>
            <div className="booking-movie-section__infos">
              <div className="booking-movie-section__info">{booking.title}</div>
              <div className="booking-movie-section__seats">
                {booking.seats.length > 1 ? (
                  <details className="booking-movie-section__detail hover">
                    {booking.seats.map((seat) => (
                      <div className="booking-movie-section__seat-info">
                        <p className="booking-movie-section__">
                          Saal: {seat.hall}
                        </p>
                        <p className="booking-movie-section__row">
                          Reihe: {seat.row}
                        </p>
                        <p className="booking-movie-section__seat">
                          Platz: {seat.seat}
                          {"  "}
                          {seat.seat2 !== 0 ? "& " : null}
                          {seat.seat2 !== 0 ? seat.seat2 : ""}
                        </p>
                        <p>
                          Preis:{" "}
                          {seat.price.toLocaleString("de-DE", {
                            style: "currency",
                            currency: "EUR",
                          })}
                        </p>
                      </div>
                    ))}
                  </details>
                ) : booking.seats.length === 1 ? (
                  <div className="booking-movie-section__seat-info">
                    <p className="booking-movie-section__hall-info">
                      Saal:{" "}
                      {booking.seats[0].hall !== 0 ? booking.seats[0].hall : ""}
                    </p>
                    <p className="booking-movie-section__row">
                      Reihe:{" "}
                      {booking.seats[0].row !== "" ? booking.seats[0].row : ""}
                    </p>
                    <p className="booking-movie-section__seat">
                      Platz:{" "}
                      {booking.seats[0].seat !== 0 ? booking.seats[0].seat : ""}
                      {booking.seats[0].seat2 !== 0 ? " & " : null}
                      {booking.seats[0].seat2 !== 0
                        ? booking.seats[0].seat2
                        : ""}
                    </p>
                    <p>
                      Preis:{" "}
                      {booking.seats[0].price.toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="booking-movie-section__snacks-and-drinks-overview">
                {booking.snackPackage.length > 1 ? (
                  <div className="booking-movie-section__snack-packages-overview">
                    <p className="booking-movie-section__snack-packages-headline">
                      Snack-Packete
                    </p>
                    <details className="booking-movie-section__detail hover">
                      {booking.snackPackage.map((snack) => (
                        <div className="booking-movie-section__snack-package">
                          <p>{snack.title}</p>
                          <p>
                            {" "}
                            {snack.price.toLocaleString("de-DE", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          </p>
                        </div>
                      ))}
                    </details>
                  </div>
                ) : booking.snackPackage.length === 1 ? (
                  <div className="booking-movie-section__snack-package-overview">
                    <p className="booking-movie-section__snack-package-headline">
                      Snack-Packet
                    </p>
                    <div className="booking-movie-section__snack-package">
                      <p>{booking.snackPackage[0].title}</p>
                      <p>
                        {booking.snackPackage[0].price.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </p>
                    </div>
                  </div>
                ) : null}
                {booking.singleSnack.length > 1 ? (
                  <div className="booking-movie-section__single-snacks-overview">
                    <p className="booking-movie-section__single-snacks-headline">
                      Single-Snacks
                    </p>
                    <details className="booking-movie-section__detail hover">
                      {booking.singleSnack.map((snack) => (
                        <div className="booking-movie-section__single-snack">
                          <p className="booking-movie-section__single-snack-title">
                            {snack.title}
                          </p>
                          <p className="booking-movie-section__size">
                            {snack.size.toLocaleUpperCase()} {snack.quantity}x (
                            {snack.price.toLocaleString("de-DE", {
                              style: "currency",
                              currency: "EUR",
                            })}
                            )
                          </p>

                          <p className="booking-movie-section__single-snack-price">
                            Gesamtpreis:{" "}
                            {Number(
                              snack.quantity * snack.price,
                            ).toLocaleString("de-DE", {
                              style: "currency",
                              currency: "EUR",
                            })}
                          </p>
                        </div>
                      ))}
                    </details>
                  </div>
                ) : booking.singleSnack.length === 1 ? (
                  <div className="booking-movie-section__single-snack-overview">
                    <p className="booking-movie-section__single-snack-headline">
                      Single-Snack
                    </p>
                    <div className="booking-movie-section__single-snack">
                      <p className="booking-movie-section__single-snack-title">
                        {booking.singleSnack[0].title}
                      </p>
                      <p className="booking-movie-section__size">
                        {booking.singleSnack[0].size.toLocaleUpperCase()}{" "}
                        {booking.singleSnack[0].quantity}x (
                        {booking.singleSnack[0].price.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                        )
                      </p>

                      <p className="booking-movie-section__single-snack-price">
                        Gesamtpreis:{" "}
                        {Number(
                          booking.singleSnack[0].quantity *
                            booking.singleSnack[0].price,
                        ).toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="booking-movie-section__info-payment">
                {booking.payment}
              </div>
              <div className="booking-movie-section__calculate">
                {calculateBooking(booking) !== 0
                  ? calculateBooking(booking).toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    })
                  : null}
              </div>
            </div>
          </div>

          <button
            onClick={saveBooking}
            disabled={!(booking.seats.length > 0 && booking.payment !== "")}
            className={`booking-movie-section__buy-ticket-button button ${booking.seats.length > 0 && booking.payment !== "" ? "primary-button hover" : "disable-button no-hover"}`}
          >
            Ticket kaufen
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="booking-movie-section__buy-ticket-icon"
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

      <BackToTop />
    </section>
  );

  /*
  
  */
}
