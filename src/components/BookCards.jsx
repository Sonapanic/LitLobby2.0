import DataContext from "../context/DataContext";
import { useContext } from "react";
import Book from './Book.jsx'

const BookCards = () => {
  const { books } = useContext(DataContext);

  return (
    <div className="flex items-center w-[80dvw] h-f justify-center border-2 p-2 mt-20 mb-20">
      {books && books.length > 0 ? (
        <ul className="flex-row flex-wrap flex w-8/12">
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
