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
    <div className="flex flex-col h-screen bg-softWhite">
      <ToastContainer />
      <Header />
      <main className="flex-grow flex justify-center ">
        {currentUser ? <Dashboard /> : <Login />}
      </main>
    </div>
  );
}

export default App;

