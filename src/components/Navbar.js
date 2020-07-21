import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

const Navbar = () => {
  const { items } = useContext(ItemContext);
  return (
    <div className="navbar">
      <h1>Life Cost App</h1>
      <p>Currently you have {items.length} items</p>
    </div>
  );
};

export default Navbar;
