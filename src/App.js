import "./App.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import AddItemModal from "./components/AddItemModal";
import { useItem } from "./contexts/ItemContext";
import "./App.css";

function App() {
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const { items, deleteItem } = useItem();

  const crossedLine = (event) => {
    const line = event.target;
    line.classList.toggle("crossed-line");
  };

  return (
    <div id="background">
      <Container className="my-4">
        <Button
          id="addButton"
          className="mb-4"
          onClick={() => setShowAddItemModal(true)}
        >
          Add Item
        </Button>
        <div>
          {items.map((item, index) => {
            return (
              <div onClick={crossedLine} key={index}>
                <p>
                  {item.name}{" "}
                  <img
                    onClick={() => deleteItem({ id: item.id })}
                    src="/delete.png"
                    alt="delete image"
                    width={25}
                    height={25}
                  ></img>
                </p>
              </div>
            );
          })}
        </div>
        <AddItemModal
          show={showAddItemModal}
          handleClose={() => setShowAddItemModal(false)}
        />
      </Container>
    </div>
  );
}

export default App;
