import AuthContext from "../context/AuthContext";
import DataContext from "../context/DataContext";
import { useContext } from "react";
import AddForm from './AddForm'
import BookCards from "./BookCards";

const Lobby = () => {

    const { toBeAdded } = useContext(DataContext);
    const { currentUser } = useContext(AuthContext);
    // const { id, username, email, first_name, last_name } = currentUser;
  
    if (toBeAdded) {
        return <AddForm />;
      }
    
      return <BookCards />;
}



export default Lobby