import { useState, useContext } from "react"
import DataContext from "../context/DataContext"
import SearchSelection from "./SearchSelection"


const SearchBar = () => {

    const { API_KEY } = useContext(DataContext)

    const [searchValue, setSearchValue] = useState('')
    const [bookList, setBookList] = useState({})

    const handleSearch = async () => {
        try {

            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}`)
            if (!response.ok) {
                console.error('Book fetch did not go through') 
            } 
            const books = await response.json()
            console.log(books)
            setBookList(books)

        } catch(err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const {value} = e.target
        setSearchValue(`${value}`)
    }


    return (

        <div className="flex flex-row justify-center h-8 w-full items-align flex-wrap">
            <input onChange={handleChange} className="border-2 border-white hover:border-softBlack duration-300 px-2 text-softBlack rounded-md shadow-sm" type="text" placeholder="Search..."
            
            />
            <button onClick={handleSearch} className="ml-4 px-4 rounded-md shadow-md hover:shadow-inner hover:bg-alternateBrown duration-300 bg-warmBrown text-softWhite font-semibold">Search</button>
            {bookList.items ? <ul className="w-full text-center">
                {bookList.items.map((book, index) => {
                return <SearchSelection key={index} book={book}/>
            })}
            </ul>
            
        :
        <span></span>
        }
        </div>
    )
}






export default SearchBar