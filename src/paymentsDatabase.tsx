import GooglePay from "./assets/google-pay.png";
import AmazonPay from "./assets/amazon-pay.png";
import Maestro from "./assets/Maestro.png";
import MasterCard from "./assets/MasterCard.png";
import PayPal from "./assets/paypal-3384015_1920.png";
import Visa from "./assets/visa.png";
import Klarna from "./assets/Klarna.png";

interface Payment {
  title: string;
  img: string;
}

export const payments: Payment[] = [
  { title: "GooglePay", img: GooglePay },
  { title: "AmazonPay", img: AmazonPay },
  { title: "Maestro", img: Maestro },
  { title: "MasterCard", img: MasterCard },
  { title: "PayPal", img: PayPal },
  { title: "Visa", img: Visa },
  { title: "Klarna", img: Klarna },
];
