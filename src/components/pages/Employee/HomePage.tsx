import React from "react";
import { useNavigate } from "react-router-dom";
import ContentCenteredPage from "../../templates/ContentCenteredPage";
import Button from "../../atoms/Button";

const Employees: React.FC = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/employee/list");
  };

  return (
    <ContentCenteredPage>
      <Button
        variant={"primary"}
        styles={"btn-lg"}
        onClickHandler={onClickHandler}
        title={"Go to Employee List"}
      />
    </ContentCenteredPage>
  );
};

export default Employees;
