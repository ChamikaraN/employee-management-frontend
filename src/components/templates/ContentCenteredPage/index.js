import React from "react";

function ContentCenteredPage({ children }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {children}
    </div>
  );
}

export default ContentCenteredPage;
