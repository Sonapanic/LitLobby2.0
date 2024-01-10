import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import BookCards from "./BookCards";
import DataContext from "../context/DataContext";
import { Link } from 'react-router-dom'

const Dashboard = () => {

  return (
    <div className="w-20 bg-green-200">
       <Link to={'lobby'}>View Your Lobby</Link>
    </div>
  )
};

export default Dashboard;



