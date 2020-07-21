import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  return (
    <>
      <div className="it-grid-container">
        <div className="it-date">{item.date}</div>
        <div className="it-category">{item.category}</div>
        <div className="it-description">{item.description}</div>
        <div className="it-value">{item.value} zł</div>
        <div className="it-x">Delete</div>
        <div className="it-edit">Edit</div>
      </div>
      <button
        className="remove"
        onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
      >
        Remove
      </button>
      <button
        className="remove"
        onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
      >
        Edit
      </button>
    </>
  );
};

export default ItemDetails;
