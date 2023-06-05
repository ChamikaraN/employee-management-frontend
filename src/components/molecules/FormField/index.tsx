import React, { ChangeEvent } from "react";
import Select from "../../atoms/Select";
import Input from "../../atoms/Input";

interface FormFieldProps {
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  onChangeHandler: (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => void;
  styles?: string;
  errors?: string;
  options?: { value: string; label: string }[];
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  name,
  placeholder,
  onChangeHandler,
  styles,
  errors,
  options,
}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}:</label>
      {options ? (
        <Select
          value={value}
          name={name}
          options={options}
          onChangeHandler={onChangeHandler}
          styles={styles}
        />
      ) : (
        <Input
          value={value}
          name={name}
          placeholder={placeholder}
          onChangeHandler={onChangeHandler}
          styles={styles}
        />
      )}
      {errors && <div className="invalid-feedback">{errors}</div>}
    </div>
  );
};

export default FormField;
