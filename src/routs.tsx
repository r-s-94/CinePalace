import MovieDetail from "./component/movieDetail/movieDetail";
import Overview from "./component/overview/overview";
import BookingMovie from "./component/bookingMovie/bookingMovie";
import { createBrowserRouter } from "react-router-dom";
import FinishBooking from "./component/finishBooking/finishBooking";
import BookingOverview from "./component/bookingOverview/bookingOverview";
import EditBooking from "./component/editBooking/editBooking";
import Imprint from "./component/imprint/imprint";
import DataProtection from "./component/dataProtection/dataProtection";

export const router = createBrowserRouter(
  [
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
  ],
  {
    basename: "/CinePalace/",
  },
);
