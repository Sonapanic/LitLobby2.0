import { useContext } from "react"
import AuthContext from "../context/AuthContext"




const Dashboard = () => {
    
    const { currentUser } = useContext(AuthContext)
    const {username, email, first_name, last_name } = currentUser

    return (
        <span>Welcome to LitLobby, {first_name}!</span>
    )
}









export default Dashboard