import { useSelector } from "react-redux";
import {
  bookingSelector,
  priceSelector,
} from "../../../store/reducers/BookingReducer";
import styles from "./BookingSummary.module.css";

export function BookingSummary() {
  const selectedSeats = useSelector(bookingSelector);
  const seatPrice = useSelector(priceSelector);
  //   console.log(selectedSeats);
  return (
    <div className={styles.bookingSummary}>
      <div className={styles.item}>
        <p className={styles.itemHeader}>You Have Choosed Seat</p>
        <h3 className={styles.itemContent}>
          {selectedSeats.length === 0 ? (
            <>None</>
          ) : (
            selectedSeats.map((s, i) => (
              <span>{s + (i === selectedSeats.length - 1 ? "" : ",")}</span>
            ))
          )}
        </h3>
      </div>
      <div className={styles.item}>
        <p className={styles.itemHeader}>Total Price</p>
        <h3 className={styles.itemContent}>
          ${selectedSeats.length == 0 ? 0 : selectedSeats.length * seatPrice}
        </h3>
      </div>
      <div className={styles.item}>
        <a href="#" className={styles.btnProceed}>
          Proceed
        </a>
      </div>
    </div>
  );
}
