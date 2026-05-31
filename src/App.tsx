import "./App.scss";
import MovieDetail from "./component/movieDetail";
import Overview from "./component/overview";
import BookingMovie from "./component/bookingMovie";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { currentSliderIndexContent } from "./component/currentSliderIndexContent";
import { useEffect, useState } from "react";
import type { Ticket } from "./bookingsContent";
import { bookingsContent } from "./bookingsContent";
import FinishBooking from "./component/finishBooking";
import BookingOverview from "./component/bookingOverview";
import EditBooking from "./component/editBooking";
import Imprint from "./component/imprint";
import DataProtection from "./component/dataProtection";
export const LOCAL_STORAGE_KEY = "Bookings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Overview />,
    },
    {
      path: "movieInfo/:id",
      element: <MovieDetail />,
    },
    {
      path: "bookingMovie/:id",
      element: <BookingMovie />,
    },
    {
      path: "finishBooking",
      element: <FinishBooking />,
    },
    {
      path: "bookingOverview",
      element: <BookingOverview />,
    },
    {
      path: "editBooking/:id",
      element: <EditBooking />,
    },
    {
      path: "imprint",
      element: <Imprint />,
    },
    {
      path: "dataProtection",
      element: <DataProtection />,
    },
  ]);

  const [currentSliderIndex, setCurrentSliderIndex] = useState<number>(0);
  const [bookings, setBookings] = useState<Ticket[]>([]);

  /*  Diese Beispiel zeigt die Oder-Variante eines useState-Hooks + createContext mit Update-Funktion für einen useState-Hook. 
      Es zeigt die Typisierung einer Funktion die sehr Verschachtelt ist. Die Arrow-Function ist eine normale Arrow-Function
      die 2 Parameter zulässt, der eine Wert ist der Wert der aktualisiert werden kann und der zweite Werte um in die Funktion
      eine um sich denn vorherigen Wert zu holen. der zweite mögliche Wert ist eine verschachtelte runde Klammer in der die
      erste runde Klammer den vorherigen Wert mit Datentype holt und weiter gibt mit Typisierung und der nächste Schritt ist
      das Übergeben des Datentyps als Wert an die herkömliche Arrow-Function.

      (value: number | ((prevValue: number) => number)) => void;
  */

  useEffect(() => {
    const loadBookings = () => {
      const getBookings = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (getBookings && getBookings?.length !== 0) {
        setBookings([...JSON.parse(getBookings)]);
      }
    };

    loadBookings();
  }, []);

  useEffect(() => {
    console.log(bookings);
  }, [bookings]);

  return (
    <>
      <currentSliderIndexContent.Provider
        value={{ currentSliderIndex, setCurrentSliderIndex }}
      >
        <bookingsContent.Provider value={{ bookings, setBookings }}>
          <RouterProvider router={router} />
        </bookingsContent.Provider>
      </currentSliderIndexContent.Provider>
    </>
  );
}

export default App;
