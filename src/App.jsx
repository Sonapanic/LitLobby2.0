import { useContext, useEffect } from "react";

import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AuthContext from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
      <div className="flex w-full h-full justify-center items-center flex-wrap">
        <ToastContainer />
        <Header />
        {currentUser ? <Dashboard /> : <Login />}
      </div>
  );
}

export default App;
