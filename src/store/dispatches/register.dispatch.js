import { authTypes } from "../types/auth.types"
import instance from "../../api/request";
// import { saveLoginDataFunction } from "../../common/saveLoginDataFunction";

export const fetchReg = (login, pass) => async (dispatch) => {

  try {
    if (pass === '' || login === '') {
      return dispatch({ type: authTypes.AUTH_DATA_ERROR, payload: "Пустий пароль або логін" })
    }

    const res = await instance.post("router?action=register", { login, pass });
    if (res.data.ok && !res.data.alreadyExist) {
      return dispatch({
        type: authTypes.AUTH_SUCCESS
      });
    }

    if (res.data.ok && res.data.alreadyExist) {
      return dispatch({
        type: authTypes.AUTH_DATA_ERROR,
        payload: "Такий користувач існує"
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