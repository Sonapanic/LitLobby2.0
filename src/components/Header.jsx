import AuthContext from "../context/AuthContext"
import { useContext } from "react"


const Header = () => {

    const { currentUser } = useContext(AuthContext)

    return (
        <div className="h-20 bg-blue-300 w-full items-center flex ">
            <div className="ml-4">
                <span className="text-red-800 text-xl">Lit{<i className="text-blue-900">Lobby</i>}</span>
            </div>
            {currentUser ? <div className="ml-12">
                <span>{currentUser.first_name}'s Lobby</span>
            </div> : <div></div>}
        </div>
    )
}







export default Header