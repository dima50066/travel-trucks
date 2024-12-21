import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";
import Button from "../../shared/Button/Button";
import { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale/en-GB";
import { toast } from "react-toastify";
import Loader from "../../shared/Loader/Loader";

registerLocale("en-GB", enGB);

const BookingForm: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !startDate) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your booking request has been successfully sent!");

      setName("");
      setEmail("");
      setStartDate(null);
      setComment("");
    }, 2000);
  };

  return (
    <div>
      {isSubmitting ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <form className={styles.bookingForm} onSubmit={handleFormSubmit}>
          <h3 className={styles.title}>Book your campervan now</h3>
          <p className={styles.description}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Your full name"
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Your email address"
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
                aria-label="Select your booking date"
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
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              aria-label="Additional comments (optional)"
            ></textarea>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              text="Send now"
              type="submit"
              className={styles.button}
              aria-label="Submit the booking form"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
