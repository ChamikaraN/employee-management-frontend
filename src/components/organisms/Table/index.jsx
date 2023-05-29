import React from "react";
import { useNavigate } from "react-router-dom";

export default function Table({ employees, handleDelete }) {
  const navigate = useNavigate();
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
                      <button
                        type="button"
                        className="btn btn-danger btn-sm mr-2"
                        onClick={() => handleDelete(employee)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm "
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/employee/edit/${employee._id}`);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </button>
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
}
