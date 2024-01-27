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
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import DataContext from "./context/DataContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { bgUrl } = useContext(DataContext)

  return (
    <div style={{
      backgroundImage: `url(${bgUrl})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      height: '100vh', 
    }} className="flex flex-col justify-between font-Roboto h-[100dvh] w-[100dvw] overflow-hidden">
      <div>
        <ToastContainer />
        <Header />
      </div>
      <div
        className={currentUser ? "flex h-[81dvh]" : "flex justify-center mb-64"}
      >
        {currentUser ? (
          <div className="flex w-full">
            <div className="flex w-[10dvw] border mr-20 justify-center">
              <Dashboard />
            </div>
            <div className="flex justify-center w-full mr-64">
              <Outlet />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
