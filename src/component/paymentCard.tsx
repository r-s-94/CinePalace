import "./paymentCard.scss";
import "../variables.scss";
import type { Ticket } from "../bookingsContent";

export default function PaymentCard({
  payment,
  title,
  status,
  img,
  booking,
}: {
  payment: () => void;
  title: string;
  status: string;
  img: string;
  booking: Ticket;
}) {
  return (
    <div className="payment-card">
      <input
        type="radio"
        onChange={payment}
        checked={title === status || booking.payment === title}
        className="payment-card__radio hover"
        name=""
        id=""
      />
      <img src={img} className="payment-card__img" alt="" />
    </div>
  );
}
