import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import BookCards from './BookCards'




const Dashboard = () => {
    
    const { currentUser } = useContext(AuthContext)
    const {username, email, first_name, last_name } = currentUser

    return (
        <BookCards />
    )
}









export default Dashboard