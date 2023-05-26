import React from "react";
import "./style.css";

function Button({ type, size, onClickHandler, title }) {
  return (
    <button
      className={`btn btn-${type} btn-${size}`}
      onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      {title}
    </button>
  );
}

export default Button;
