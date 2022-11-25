import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Auth.module.scss";

function Auth({toggleLogin}) {
  return (
    <section className="auth">
      <div className={`${styles.authContainer} container`}>
        <div className={styles.authInner}>
          <Tabs
            defaultActiveKey="login"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="register" title="Регістрація">
              <Register toggleLogin={toggleLogin}/>
            </Tab>
            <Tab eventKey="login" title="Логін">
              <Login toggleLogin={toggleLogin} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Auth;
