import React from "react";
import Select from "../../atoms/Select";
import Input from "../../atoms/Input";

function FormField({
  label,
  value,
  name,
  placeholder,
  onChangeHandler,
  styles,
  errors,
  options,
}) {
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
}

export default FormField;
