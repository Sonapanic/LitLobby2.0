import { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const { currentUser, renderUrl } = useContext(AuthContext)

  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      if (currentUser !== null) {
        try{
          const response = await fetch(`${renderUrl}/books/${currentUser.userid}`)
          if (response.ok) {
            const bookData = await response.json()
            setBooks(bookData)
          } else {
            throw new Error('Book fetch response not ok')
          }
        } catch (err) {
          console.error(err)
        }
      }
    }
    fetchBooks()
  }, [currentUser])

  return (
    <DataContext.Provider
      value={{
        books
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
