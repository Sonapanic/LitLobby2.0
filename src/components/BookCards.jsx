import DataContext from "../context/DataContext";
import { useContext } from "react";
import Book from './Book.jsx'

const BookCards = () => {
  const { books } = useContext(DataContext);

  return (
    <div className="flex items-center w-[70dvw] h-[90dvh] justify-center border-2 p-2">
      {books && books.length > 0 ? (
        <ul className="justify-between">
          {books.map((book, index) => {
            return <Book key={index} book={book}/>;
          })}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default BookCards;
