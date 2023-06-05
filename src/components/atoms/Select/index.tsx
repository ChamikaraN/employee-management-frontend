import React, { ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  name: string;
  options: Option[];
  onChangeHandler: (event: ChangeEvent<HTMLSelectElement>) => void;
  styles?: string;
  isDisable?: boolean;
}

const Select: React.FC<SelectProps> = ({
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
      onChange={onChangeHandler} // Update this line
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
