import { useContext } from "react"
import AuthContext from "../context/AuthContext"




const Dashboard = () => {
    
    const { currentUser } = useContext(AuthContext)


    return (
        <ul>
            {Object.values(currentUser).map((elem) => <li>{elem}</li>)}
        </ul>
    )
}









export default Dashboard