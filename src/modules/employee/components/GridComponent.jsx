import React from "react";
import { useNavigate } from "react-router-dom";

export default function Grid({ employees, handleDelete }) {
  const navigate = useNavigate();
  return (
    <div className="row">
      {employees.map((employee) => {
        return (
          <div
            className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 my-3"
            key={employee._id}
          >
            <div className="card h-100">
              <img
                src={employee.photo}
                className="card-img-top"
                alt="Employee"
              />
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
                <button
                  className="btn btn-danger btn-sm float-left mr-2"
                  onClick={() => handleDelete(employee)}
                >
                  <i className="fas fa-trash" />
                </button>
                <button
                  className="btn btn-primary btn-sm float-right"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/employee/edit/${employee._id}`);
                  }}
                >
                  <i className="fas fa-edit" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
