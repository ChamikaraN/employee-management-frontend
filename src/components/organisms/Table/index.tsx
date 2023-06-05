import React from "react";
import Button from "../../atoms/Button";
import "./style.css";
import { Employee } from "../../../types";

interface TableProps {
  employees: Employee[];
  handleDelete: (employee: Employee) => void;
  handleEdit: (employee: Employee) => void;
}

const Table: React.FC<TableProps> = ({
  employees,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div className="row">
      <div className="col my-3">
        <div className="table-responsive">
          <table className="table table-borderless table-hover">
            <thead>
              <tr>
                <th>User Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Gender</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr key={employee._id}>
                    <td>
                      <img
                        src={employee.photo}
                        className="rounded"
                        alt="Employee"
                      />
                    </td>
                    <td>{employee.first_name}</td>
                    <td>{employee.last_name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.number}</td>
                    <td>
                      <i
                        className={`fas fa-lg ${
                          employee.gender === "M" ? "fa-mars" : "fa-venus"
                        }`}
                      />
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClickHandler={() => handleDelete(employee)}
                        styles="btn-sm float-left mr-2"
                        title={<i className="fas fa-trash" />}
                      />
                      <Button
                        variant="primary"
                        onClickHandler={() => handleEdit(employee)}
                        styles="btn-sm "
                        title={<i className="fas fa-edit" />}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
