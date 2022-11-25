import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useFormField from "../../common/useFieldsFunction";
import { store } from "../../store";
import { fetchReg } from "../../store/dispatches/register.dispatch";
import AuthFormInner from "../AuthFormInner/AuthFormInner";

function Register({ toggleLogin }) {
  const loginField = useFormField();
  const passField = useFormField();
  const [error, setError] = useState("");

  const showMessage = (message) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const registerFunction = async (e) => {
    e.preventDefault();

    //const user = { login: loginField.value, pass: passField.value };
    const data = await store.dispatch(fetchReg(loginField.value, passField.value));
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
          <Button variant="primary" type="submit" onClick={registerFunction}>
            Register
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default Register;
