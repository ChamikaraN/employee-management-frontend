import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import ContentCenteredPage from "../../templates/ContentCenteredPage";

export default function Home() {
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
