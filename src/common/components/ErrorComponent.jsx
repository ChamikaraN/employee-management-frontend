import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorComponent({ error }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row my-3 mx-5">
          <p className="text-white">
            We apologize for the inconvenience, but we are experiencing some
            technical difficulties at the moment. Please click the following
            link to return to the home page.
          </p>
        </div>
        <div className="row my-3 mx-5">
          <button
            className="btn btn-primary btn-lg"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>
        <div className="row my-3 mx-5">
          <p className="text-danger">{error.message}</p>
        </div>
      </div>
    </div>
  );
}
