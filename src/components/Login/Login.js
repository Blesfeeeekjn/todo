import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useFormField from "../../common/useFieldsFunction";
import AuthFormInner from "../AuthFormInner/AuthFormInner";
import { store } from "../../store"
import { fetchLogin } from "../../store/dispatches/login.dispatch";

function Login({ toggleLogin }) {
  const loginField = useFormField();
  const passField = useFormField();
  const [error, setError] = useState("");
  const showMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  const login = async (e) => {
    e.preventDefault();


    const data = await store.dispatch(fetchLogin(loginField.value, passField.value));

    if (data.type === "AUTH_SUCCESS") {
      toggleLogin(true);
    } else {
      showMessage(data.payload);
    }

  };
  return (
    <section className="login">
      <div className="container">
        <Form>
          <AuthFormInner
            loginField={loginField}
            passField={passField}
            error={error}
          />
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Login;
