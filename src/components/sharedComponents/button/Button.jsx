import React from "react";
import styles from "./Button.module.css";

function Button({
  children,
  bg = "#e7816b",
  color = "#ffffff",
  hover = "#ffad9b",
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
      style={{
        "--btn-bg": bg,
        "--btn-color": color,
        "--btn-hover": hover,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
