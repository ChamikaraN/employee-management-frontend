import React from "react";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <button
        className="btn btn-primary btn-lg"
        onClick={(e) => {
          e.preventDefault();
          navigate("/employee/list");
        }}
      >
        Go to Employee List
      </button>
    </div>
  );
}
