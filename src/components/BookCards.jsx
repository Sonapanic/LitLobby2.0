import DataContext from "../context/DataContext";
import { useContext } from "react";
import Book from "./Book.jsx";

const BookCards = () => {
  const { books, setToBeAdded } = useContext(DataContext);

  const handleAdd = () => {
    setToBeAdded(true);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center mt-5 mb-6">
        <button
          onClick={handleAdd}
          className="py-2 px-4 rounded-md shadow-md bg-midBrown hover:shadow-inner hover:bg-warmBrown duration-300 text-softWhite font-semibold"
        >
          Add a Book
        </button>
      </div>
      <div className="flex items-center w-[40dvw] justify-center p-2 mb-20 flex-wrap h-[64dvh] overflow-auto">
        {books && books.length > 0 ? (
          <div className="flex items-center justify-center flex-col">
            <ul className="flex-row flex-wrap flex ">
              {books.map((book, index) => {
                return <Book key={index} book={book} />;
              })}
            </ul>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default BookCards;



