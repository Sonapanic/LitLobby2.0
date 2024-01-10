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
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col justify-between font-montserrat h-[100dvh] w-[100dvw] bg-softWhite overflow-hidden">
      <div>
        <ToastContainer />
        <Header />
      </div>
      <div
        className={
          currentUser ? "flex h-[70dvh]" : "flex justify-center mb-96"
        }
      >
        {currentUser ? (
          <div className="flex w-full">
            <div className="flex w-[17dvw] border mr-20 justify-center">
              <Dashboard />
            </div>
            <div className="flex justify-center w-full border border-black mr-10">
              <Outlet />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
      {/* <div id="detail" className="flex justify-center">
        <Outlet />
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
