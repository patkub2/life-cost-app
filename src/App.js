import React from "react";
import Navbar from "./components/Navbar";
import ItemContextProvider from "./contexts/ItemContext";
import ItemList from "./components/ItemList";
import NewItemForm from "./components/NewItemForm";
import { EditContextProvider } from "./contexts/EditContext";

function App() {
  return (
    <div className="App">
      <EditContextProvider>
        <ItemContextProvider>
          <Navbar />
          <NewItemForm />
          <ItemList />
        </ItemContextProvider>
      </EditContextProvider>
    </div>
  );
}

export default App;
