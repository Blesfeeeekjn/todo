import { itemTypes } from "../types/item.types"
import instance from "../../api/request";


export const fetchDeleteItem = (id) => async (dispatch) => {

  try {

    if (id === "") {
      return dispatch({
        type: itemTypes.DATA_ERROR, payload: "Оберіть запис"
      });
    }
    const res = await instance.post("router?action=deleteItem", {
      activeID: localStorage.getItem("activeID"),
      id,
    });
    if (res.data.ok) {
      return dispatch({
        type: itemTypes.ITEM_DELETE, payload: true
      });
    }

    return dispatch({
      type: itemTypes.DATA_ERROR,
      payload: "Запис не видалений"
    });
  } catch (e) {
    return dispatch({
      type: itemTypes.SERVER_ERROR,
      payload: "ПОМИЛКА СЕРВЕРА"
    });
  }
}