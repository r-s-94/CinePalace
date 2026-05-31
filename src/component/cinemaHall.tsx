import { hall1, hall2, hall3, type Hall } from "../cinemaHallDatabase";
import type { Ticket } from "../bookingsContent";
import "./cinemaHall.scss";
import DoubleSeat from "./doubleSeat";
import SingleSeat from "./singleSeat";
import Canvas from "./canvas";
import type { RowKey } from "./bookingMovie";

export default function CinemaHall({
  hall,
  booking,
  chooseSeat,
}: {
  hall: number;
  booking: Ticket;
  chooseSeat: (id: number, hall: Hall, row: string) => void;
}) {
  if (hall === 1) {
    const rows = Object.keys(hall1);

    return (
      <div className="hall hall1">
        <Canvas />

        {rows.map((row) => (
          <div className="row">
            {row.toLocaleUpperCase()}
            {hall1[row as RowKey].map((seat) =>
              seat.type === "ds" ? (
                <DoubleSeat
                  id={seat.id}
                  seat={seat.seat}
                  seat2={seat.seat2}
                  booking={booking}
                  chooseSeat={() => {
                    chooseSeat(seat.id, hall1, seat.row);
                  }}
                />
              ) : (
                <SingleSeat
                  id={seat.id}
                  seat={seat.seat}
                  seat2={seat.seat2}
                  booking={booking}
                  chooseSeat={() => {
                    chooseSeat(seat.id, hall1, seat.row);
                  }}
                />
              ),
            )}
          </div>
        ))}
      </div>
    );

    /* 
     
    */
  }

  if (hall === 2) {
    const rows = Object.keys(hall2);

    return (
      <div className="hall hall2">
        <Canvas />

        {rows.map((row) => (
          <div className="row">
            {row.toLocaleUpperCase()}
            {hall2[row as RowKey].map((seat) =>
              seat.type === "ds" ? (
                <DoubleSeat
                  id={seat.id}
                  seat={seat.seat}
                  seat2={seat.seat2}
                  booking={booking}
                  chooseSeat={() => {
                    chooseSeat(seat.id, hall2, seat.row);
                  }}
                />
              ) : (
                <SingleSeat
                  id={seat.id}
                  seat={seat.seat}
                  seat2={seat.seat2}
                  booking={booking}
                  chooseSeat={() => {
                    chooseSeat(seat.id, hall2, seat.row);
                  }}
                />
              ),
            )}
          </div>
        ))}
      </div>
    );
  } else {
    const rows = Object.keys(hall3);

    return (
      <div className="hall hall3">
        <Canvas />

        {rows.map((row) => (
          <div className="row">
            {row.toLocaleUpperCase()}
            {hall3[row as RowKey].map((seat) =>
              seat.type === "ds" ? (
                <DoubleSeat
                  id={seat.id}
                  seat={seat.seat}
                  seat2={seat.seat2}
                  booking={booking}
                  chooseSeat={() => {
                    chooseSeat(seat.id, hall3, seat.row);
                  }}
                />
              ) : (
                <SingleSeat
                  id={seat.id}
                  seat={seat.seat}
                  seat2={seat.seat2}
                  booking={booking}
                  chooseSeat={() => {
                    chooseSeat(seat.id, hall3, seat.row);
                  }}
                />
              ),
            )}
          </div>
        ))}
      </div>
    );
  }

  /*
  
*/
}
