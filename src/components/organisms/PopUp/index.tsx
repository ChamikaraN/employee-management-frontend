import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../../atoms/Button";

interface PopUpProps {
  show: boolean;
  hide: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const PopUp: React.FC<PopUpProps> = ({
  show,
  hide,
  onConfirm,
  title,
  message,
}) => {
  return (
    <Modal show={show} onHide={() => hide()} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant={"danger"} onClickHandler={hide} title={"Cancel"} />
        <Button
          variant={"primary"}
          onClickHandler={onConfirm}
          title={"Delete"}
          styles={"float-left"}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
