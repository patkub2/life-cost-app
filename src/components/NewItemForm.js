import React, { useContext } from "react";
import { EditContext } from "../contexts/EditContext";
import { ItemContext } from "../contexts/ItemContext";
const NewItemForm = () => {
  const { dispatch } = useContext(ItemContext);
  const {
    date,
    category,
    description,
    value,
    setValue,
    setCategory,
    setDescription,
    setDate,
  } = useContext(EditContext);

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
      <input type="submit" value="add item" />
    </form>
  );
};

export default NewItemForm;
