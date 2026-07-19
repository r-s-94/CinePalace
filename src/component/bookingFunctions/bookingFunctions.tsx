import type { Ticket } from "../../bookingsContent";

export function calculateBooking(booking: Ticket) {
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

  totalSum = seatCalculation + snackPackageCalculation + singleSnackCalculation;

  return totalSum;
}
