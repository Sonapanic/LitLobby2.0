import { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const { currentUser, renderUrl } = useContext(AuthContext)

  useEffect(() => {
    const fetchBooks = async () => {
      // const response = await fetch(`${renderUrl}/books`)
    }


  }, [currentUser])

  const [books, setBooks] = useState(null);
  return (
    <DataContext.Provider
      value={{
        books,
        setBooks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
