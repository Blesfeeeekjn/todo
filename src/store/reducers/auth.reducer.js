import { authTypes } from "../types/auth.types";

const initialState = {
  error: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.AUTH_SUCCESS:
      return { error: false };
    case authTypes.AUTH_DATA_ERROR:
      return { error: action.payload };
    case authTypes.AUTH_SERVER_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
