import "./doubleSeat.scss";
import "../../variables.scss";
import DoubleSeatIMG from "../../assets/cinema-seat.png";
import type { Ticket } from "../../bookingsContent";
import UserIMG from "../../assets/User.png";
import { blockSeat } from "../../cinemaHallDatabase";
import BlockSeat from "../../assets/kreuzen.png";

export default function DoubleSeat({
  id,
  seat,
  seat2,
  booking,
  chooseSeat,
}: {
  id: number;
  seat: number;
  seat2: number;
  booking: Ticket;
  chooseSeat: () => void;
}) {
  return (
    <div className="double-seat">
      <button
        onClick={chooseSeat}
        disabled={blockSeat.some((seatId) => seatId === id)}
        className="no-button-style"
      >
        {" "}
        <img
          src={DoubleSeatIMG}
          className={`double-seat-img ${blockSeat.some((seatId) => seatId === id) ? "block no-hover" : "hover"}`}
          alt=""
        />
      </button>

      <div className="seats">
        <span>{seat}</span>
        <span>{seat2 !== 0 ? seat2 : ""}</span>
      </div>
      {booking.seats.find((seat) => seat.id === id) && (
        <>
          <img src={UserIMG} className="user-img" alt="" />
        </>
      )}

      {blockSeat.some((seatId) => seatId === id) && (
        <>
          <img src={BlockSeat} className="block-seat" alt="" />
        </>
      )}
    </div>
  );
}
