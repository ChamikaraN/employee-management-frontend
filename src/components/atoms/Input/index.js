import React from "react";
import "./style.css";

function Input({
  type = "text",
  value,
  name,
  placeholder,
  onChangeHandler,
  styles = "",
  isDisable = false,
}) {
  return (
    <input
      type={type}
      className={`form-control ${styles}`}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(event) => {
        event.preventDefault();
        onChangeHandler(event);
      }}
      disabled={isDisable}
    />
  );
}

export default Input;
