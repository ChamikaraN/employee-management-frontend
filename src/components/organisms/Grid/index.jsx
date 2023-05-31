import React from "react";
import Card from "../../molecules/Card";

export default function Grid({ employees, handleDelete, handleEdit }) {
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
              handleDelete={handleDelete}
              handleEdit={() => {
                handleEdit(employee);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
