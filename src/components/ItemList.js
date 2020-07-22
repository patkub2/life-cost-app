import React, { useContext } from "react";
import ItemDetails from "./ItemDetails";
import { ItemContext } from "../contexts/ItemContext";

//this component chceks if items exist if yes creates a map of items

const ItemList = () => {
  const { items } = useContext(ItemContext);
  return items.length ? (
    <div className="item-list">
      <ul>
        <div className="title-grid-container">
          <div className="title-date">Date</div>
          <div className="title-category">Category</div>
          <div className="title-description">Description</div>
          <div className="title-value">Value</div>
          <div className="title-x">Delete</div>
          <div className="title-edit">Edit</div>
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
