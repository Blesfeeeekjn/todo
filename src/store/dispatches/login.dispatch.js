import { authTypes } from "../types/auth.types"
import instance from "../../api/request";
import { saveLoginDataFunction } from "../../common/saveLoginDataFunction";

export const fetchLogin = (login, pass) => async (dispatch) => {

  try {
    if (pass === '' || login === '') {
      return dispatch({ type: authTypes.AUTH_DATA_ERROR, payload: "Пустий пароль або логін" })
    }

    const res = await instance.post("router?action=login", { login, pass });
    if (res.data.ok) {
      saveLoginDataFunction(res.data.token, res.data.activeID);
      return dispatch({
        type: authTypes.AUTH_SUCCESS
      });
    }

    return dispatch({
      type: authTypes.AUTH_DATA_ERROR,
      payload: "Ваш пароль або логін не коректні"
    });
  } catch (e) {
    return dispatch({
      type: authTypes.AUTH_SERVER_ERROR,
      payload: "Помилка сервера",
    });
  }
}