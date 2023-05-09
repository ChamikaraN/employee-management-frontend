import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validationRules } from "../../utils/validationRules";
import { useSelector } from "react-redux";
import useAddEmployee from "../../hooks/useAddEmployee";
import useEditEmployee from "../../hooks/useEditEmployee";

export default function AddEditEmployee() {
  const navigate = useNavigate();
  const { id } = useParams();
  const employees = useSelector((state) => state.employee.employees);
  const { mutate: addEmployeeMutation, isLoading: addEmployeeIsLoading } =
    useAddEmployee();
  const { mutate: editEmployeeMutation, isLoading: editEmployeeIsLoading } =
    useEditEmployee();

  useEffect(() => {
    if (id) {
      const employee = employees.find((employee) => employee._id === id);
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

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    Object.entries(validationRules).forEach(([key, rule]) => {
      if (
        (rule.required && !formData[key]) ||
        (rule.pattern && !rule.pattern.test(formData[key]))
      ) {
        errors[key] = `${rule.message}`;
      }
    });

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (id) {
        editEmployeeMutation({ id: id, ...formData });
      } else {
        addEmployeeMutation(formData);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="col-lg-6 col-md-8 col-sm-10">
        <button
          type="button"
          className="btn btn-primary float-right"
          onClick={(e) => {
            e.preventDefault();
            navigate("/employee/list");
          }}
          disabled={addEmployeeIsLoading || editEmployeeIsLoading}
        >
          <i class="fa-solid fa-arrow-left"></i> Back
        </button>
        <h2 className="mb-4 text-white">{id ? "Edit" : "Add"} Employee</h2>
        <form onSubmit={handleSubmit} className="p-5 border rounded bg-white">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              className={`form-control ${
                errors.first_name ? "is-invalid" : ""
              }`}
              value={formData.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <div className="invalid-feedback">{errors.first_name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="last_name"
              className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
              value={formData.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <div className="invalid-feedback">{errors.last_name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="number"
              className={`form-control ${errors.number ? "is-invalid" : ""}`}
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && (
              <div className="invalid-feedback">{errors.number}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className={`form-control ${errors.gender ? "is-invalid" : ""}`}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
            {errors.gender && (
              <div className="invalid-feedback">{errors.gender}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary float-right"
            disabled={addEmployeeIsLoading || editEmployeeIsLoading}
          >
            {id ? "Update" : "Save"}
          </button>
        </form>
      </div>
    </div>
  );
}
