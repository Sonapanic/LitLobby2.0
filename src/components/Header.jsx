import AuthContext from "../context/AuthContext";
import { useContext } from "react";









const Header = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="h-20 bg-warmBrown w-screen flex items-center justify-between px-4 shadow-inner">
      <div>
        <span className="text-lightGrey text-xl">
          Lit<i className="text-softWhite">Lobby</i>
        </span>
      </div>
      <div className="flex items-center">
        {currentUser !== null ? (
          <>
            <span className="text-xl text-lightGrey">
              {currentUser.first_name}'s Lobby
            </span>
            <button className="ml-4 bg-alternateBrown hover:bg-lightGrey hover:text-softBlack text-lightGrey font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-inner duration-300">
              Sign Out
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Header;

  
  
