import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { EditContext } from "../contexts/EditContext";

//this component is a child component from Item list it has all the information from one item that is stored in local storage

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  const { toggleEdit } = useContext(EditContext);

  function handleclick() {
    toggleEdit(item);
    dispatch({ type: "REMOVE_ITEM", id: item.id });
  }
  return (
    <>
      <div className="item-grid-container">
        <div className="item-date">{item.date}</div>
        <div className="item-category">{item.category}</div>
        <div className="item-description">{item.description}</div>
        <div className="item-value">- {item.value} zł</div>
        <div
          className="item-x"
          onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}
        >
          Delete
        </div>
        <div className="item-edit" onClick={handleclick}>
          Edit
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
