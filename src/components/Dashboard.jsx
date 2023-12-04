import { useContext } from "react"
import AuthContext from "../context/AuthContext"
import BookCards from './BookCards'
import DataContext from "../context/DataContext"
import AddForm from './AddForm'


const Dashboard = () => {
    const { toBeAdded } = useContext(DataContext)
    const { currentUser } = useContext(AuthContext)
    const { id, username, email, first_name, last_name } = currentUser

    if(toBeAdded) {
        return <AddForm />
    }

    return <BookCards />

    
}









export default Dashboard