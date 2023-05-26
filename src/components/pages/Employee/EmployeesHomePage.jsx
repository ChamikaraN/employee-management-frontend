import React from "react";
import { useNavigate } from "react-router-dom";
import ContentCenteredPage from "../../templates/ContentCenteredPage";
import Button from "../../atoms/Button";

export default function Employees() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/employee/list");
  };

  return (
    <ContentCenteredPage>
      <Button
        type={"primary"}
        size={"lg"}
        onClickHandler={onClickHandler}
        title={"Go to Employee List"}
      />
    </ContentCenteredPage>
  );
}
