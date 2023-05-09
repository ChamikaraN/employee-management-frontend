import React from "react";
import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row my-3 mx-5">
          <h1>Oops!</h1>
        </div>
        <div className="row my-3 mx-5">
          <p className="text-white">
            We apologize for the inconvenience, the page you are looking not
            found. Please click the following link to return to the home page.
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
          <p className="text-danger">{error.statusText || error.message}</p>
        </div>
      </div>
    </div>
  );
}
