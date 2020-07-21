import uuid from "uuid/v4";

export const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
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
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
