import "./paymentCard.scss";
import "../../variables.scss";

export default function PaymentCard({
  payment,
  title,
  currentPayment,
  img,
}: {
  payment: () => void;
  title: string;
  currentPayment: string;
  img: string;
}) {
  return (
    <div
      onClick={payment}
      className={`payment-card hover ${
        currentPayment === title ? "active-payment" : ""
      }`}
    >
      <img src={img} className="payment-card__img" alt="" />
    </div>
  );
}
