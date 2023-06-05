import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validationRules } from "../../../utils/validationRules";
import useAddEmployee from "../../../hooks/useAddEmployee";
import useEditEmployee from "../../../hooks/useEditEmployee";
import ContentCenteredPage from "../../templates/ContentCenteredPage";
import EmployeeForm from "../../organisms/EmployeeForm";
import Button from "../../atoms/Button";
import { Employee } from "../../../types";
import { useAppSelector } from "../../../redux/hooks";

interface AddEditEmployeeProps {}

const AddEditEmployee: React.FC<AddEditEmployeeProps> = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const employees = useAppSelector((state: any) => state.employee.employees);

  const { mutate: addEmployeeMutation, isLoading: addEmployeeIsLoading } =
    useAddEmployee();
  const { mutate: editEmployeeMutation, isLoading: editEmployeeIsLoading } =
    useEditEmployee();

  useEffect(() => {
    if (id) {
      const employee = employees.find(
        (employee: Employee) => employee._id === id
      );
      if (employee) {
        setFormData({
          first_name: employee.first_name,
          last_name: employee.last_name,
          email: employee.email,
          number: employee.number,
          gender: employee.gender,
        });
      }
    }
  }, [id, employees]);

  const [formData, setFormData] = useState<Employee>({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    gender: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    let errors: Record<string, string> = {};

    Object.entries(validationRules).forEach(([key, rule]) => {
      if (
        (rule.required && !formData[key as keyof Employee]) ||
        (rule.pattern &&
          !rule.pattern.test(String(formData[key as keyof Employee])))
      ) {
        errors[key] = `${rule.message}`;
      }
    });

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      if (id) {
        editEmployeeMutation({ id: id, ...formData });
      } else {
        addEmployeeMutation(formData);
      }
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: String(value),
    }));
  };

  const handleGoBack = () => {
    navigate("/employee/list");
  };

  return (
    <ContentCenteredPage>
      <div className="col-lg-6 col-md-8 col-sm-10">
        <Button
          variant="primary"
          onClickHandler={handleGoBack}
          title={
            <>
              <i className="fa-solid fa-arrow-left"></i> Back{" "}
            </>
          }
          styles="float-right"
          isDisable={addEmployeeIsLoading || editEmployeeIsLoading}
        />

        <h2 className="mb-4 text-white">{id ? "Edit" : "Add"} Employee</h2>
        <EmployeeForm
          handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          isSaving={addEmployeeIsLoading || editEmployeeIsLoading}
        />
      </div>
    </ContentCenteredPage>
  );
};

export default AddEditEmployee;
