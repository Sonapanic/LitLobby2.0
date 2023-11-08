import Book from './Book'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'




const BookCards = async () => {

    const { renderURL } = useContext(AuthContext)
    // const books = await fetch(`${renderURL}/books`)

    return (
        <div>

        </div>
    )

}





export default BookCards