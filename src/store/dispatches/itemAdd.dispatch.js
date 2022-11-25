import { itemTypes } from "../types/item.types"
import instance from "../../api/request";


export const fetchAddItem = (text) => async (dispatch) => {

  try {

    if (text === "") {
      return dispatch({
        type: itemTypes.DATA_ERROR, payload: "Пусте значення"
      });
    }
    const res = await instance.post("router?action=createItem", {
      activeID: localStorage.getItem("activeID"),
      text,
    });
    if (res.data.id !== "") {
      return dispatch({
        type: itemTypes.ITEM_ADD, payload: true
      });
    }

    return dispatch({
      type: itemTypes.DATA_ERROR,
      payload: "Запис не створений"
    });
  } catch (e) {
    return dispatch({
      type: itemTypes.SERVER_ERROR,
      payload: "ПОМИЛКА СЕРВЕРА"
    });
  }
}