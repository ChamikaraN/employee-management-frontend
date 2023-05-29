import React from "react";
import "./style.css";

function Button({
  variant,
  onClickHandler,
  title,
  styles = "",
  isDisable = false,
}) {
  return (
    <button
      className={`btn btn-${variant}  ${styles}`}
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
      disabled={isDisable}
    >
      {title}
    </button>
  );
}

export default Button;
