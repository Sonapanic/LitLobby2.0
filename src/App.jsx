import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
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
    <div className="flex flex-col font-montserrat h-[100dvh] w-[100dvw]n box-border flex-grow bg-softWhite">
      <ToastContainer />
      <Header />
      <div className="flex">
        <main className="flex justify-center flex-wrap">
          {currentUser ? <Dashboard /> : <Login />}
        </main>
        <div id="detail" className="flex justify-center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
