import { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
