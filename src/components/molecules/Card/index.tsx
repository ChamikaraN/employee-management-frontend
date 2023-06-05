import React from "react";
import Button from "../../atoms/Button";
import "./styles.css";
import { Employee } from "../../../types";

interface Props {
  employee: Employee;
  handleDelete: (employee: Employee) => void;
  handleEdit: (employee: Employee) => void;
}

const Card: React.FC<Props> = ({ employee, handleDelete, handleEdit }) => {
  return (
    <div className="card h-100">
      <img src={employee.photo} className="card-img-top" alt="Employee" />
      <div className="card-body">
        <h5 className="card-title">
          {employee.first_name} {employee.last_name}
        </h5>
        <p className="card-text">{employee.email}</p>
        <p className="card-text">{employee.number}</p>
        <p className="card-text">
          <i
            className={`fas fa-lg ${
              employee.gender === "M" ? "fa-mars" : "fa-venus"
            }`}
          />
        </p>
      </div>
      <div className="card-footer">
        <Button
          variant="danger"
          onClickHandler={() => handleDelete(employee)}
          styles="btn-sm float-left mr-2"
          title={<i className="fas fa-trash" />}
        />
        <Button
          variant="primary"
          onClickHandler={() => handleEdit(employee)}
          styles="btn-sm float-right"
          title={<i className="fas fa-edit" />}
        />
      </div>
    </div>
  );
};

export default Card;
