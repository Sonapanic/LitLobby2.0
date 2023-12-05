import { useState } from "react"




const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = async () => {
        try {

            const response = await fetch(`https://openlibrary.org/search.json${searchValue}`)
            if (!response.ok) {
                console.error('Book fetch did not go through') 
            } 
            console.log(response)

        } catch(err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const {value} = e.target
        setSearchValue(`${value}`)
    }


    return (
        <div className="flex flex-row h-8 w-full items-align">
            <input onChange={handleChange} className="px-2 text-softBlack rounded-md shadow-sm" type="text" placeholder="Search..."
            
            />
            <button onClick={handleSearch} className="ml-4 px-4 rounded-md shadow-md hover:shadow-inner hover:bg-alternateBrown duration-300 bg-warmBrown text-softWhite font-semibold">Search</button>
        </div>
    )
}






export default SearchBar