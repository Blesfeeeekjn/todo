import instance from "../api/request";
import { saveLoginDataFunction } from "./saveLoginDataFunction";

async function loginFunction(login, pass){
 
  try {
    const res = await instance.post("router?action=login", { login, pass });
    if (res.data.ok) {

      saveLoginDataFunction(res.data.token, res.data.activeID);
      return { isLogin: true };
    
    }
    return { isLogin: false, message: res.data.error}
  } catch (e) {
    return { isLogin: false, message: e.message }
  }
};

export default loginFunction;