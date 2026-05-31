import { createContext } from "react";

export interface Bookings {
  bookings: Ticket[];
  setBookings: (booking: Ticket[]) => void;
}

export interface Ticket {
  id: number;
  title: string;
  seats: Seat[];
  snackPackage: SnackPackage[];
  singleSnack: SingleSnackBooking[];
  payment: string;
}

export interface Seat {
  id: number;
  hall: number;
  row: string;
  seat: number;
  seat2: number;
  price: number;
}

export interface SnackPackage {
  id: number;
  title: string;
  price: number;
  check: boolean;
}

export interface SingleSnackBooking {
  id: number;
  title: string;
  size: string;
  price: number;
  quantity: number;
}

export const bookingsContent = createContext<Bookings>({
  bookings: [],
  setBookings: () => {},
});
