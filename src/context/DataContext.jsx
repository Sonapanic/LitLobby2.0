import { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { currentUser, renderUrl, token } = useContext(AuthContext);
  const bgUrl = 'https://c1.wallpaperflare.com/path/296/248/908/books-library-room-school-5131a7d71e8765edda6c070f015254bf.jpg'


  const [books, setBooks] = useState(null);
  const [isSelected, setIsSelected] = useState(null)
  const [toBeAdded, setToBeAdded] = useState(false)
  const [toBeDeleted, setToBeDeleted] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      if (currentUser) {
        try {
          const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };
          const response = await fetch(
            `${renderUrl}/books/${currentUser.userid}`,
            { headers: headers }
          );
          if (response.ok) {
            const bookData = await response.json();
            setBooks(bookData);
          } else {
            throw new Error("Book fetch response not ok");
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchBooks();
  }, [currentUser, toBeAdded, toBeDeleted]);


  return (
    <DataContext.Provider
      value={{
        books,
        isSelected, 
        setIsSelected,
        toBeAdded,
        setToBeAdded,
        setToBeDeleted,
        bgUrl
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
