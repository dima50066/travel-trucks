import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "../../shared/Button/Button";
import { toast } from "react-toastify";
import Loader from "../../shared/Loader/Loader";
import styles from "./BookingForm.module.css";

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
          <ul className={styles.inputContainer}>
            <li>
              <input
                className={styles.input}
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-label="Your full name"
              />
            </li>
            <li>
              <input
                className={styles.input}
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Your email address"
              />
            </li>
            <li>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Booking date"
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                  minDate={new Date()}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      required: true,
                      helperText: "Please select a date",
                      InputProps: {
                        sx: {
                          width: "500px",
                          border: "none",
                          borderRadius: "12px",
                          backgroundColor: "var(--inputs)",
                        },
                        inputProps: {
                          sx: {
                            padding: "18px 18px",
                          },
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </li>
            <li>
              <textarea
                className={styles.textarea}
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                aria-label="Additional comments (optional)"
              ></textarea>
            </li>
          </ul>
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
