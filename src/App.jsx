import { useContext, useEffect } from "react";

import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import AuthContext from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col font-montserrat h-[100dvh] w-[100dvw]n box-border flex-grow bg-softWhite">
      <ToastContainer />
      <Header />
      <main className="flex-grow flex justify-center flex-wrap">
        {currentUser ? <Dashboard /> : <Login />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

