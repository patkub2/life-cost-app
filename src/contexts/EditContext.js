import React, { useState } from "react";
const EditContext = React.createContext();

function EditContextProvider(props) {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  function toggleEdit(p) {
    setDate(p.date);
    setCategory(p.category);
    setDescription(p.description);
    setValue(p.value);
  }

  return (
    <EditContext.Provider
      value={{
        toggleEdit,
        date,
        category,
        description,
        value,
        setValue,
        setCategory,
        setDescription,
        setDate,
      }}
    >
      {props.children}
    </EditContext.Provider>
  );
}

export { EditContextProvider, EditContext };
