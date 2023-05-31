import React from "react";

const Select = ({
  value,
  name,
  options,
  onChangeHandler,
  styles,
  isDisable = false,
}) => {
  return (
    <select
      value={value}
      name={name}
      className={`form-control ${styles}`}
      onChange={(event) => {
        event.preventDefault();
        onChangeHandler(event);
      }}
      disabled={isDisable}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
