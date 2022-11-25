import { itemTypes } from "../types/item.types";

const initialState = {
  item: [],
};
export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case itemTypes.GET_ITEMS_SUCCESS:
      return action.payload;
    case itemTypes.ITEM_ADD:
      return action.payload;
    case itemTypes.ITEM_DELETE:
      return action.payload;
    default:
      return state;
  }
};