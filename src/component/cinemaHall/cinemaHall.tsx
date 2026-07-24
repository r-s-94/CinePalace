import { hall1, hall2, hall3, type Hall } from "../../cinemaHallDatabase";
import type { Ticket } from "../../bookingsContent";
import "./cinemaHall.scss";
import DoubleSeat from "../doubleSeat/doubleSeat";
import SingleSeat from "../singleSeat/singleSeat";
import Canvas from "../canvas/canvas";
import type { RowKey } from "../../rowKey";

export default function CinemaHall({
  hall,
  booking,
  chooseSeat,
}: {
  hall: number;
  booking: Ticket;
  chooseSeat: (id: number, hall: Hall, row: string) => void;
}) {
  let hallChoose: Hall = {
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
    g: [],
    h: [],
  };
  let rows: string[] = [];

  if (hall === 1) {
    hallChoose = hall1;
    rows = Object.keys(hall1);
  }

  if (hall === 2) {
    hallChoose = hall2;
    rows = Object.keys(hall2);
  }

  if (hall === 3) {
    hallChoose = hall3;
    rows = Object.keys(hall2);
  }

  return (
    <div className="hall">
      <Canvas />

      {rows.map((row) => (
        <div className="row">
          <span className="row-letter">{row.toLocaleUpperCase()}</span>
          {hallChoose[row as RowKey].map((seat) =>
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

  /*if (hall === 2) {
    const rows = Object.keys(hall2);

    return (
      <div className="hall hall2">
        <Canvas />

        {rows.map((row) => (
          <div className="row">
            <span className="row-letter">{row.toLocaleUpperCase()}</span>
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
            <span className="row-letter">{row.toLocaleUpperCase()}</span>
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
  }*/
}
