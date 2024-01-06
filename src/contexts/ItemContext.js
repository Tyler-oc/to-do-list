import { useContext, createContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const ItemContext = createContext();

export function useItem() {
  return useContext(ItemContext);
}

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useLocalStorage("Items", []);

  function addItem({ name }) {
    setItems((prevItems) => {
      if (prevItems.find((item) => item.name === name)) {
        return prevItems;
      }
      return [...prevItems, { id: uuidV4(), name }];
    });
  }
  function deleteItem({ id }) {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ItemContext.Provider
      value={{
        items,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
