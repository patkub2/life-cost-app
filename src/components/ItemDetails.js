import React, { useContext } from "react";
import { ItemContext } from "../contexts/ItemContext";
import { EditContext } from "../contexts/EditContext";
import bin from "../icons/bin.svg";
import edit from "../icons/edit.svg";

//this component is a child component from Item list it has all the information from one item that is stored in local storage

const ItemDetails = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  const { toggleEdit } = useContext(EditContext);

  function handleclick() {
    //on edit removes an item and adds the text to form
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
          <img src={bin} className="icon" />
        </div>
        <div className="item-edit" onClick={handleclick}>
          <img src={edit} className="icon" />
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
