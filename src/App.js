import React from "react";
import Navbar from "./components/Navbar";
import ItemContextProvider from "./contexts/ItemContext";
import ItemList from "./components/ItemList";
import NewItemForm from "./components/NewItemForm";

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Navbar />
        <NewItemForm />
        <ItemList />
      </ItemContextProvider>
    </div>
  );
}

export default App;
