import AuthContext from "../context/AuthContext";
import { useContext } from "react";









const Header = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const signOut = () => {
    localStorage.removeItem('user')
    setCurrentUser(null)
  }

  return (
    <div className="h-[7dvh] bg-warmBrown w-screen flex items-center justify-between px-4 shadow-inner">
      <div>
        <span className="text-lightGrey text-xl">
          Lit<span className="text-testShadow">-</span><i className="text-softWhite">Lobby</i>
        </span>
      </div>
      {currentUser !== null && (
        <div className="flex items-center justify-center">
          <span className="text-xl text-lightGrey text-center">
            {currentUser.first_name}'s Lobby
          </span>
        </div>
      )}
      <div className="flex items-center justify-end">
        {currentUser !== null && (
          <button onClick={signOut} className="ml-4 bg-alternateBrown hover:bg-lightGrey hover:text-softBlack text-lightGrey font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-inner duration-300">
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};


export default Header;

  
  
