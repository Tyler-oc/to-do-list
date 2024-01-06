import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import AddItemModal from "./components/AddItemModal";
import { useItem } from "./contexts/ItemContext";

function App() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const { items } = useItem();

  return (
    <Container className="my-4">
      <Button onClick={() => setShowAddItemModal(true)}>Add Item</Button>
      <div>
        <ul>
          {items.map((item) => {
            return <li></li>;
          })}
        </ul>
      </div>
      <AddItemModal
        show={showAddItemModal}
        handleClose={() => setShowAddItemModal(false)}
      />
    </Container>
  );
}

export default App;
