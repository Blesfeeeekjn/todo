import { useState } from 'react';
import { checkLoginFunction } from "./common/checkLoginFunction";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import "./App.scss";
import ToDo from './components/ToDo/ToDo';
// import Andr from './components/Andr/Andr';

function App() {
  const [isLogin, setIsLogin] = useState(checkLoginFunction())
  const toggleLogin = (data) => {
    setIsLogin(data)
  }
  
  if (!isLogin) {
    return (
      <Layout toggleLogin={toggleLogin}>
        <Auth toggleLogin={toggleLogin} />
        {/* <Andr /> */}
      </Layout>
    );
  }
  return <Layout toggleLogin={toggleLogin}><ToDo /></Layout>;
}

export default App;
