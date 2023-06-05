import React, { ChangeEvent } from "react";
import "./style.css";

interface InputProps {
  type?: string;
  value: string;
  name: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  styles?: string;
  isDisable?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  name,
  placeholder,
  onChangeHandler,
  styles = "",
  isDisable = false,
}) => {
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
};

export default Input;
