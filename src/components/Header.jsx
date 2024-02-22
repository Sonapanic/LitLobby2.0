import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const signOut = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
  };

  return (
    <div className="font-montserrat h-24 bg-gradient-to-r from-darkBrown via-viaBrown to-warmBrown w-screen flex items-center justify-between px-4 shadow-inner">
      <div>
        <span className="text-darkCream text-3xl">
          Lit<span className="text-testShadow">-</span>
          <i className="text-linkedWhite">Lobby</i>
        </span>
        <div>
          <span className="text-darkCream">INDEV V.1.0</span>
        </div>
      </div>
      {currentUser !== null && (
        <div className="flex items-center justify-center">
          <span className="text-2xl text-darkCream text-center">
            {currentUser.first_name}'s Lobby
          </span>
        </div>
      )}
      <div className="flex items-center justify-end">
        {currentUser !== null && (
          <Link to={''}
            onClick={signOut}
            className="ml-4 bg-alternateBrown hover:bg-lightGrey hover:text-softBlack text-darkCream font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-inner duration-300"
          >
            Sign Out
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
