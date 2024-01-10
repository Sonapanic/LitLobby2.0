import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import BookCards from "./BookCards";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full bg-gray-300 text-center flex flex-col text-lg justify-between p-5 shadow-lg rounded-sm">
      <h1 className="text-2xl">Dashboard</h1>
      <Link to={"lobby"} className="underline text-testShadow">
        Your Lobby
      </Link>
      <span>Friends *coming soon* </span>
      <span>Book Club *coming soon*</span>
      <span>Libraries *coming soon*</span>
    </div>
  );
};

export default Dashboard;
