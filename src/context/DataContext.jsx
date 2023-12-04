import { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const { currentUser, renderUrl, token, storedUser } = useContext(AuthContext)

  const [books, setBooks] = useState(null);

  const fetchBooks = async () => {
    if (currentUser) {
      try {
        const headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
        const response = await fetch(`${renderUrl}/books/${currentUser.userid}`, {headers: headers})
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

  useEffect(() => {
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
