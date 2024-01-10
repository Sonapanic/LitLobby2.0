import { useContext } from "react";
import { Outlet, redirect } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import AuthContext from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-between font-montserrat h-[100dvh] w-[100dvw] bg-softWhite">
      <div>
        <ToastContainer />
        <Header />
      </div>
      <div
        className={currentUser ? "flex justify-start" : "flex justify-center"}
      >
        {currentUser ? <Dashboard /> : <Login />}
      </div>
      <div id="detail" className="flex justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
