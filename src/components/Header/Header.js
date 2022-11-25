import { Button } from "react-bootstrap";
import { store } from "../../store";
import { fetchLogout } from "../../store/dispatches/logout.dispatch";
import styles from "./Header.module.scss";

function Header({ toggleLogin }) {

  // Приймаємо глобальні значення lang  за допомогою хука useContext
  const logoutFunction = async () => {
    const data = await store.dispatch(fetchLogout());

    if (data.type === "LOGOUT_SUCCESS") {
      toggleLogin(false);
      return;
    } else {
      console.log(data.payload);
    }
  };
  return (
    <header>
      <div className="container">
        <div className={styles.header} onClick={logoutFunction}>
          <Button variant="primary">Logout</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
