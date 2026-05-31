import "../variables.scss";
import { useEffect, useRef, useState } from "react";
import "./controlQuantity.scss";

export default function ControlQuantity({
  currentActive,
  id,
  updateQuantity,
  snackQuantity,
}: {
  currentActive: boolean;
  id: number;
  updateQuantity: (id: number, quantity: number) => void;
  snackQuantity: number;
}) {
  const [quantity, setQuantity] = useState<number>(1);

  let singleSnackQuantity = useRef(1);

  useEffect(() => {
    if (currentActive) {
      singleSnackQuantity.current = snackQuantity;
      setQuantity(snackQuantity);
    } else {
      setQuantity(1);
    }
  }, [currentActive]);

  function controlQuantity(direction: number, id: number) {
    if (direction === 1) {
      singleSnackQuantity.current = singleSnackQuantity.current + 1;
      setQuantity(singleSnackQuantity.current);
      updateQuantity(id, singleSnackQuantity.current);
    } else {
      singleSnackQuantity.current = singleSnackQuantity.current - 1;
      setQuantity(singleSnackQuantity.current);
      updateQuantity(id, singleSnackQuantity.current);
    }
  }

  return (
    <div className={`control-quantity ${currentActive ? "" : ""}`}>
      <button
        onClick={() => {
          controlQuantity(-1, id);
        }}
        disabled={!currentActive || !(quantity > 1)}
        className={`control-quantity__minus-button ${currentActive && quantity > 1 ? "hover" : "disable-button"}`}
      >
        -
      </button>
      <span
        className={`control-quantity__quantitiy ${currentActive ? "" : "disable"}`}
      >
        {quantity}
      </span>
      <button
        onClick={() => {
          controlQuantity(1, id);
        }}
        disabled={!currentActive}
        className={`control-quantity__plus-button ${currentActive ? "accent-button2 hover" : "disable-button"}`}
      >
        +
      </button>
    </div>
  );
}
