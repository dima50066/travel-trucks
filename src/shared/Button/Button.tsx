import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`${styles.sharedButton} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
