import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import instance from "../../api/request";

function Andr() {
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();
  const loginFunction = async (e) => {
    e.preventDefault();
    if (login === "" && pass === "") {
      console.log("test");
      return;
    }
    console.log(login, pass);
    const res = await instance.post("router?action=login", { login, pass });
    console.log(res.data);
  };

  return (
    <div className="andr">
      <Tabs
        defaultActiveKey="login"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="login" title="Login">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={loginFunction}>
              Login
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="register" title="Registration">
          {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registration
          </Button>
        </Form> */}
        </Tab>
      </Tabs>
    </div>
  );
}

export default Andr;