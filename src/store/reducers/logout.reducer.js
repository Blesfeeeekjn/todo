import { logoutTypes } from "../types/logout.types";

const initialState = {
  error: false,
};
export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case logoutTypes.LOGOUT_SUCCESS:
      return { error: false };
    case logoutTypes.LOGOUT_DATA_ERROR:
      return { error: action.payload };
    case logoutTypes.LOGOUT_SERVER_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
