import "./App.scss";
import { RouterProvider } from "react-router-dom";
import {
  ThreeDSliderOptionsContent,
  type ThreeDSliderOptions,
} from "./threeDSliderOptionsContent";
import { useEffect, useState } from "react";
import type { Ticket } from "./bookingsContent";
import { BookingsContent } from "./bookingsContent";
import { LOCAL_STORAGE_KEY } from "./storatgeKey";
import { router } from "./routs";

function App() {
  const [threeDSliderOptions, setThreeDSliderOptions] =
    useState<ThreeDSliderOptions>({
      currentSliderIndex: -1,
      currentRotatePosition: 0,
    });
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
      <ThreeDSliderOptionsContent.Provider
        value={{ threeDSliderOptions, setThreeDSliderOptions }}
      >
        <BookingsContent.Provider value={{ bookings, setBookings }}>
          <RouterProvider router={router} />
        </BookingsContent.Provider>
      </ThreeDSliderOptionsContent.Provider>
    </>
  );
}

export default App;
