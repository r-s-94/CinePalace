import "./singleSnack.scss";
import "../../variables.scss";
import ControlQuantity from "../controlQuantity/controlQuantity";
import { useEffect, useState } from "react";
import type { Ticket } from "../../bookingsContent";

export default function SingleSnack({
  headline,
  id,
  addSingleSnack,
  img,
  updateQuantity,
  booking,
}: {
  headline: string;
  id: number;
  addSingleSnack: (value: string) => void;
  img: string;
  updateQuantity: (id: number, quantity: number) => void;
  booking: Ticket;
}) {
  const [currentActive, setCurrentActive] = useState<boolean>(false);
  const [snackQuantity, setSnackQuantity] = useState<number>(1);

  useEffect(() => {
    const checkActiveSinglesnack = () => {
      const findSnack = booking.singleSnack.find((snack) => snack.id === id);

      if (findSnack) {
        setCurrentActive(true);
        setSnackQuantity(findSnack.quantity);
      } else {
        setCurrentActive(false);
        setSnackQuantity(1);
      }
    };

    checkActiveSinglesnack();
  }, []);

  function checkSinglesnack(id: number) {
    type Snack = number | string;
    let snack: Snack = "";

    const findSnack = booking.singleSnack.find((snack) => snack.id === id);

    findSnack !== undefined
      ? (snack = findSnack!.id + findSnack!.size)
      : (snack = 0);

    return snack;
  }

  return (
    <div className="single-snack">
      <h3 className="single-snack__headline">{headline}</h3>
      <img src={img} className="single-snack__img" alt="" />
      <select
        name=""
        onChange={(event) => {
          //const oneLetter = event.target.value.slice(1, 2);
          //const twoLetter = event.target.value.slice(1, 3);
          const allOptions = event.target.value.slice(1, 4);
          addSingleSnack(event.target.value);

          allOptions !== "..."
            ? setCurrentActive(true)
            : setCurrentActive(false);
        }}
        value={checkSinglesnack(id)}
        id=""
        className="single-snack__select hover"
      >
        <option value={`${id}...`} className="single-snack__option">
          ...
        </option>

        <option value={`${id}s`} className="single-snack__option">
          s
        </option>
        <option value={`${id}m`} className="single-snack__option">
          m
        </option>
        <option value={`${id}l`} className="single-snack__option">
          l
        </option>
        <option value={`${id}xl`} className="single-snack__option">
          xl
        </option>
      </select>

      <ControlQuantity
        currentActive={currentActive}
        id={id}
        updateQuantity={updateQuantity}
        snackQuantity={snackQuantity}
      />
    </div>
  );
}
