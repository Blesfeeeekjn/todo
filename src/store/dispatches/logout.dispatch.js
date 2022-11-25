import { logoutTypes } from "../types/logout.types";
import { clearSrorage } from "../../common/clearLocalStorageFunction";
import instance from "../../api/request";

export const fetchLogout = () => async (dispatch) => {
  try {
    const res = await instance.post("router?action=logout");
    if (res.data.ok) {
      clearSrorage();
      return dispatch({
        type: logoutTypes.LOGOUT_SUCCESS,
      });
    }

    return dispatch({
      type: logoutTypes.LOGOUT_DATA_ERROR,
      payload: "Помилка!!! Сессія на бекенді не завершена",
    });
  } catch (e) {
    return dispatch({
      type: logoutTypes.LOGOUT_SERVER_ERROR,
      payload: "Помилка сервера",
    });
  }
};
