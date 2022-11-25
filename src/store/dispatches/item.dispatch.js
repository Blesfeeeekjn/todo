import { itemTypes } from "../types/item.types"
import instance from "../../api/request";


export const fetchItem = () => async (dispatch) => {

  try {

    const res = await instance.post("router?action=getItems", {
      activeID: localStorage.getItem("activeID"),
    });
    if (res.data.items) {
      return dispatch({
        type: itemTypes.GET_ITEMS_SUCCESS, payload: res.data.items
      });
    }

    return dispatch({
      type: itemTypes.DATA_ERROR,
      payload: "Немає данних"
    });
  } catch (e) {
    return dispatch({
      type: itemTypes.SERVER_ERROR,
      payload: "ПОМИЛКА СЕРВЕРА"
    });
  }
}