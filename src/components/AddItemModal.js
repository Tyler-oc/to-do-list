import { Button, Container, Form, Modal } from "react-bootstrap";
import { useRef } from "react";
import { useItem } from "../contexts/ItemContext";

export default function AddItemModal({ show, handleClose }) {
  const nameRef = useRef();
  const { addItem } = useItem();

  function handleSubmit() {
    addItem({
      name: nameRef.current.value,
    });
    handleClose();
  }

  return (
    <Container>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={nameRef} type="text" required />
            </Form.Group>
            <Container className="d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Container>
          </Modal.Body>
        </Form>
      </Modal>
    </Container>
  );
}
