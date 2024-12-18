import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";
import Button from "../../shared/Button/Button";
import { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale/en-GB";

registerLocale("en-GB", enGB);

const BookingForm: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div>
      <form className={styles.bookingForm}>
        <h3 className={styles.title}>Book your campervan now</h3>
        <p className={styles.description}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            type="text"
            placeholder="Name*"
            required
          />
          <input
            className={styles.input}
            type="email"
            placeholder="Email*"
            required
          />
          <div className={styles.datePickerWrapper}>
            <DatePicker
              className={styles.input}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Booking date*"
              dateFormat="dd.MM.yyyy"
              locale="en-GB"
              showPopperArrow={false}
              renderCustomHeader={({
                monthDate,
                decreaseMonth,
                increaseMonth,
              }) => (
                <div className={styles.customHeader}>
                  <button
                    onClick={decreaseMonth}
                    className={`${styles.arrow} ${styles.leftArrow}`}
                    type="button"
                  >
                    &#8249;
                  </button>
                  <span>
                    {monthDate.toLocaleString("en-GB", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    onClick={increaseMonth}
                    className={`${styles.arrow} ${styles.rightArrow}`}
                    type="button"
                  >
                    &#8250;
                  </button>
                </div>
              )}
              showWeekNumbers={false}
              calendarClassName={styles.calendar}
            />
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Comment"
          ></textarea>
        </div>
      </form>
      <div className={styles.buttonContainer}>
        <Button text="Send now" type="submit" className={styles.button} />
      </div>
    </div>
  );
};

export default BookingForm;
