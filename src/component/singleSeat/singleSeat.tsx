import SingleSeatIMG from "../../assets/chair.png";
import "./singleSeat.scss";
import UserIMG from "../../assets/User.png";
import type { Ticket } from "../../bookingsContent";
import { blockSeat } from "../../cinemaHallDatabase";
import BlockSeat from "../../assets/kreuzen.png";

export default function SingleSeat({
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
    <div className="single-seat">
      <button
        onClick={chooseSeat}
        disabled={blockSeat.some((seatId) => seatId === id)}
        className="no-button-style"
      >
        <img
          src={SingleSeatIMG}
          className={`single-seat-img ${blockSeat.some((seatId) => seatId === id) ? "block no-hover" : "hover"}`}
          alt=""
        />
      </button>

      <div className="seats">
        {seat}
        {seat2 !== 0 ? seat2 : ""}
      </div>
      {booking.seats.some((seat) => seat.id === id) && (
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
