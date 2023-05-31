import React, { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import logEvent from "../../utils/logger";
import { ERROR } from "../../constants/sanityConst";

export default function AppError() {
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    const logErrorEvent = async () => {
      try {
        await logEvent(ERROR, error.message, {
          additionalData: error.statusText,
        });
      } catch (error) {
        console.error("Failed to log event:", error);
      }
    };

    logErrorEvent().catch((error) => {
      console.error("Failed to log event:", error);
    });
  }, [error]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row my-3 mx-5">
          <h1>Oops!</h1>
        </div>
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
          <p className="text-danger">{error.statusText || error.message}</p>
        </div>
      </div>
    </div>
  );
}
