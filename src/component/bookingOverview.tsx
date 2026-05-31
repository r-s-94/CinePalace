import { useContext, useEffect } from "react";
import "./bookingOverview.scss";
import "../variables.scss";
import Nav from "./nav";
import { bookingsContent, type Ticket } from "../bookingsContent";
import { useNavigate } from "react-router";
import { LOCAL_STORAGE_KEY } from "../App";
import Footer from "./footer";

export default function BookingOverview() {
  const { bookings, setBookings } = useContext(bookingsContent);
  const navigation = useNavigate();

  useEffect(() => {
    console.log(bookings);

    if (bookings.length > 0) {
      setLocalstorage();
    }
  }, [bookings]);

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

  function deleteBooking(id: number) {
    const filteredBookings = bookings.filter((booking) => {
      return booking.id !== Number(id);
    });

    setBookings([...filteredBookings]);
  }

  function setLocalstorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookings));
  }

  return (
    <section className="booking-overview-section">
      <Nav />
      <h2 className="booking-overview-section__headline">Buchungen</h2>

      {bookings.length > 0 && (
        <div className="booking-overview-section__booking-overview">
          <div className="booking-overview-section__headlines">
            <h3 className="booking-overview-section__overview-headline">
              Film
            </h3>
            <h3 className="booking-overview-section__overview-headline">
              Sitz(e)
            </h3>
            <h3 className="booking-overview-section__overview-headline">
              Snack(s)
            </h3>
            <h3 className="booking-overview-section__overview-headline">
              Zahlungart
            </h3>
            <h3 className="booking-overview-section__overview-headline">
              Betrag
            </h3>
            <h2 className="booking-overview-section__overview-headline">
              Aktionen
            </h2>
          </div>
          {bookings.map((movie) => (
            <div className="booking-overview-section__infos">
              <p className="booking-overview-section__info">{movie.title}</p>
              <div className="booking-movie-section__seats">
                {movie.seats.length > 1 ? (
                  <details className="booking-movie-section__detail hover">
                    {movie.seats.map((seat) => (
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
                ) : movie.seats.length === 1 ? (
                  <div className="booking-movie-section__seat-info">
                    <p className="booking-movie-section__hall-info">
                      Saal:{" "}
                      {movie.seats[0].hall !== 0 ? movie.seats[0].hall : ""}
                    </p>
                    <p className="booking-movie-section__row">
                      Reihe:{" "}
                      {movie.seats[0].row !== "" ? movie.seats[0].row : ""}
                    </p>
                    <p className="booking-movie-section__seat">
                      Platz:{" "}
                      {movie.seats[0].seat !== 0 ? movie.seats[0].seat : ""}
                      {movie.seats[0].seat2 !== 0 ? " & " : null}
                      {movie.seats[0].seat2 !== 0 ? movie.seats[0].seat2 : ""}
                    </p>
                    <p>
                      Preis:{" "}
                      {movie.seats[0].price.toLocaleString("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="booking-movie-section__snacks-and-drinks-overview">
                {movie.snackPackage.length > 1 ? (
                  <div className="booking-movie-section__snack-packages-overview">
                    <p className="booking-movie-section__snack-packages-headline">
                      Snack-Packete
                    </p>
                    <details className="booking-movie-section__detail hover">
                      {movie.snackPackage.map((snack) => (
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
                ) : movie.snackPackage.length === 1 ? (
                  <div className="booking-movie-section__snack-package-overview">
                    <p className="booking-movie-section__snack-package-headline">
                      Snack-Packet
                    </p>
                    <div className="booking-movie-section__snack-package">
                      <p>{movie.snackPackage[0].title}</p>
                      <p>
                        {movie.snackPackage[0].price.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </p>
                    </div>
                  </div>
                ) : null}
                {movie.singleSnack.length > 1 ? (
                  <div className="booking-movie-section__single-snacks-overview">
                    <p className="booking-movie-section__single-snacks-headline">
                      Single-Snacks
                    </p>
                    <details className="booking-movie-section__detail hover">
                      {movie.singleSnack.map((snack) => (
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
                ) : movie.singleSnack.length === 1 ? (
                  <div className="booking-movie-section__single-snack-overview">
                    <p className="booking-movie-section__single-snack-headline">
                      Single-Snack
                    </p>
                    <div className="booking-movie-section__single-snack">
                      <p className="booking-movie-section__single-snack-title">
                        {movie.singleSnack[0].title}
                      </p>
                      <p className="booking-movie-section__size">
                        {movie.singleSnack[0].size.toLocaleUpperCase()}{" "}
                        {movie.singleSnack[0].quantity}x (
                        {movie.singleSnack[0].price.toLocaleString("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        })}
                        )
                      </p>

                      <p className="booking-movie-section__single-snack-price">
                        Gesamtpreis:{" "}
                        {Number(
                          movie.singleSnack[0].quantity *
                            movie.singleSnack[0].price,
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
                {movie.payment}
              </div>
              <div className="booking-movie-section__calculate">
                {calculateBooking(movie) !== 0
                  ? calculateBooking(movie).toLocaleString("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    })
                  : null}
              </div>
              <div className="booking-overview-section__buttons">
                <button
                  onClick={() => {
                    navigation(`/editBooking/${movie.id}`);
                  }}
                  className="booking-overview-section__edit-button button secondary-button"
                >
                  Buchung bearbeiten
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="booking-overview-section__edit-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    deleteBooking(movie.id);
                  }}
                  className="booking-overview-section__delete-button button delete-button"
                >
                  Buchung löschen{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="booking-overview-section__delete-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </section>
  );
}
