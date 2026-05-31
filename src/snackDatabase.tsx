import PopcornIMG from "./assets/Popcorn.jpg";
import ChildPopcornIMG from "./assets/Child-Popcorn.jpg";
import NachoIMG from "./assets/Nachos.jpg";
import ChipsIMG from "./assets/Chips.jpg";
import SoftdrinkIMG from "./assets/Softdrink.jpg";
import Cola from "./assets/Coca Cola.jpg";
import Pepsi from "./assets/Pepsi.jpg";
import Fanta from "./assets/Fanta.jpg";
import Sprite from "./assets/Sprite.jpg";

interface SnackAbo {
  id: number;
  title: string;
  price: number;
  description: string;
  img: string[];
}

export interface SingleSnack {
  id: number;
  title: string;
  img: string;
  offers: Offers[];
}

export interface Offers {
  s: number;
  m: number;
  l: number;
  xl: number;
}

export const snackPackage: SnackAbo[] = [
  {
    id: 1,
    title: "Snackpaket S",
    price: 5.9,
    description: "1 Snack + 1 Drink",
    img: [PopcornIMG, SoftdrinkIMG],
  },
  {
    id: 2,
    title: "Snackpaket M",
    price: 10.9,
    description: `1 mittlerer Snack + Drink`,
    img: [PopcornIMG, NachoIMG, SoftdrinkIMG],
  },
  {
    id: 3,
    title: "Snackpaket L",
    price: 15.9,
    description: `2 Snacks + Drink`,
    img: [PopcornIMG, NachoIMG, SoftdrinkIMG],
  },
  {
    id: 4,
    title: "Snackpaket XL",
    price: 20.9,
    description: `3 Snacks + Drink`,
    img: [PopcornIMG, NachoIMG, ChipsIMG, SoftdrinkIMG],
  },
  {
    id: 5,
    title: "Familienpaket",
    price: 15.9,
    description: `4 Snacks + Drink`,
    img: [PopcornIMG, ChildPopcornIMG, NachoIMG, ChipsIMG, SoftdrinkIMG],
  },
];

export const singleSnacks: SingleSnack[] = [
  {
    id: 1,
    title: "Popcorn",
    img: PopcornIMG,
    offers: [{ s: 4, m: 6.5, l: 7.5, xl: 8.5 }],
  },
  {
    id: 2,
    title: "Nachos",
    img: NachoIMG,
    offers: [{ s: 4.5, m: 6.5, l: 8.5, xl: 10 }],
  },
  {
    id: 3,
    title: "Chips",
    img: ChipsIMG,
    offers: [{ s: 2, m: 4, l: 6, xl: 8 }],
  },
  {
    id: 4,
    title: "Kinder - Popcorn",
    img: ChildPopcornIMG,
    offers: [{ s: 1.5, m: 2.5, l: 4, xl: 6.5 }],
  },
  {
    id: 5,
    title: "Coca Cola",
    img: Cola,
    offers: [{ s: 2.9, m: 3.9, l: 5.9, xl: 7.9 }],
  },
  {
    id: 6,
    title: "Pepsi",
    img: Pepsi,
    offers: [{ s: 2.5, m: 3.5, l: 5.5, xl: 6.5 }],
  },
  {
    id: 7,
    title: "Fanta",
    img: Fanta,
    offers: [{ s: 2, m: 3, l: 5, xl: 7 }],
  },
  {
    id: 8,
    title: "Sprite",
    img: Sprite,
    offers: [{ s: 2.5, m: 3.5, l: 5.5, xl: 6.5 }],
  },
];
