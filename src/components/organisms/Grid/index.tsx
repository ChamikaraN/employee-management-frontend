import React from "react";
import Card from "../../molecules/Card";
import { Employee } from "../../../types";

interface GridProps {
  employees: Employee[];
  handleDelete: (employee: Employee) => void;
  handleEdit: (employee: Employee) => void;
}

const Grid: React.FC<GridProps> = ({ employees, handleDelete, handleEdit }) => {
  return (
    <div className="row">
      {employees.map((employee) => {
        return (
          <div
            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 my-3"
            key={employee._id}
          >
            <Card
              employee={employee}
              handleDelete={() => handleDelete(employee)}
              handleEdit={() => handleEdit(employee)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
