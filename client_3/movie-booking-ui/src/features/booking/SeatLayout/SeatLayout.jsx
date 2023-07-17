import styles from "./SeatLayout.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingSelector,
  select,
  removeSelected,
} from "../../../store/reducers/BookingReducer";

export function SeatLayout() {
  const dispatch = useDispatch();
  const [length4, setLength4] = useState([1, 1, 1, 1]);
  const [silverPlus, setSilverPlus] = useState(["G", "F"]);
  const availableSeats = [
    "F6",
    "F7",
    "F10",
    "F3",
    "F2",
    "G1",
    "G2",
    "G6",
    "G9",
    "G10",
  ];
  const [length6, setLength6] = useState([1, 1, 1, 1, 1, 1]);
  //   const [selectedSeats, setSelectedSeats] = useState([]);
  const selectedSeats = useSelector(bookingSelector);

  function selectSeat(seatNo) {
    if (selectedSeats.includes(seatNo)) {
      dispatch(removeSelected(seatNo));
    } else {
      dispatch(select(seatNo));
    }
    // setSelectedSeats(copyOfselectedSeats);
    // dispatch(select(seatNo));
  }
  return (
    <table>
      {silverPlus.map((r) => (
        <tr className={styles.seatRow}>
          <td>{r}</td>
          <td className={styles.seatCol}>
            {length4.map((item, i) =>
              availableSeats.includes(r + (i + 1)) ? (
                <button
                  onClick={() => {
                    selectSeat(r + (i + 1));
                  }}
                  className={
                    selectedSeats.includes(r + (i + 1))
                      ? styles.selectedSeats
                      : styles.availableSeats
                  }
                >
                  <span className={styles.seatNo}>{r + (i + 1)}</span>
                </button>
              ) : (
                <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png"></img>
              )
            )}
          </td>
          <td className={styles.seatCol}>
            {length6.map((item, i) =>
              availableSeats.includes(r + (i + 5)) ? (
                <button
                  onClick={() => {
                    selectSeat(r + (i + 5));
                  }}
                  className={
                    selectedSeats.includes(r + (i + 5))
                      ? styles.selectedSeats
                      : styles.availableSeats
                  }
                >
                  <span className={styles.seatNo}>{r + (i + 5)}</span>
                </button>
              ) : (
                <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png"></img>
              )
            )}
          </td>
          <td className={styles.seatCol}>
            {length4.map((item, i) =>
              availableSeats.includes(r + (i + 11)) ? (
                <button
                  onClick={() => {
                    selectSeat(r + (i + 5));
                  }}
                  className={
                    selectedSeats.includes(r + (i + 5))
                      ? styles.selectedSeats
                      : styles.availableSeats
                  }
                >
                  <span className={styles.seatNo}>{r + (i + 5)}</span>
                </button>
              ) : (
                <img src="http://pixner.net/boleto/demo/assets/images/movie/seat01.png"></img>
              )
            )}
          </td>
          <td>{r}</td>
        </tr>
      ))}
    </table>
  );
}
