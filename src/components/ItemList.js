import React, { useContext } from "react";
import ItemDetails from "./ItemDetails";
import { ItemContext } from "../contexts/ItemContext";

const ItemList = () => {
  const { items } = useContext(ItemContext);
  return items.length ? (
    <div className="item-list">
      <ul>
        <div className="it-grid-container">
          <div className="it-date">Date</div>
          <div className="it-category">Category</div>
          <div className="it-description">Description</div>
          <div className="it-value">Value</div>
          <div className="it-x">Delete</div>
          <div className="it-edit">Edit</div>
        </div>

        {items.map((item) => {
          return <ItemDetails item={item} key={item.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No life costs at the moment.</div>
  );
};

export default ItemList;
