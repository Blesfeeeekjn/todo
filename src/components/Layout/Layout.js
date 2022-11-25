import Header from "../Header/Header";
import styles from './Layout.module.scss'

function Layout(props) {
  // Приймаємо глобальні значення lang  за допомогою хука useContext
  return (
    <div className={styles.layout}>
      <Header toggleLogin={props.toggleLogin}/>
      <section>
        <div className="container">{props.children}</div>
      </section>
      <footer>
        <div className="container">
          <p className={styles["footer-wrap"]}>
            created by
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;