import React, { useContext, useState } from "react";
import { ItemContext } from "../contexts/ItemContext";

const EditItemForm = () => {
  const { dispatch } = useContext(ItemContext);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      item: { date, category, description, value },
    });
    setDate("");
    setCategory("");
    setDescription("");
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <input type="submit" value="edit item" />
    </form>
  );
};

export default EditItemForm;
