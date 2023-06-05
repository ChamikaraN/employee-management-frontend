import React, { ChangeEvent } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";

interface EmployeeFormProps {
  handleSubmit: () => void;
  formData: {
    first_name: string,
    last_name: string,
    email: string,
    number: string,
    gender: string,
    id?: string,
  };
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  errors: {
    first_name?: string,
    last_name?: string,
    email?: string,
    number?: string,
    gender?: string,
  };
  isSaving: boolean;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({
  handleSubmit,
  formData,
  handleChange,
  errors,
  isSaving,
}) => {
  return (
    <form className="p-5 border rounded bg-white">
      <FormField
        label="First Name"
        value={formData.first_name}
        name="first_name"
        placeholder="Chamikara"
        onChangeHandler={handleChange}
        styles={errors.first_name ? "is-invalid" : ""}
        errors={errors.first_name}
      />

      <FormField
        label="Last Name"
        value={formData.last_name}
        name="last_name"
        placeholder="Nayanajith"
        onChangeHandler={handleChange}
        styles={errors.last_name ? "is-invalid" : ""}
        errors={errors.last_name}
      />

      <FormField
        label="Email"
        value={formData.email}
        name="email"
        placeholder="chamikara@gmail.com"
        onChangeHandler={handleChange}
        styles={errors.email ? "is-invalid" : ""}
        errors={errors.email}
      />

      <FormField
        label="Phone Number"
        value={formData.number}
        name="number"
        placeholder="+94715122893"
        onChangeHandler={handleChange}
        styles={errors.number ? "is-invalid" : ""}
        errors={errors.number}
      />

      <FormField
        label="Gender"
        value={formData.gender}
        name="gender"
        onChangeHandler={handleChange}
        styles={`form-control ${errors.gender ? "is-invalid" : ""}`}
        errors={errors.gender}
        options={[
          { value: "", label: "Select gender" },
          { value: "M", label: "Male" },
          { value: "F", label: "Female" },
        ]}
      />
      <Button
        type="submit"
        variant={"primary"}
        onClickHandler={handleSubmit}
        title={formData.id ? "Update" : "Save"}
        styles={"float-left"}
        isDisable={isSaving}
      />
    </form>
  );
};

export default EmployeeForm;
