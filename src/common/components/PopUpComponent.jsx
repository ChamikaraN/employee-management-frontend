import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function PopUp({ show, hide, onConfirm, title, message }) {
  return (
    <Modal show={show} onHide={() => hide()} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => hide()}>
          Cancel
        </Button>
        <Button variant="primary" className="float-left" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
