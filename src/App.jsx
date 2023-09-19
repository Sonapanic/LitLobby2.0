import { useContext, useEffect } from "react";

import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AuthContext from "./context/AuthContext";
import "./index.css";

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
      <div className="flex w-full h-full justify-center items-center flex-wrap">
        <Header />
        {currentUser ? <Dashboard /> : <Login />}
      </div>
  );
}

export default App;
