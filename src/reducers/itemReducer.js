import uuid from "uuid/v4"; //library used for unique keys

//reduser of storaged items

export const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": //adds an item with id
      return [
        ...state,
        {
          date: action.item.date,
          category: action.item.category,
          description: action.item.description,
          value: action.item.value,
          id: uuid(),
        },
      ];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id); //removes items by filtering all items that have other id

    default:
      return state;
  }
};
