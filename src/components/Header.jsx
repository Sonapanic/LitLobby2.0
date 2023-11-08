import AuthContext from "../context/AuthContext"
import { useContext } from "react"



const Header = () => {

    const { currentUser } = useContext(AuthContext)


    return (
        <div className="h-20 bg-blue-300 w-full flex items-center">
            <div className="ml-4">
                <span className="text-red-800 text-xl">
                    Lit<i className="text-blue-900">Lobby</i>
                </span>
            </div>
            <div className="flex items-center justify-center flex-1">
                {currentUser !== null ? (
                    <span className="text-center">
                        {currentUser.first_name}'s Lobby
                    </span>
                ) : (
                    <span></span>
                )}
            </div>
            {currentUser ? <div className="ml-12">
                <span>{currentUser.first_name}'s Lobby</span>
            </div> : <div></div>}
        </div>
    );
};








export default Header