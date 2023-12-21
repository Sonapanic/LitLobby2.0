import BookButton from "./BookButton";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import EditForm from "./EditForm";

const Book = ({ book }) => {
  const { title, author, description, total_pages, pages_read, genre, thumbnail } = book;
  const { isSelected } = useContext(DataContext);
  console.log(book)

  if (isSelected === book) {
    return <EditForm book={book} />;
  }

  return (
    <div className="border flex flex-col text-softBlack bg-lightWhite rounded-xl p-6 mb-5 w-full h-full">
      <div className="flex justify-between mb-4">
        <div>
          <h1>
            <i className="text-2xl font-semibold mb-2">{title}</i>
          </h1>
          <h2 className="text-lg font-semibold">{author}</h2>
          <h3 className=" mb-2 font-semibold">{genre}</h3>
        </div>
        <div className="w-[7dvw] pl-2 flex justify-center items-center">
            <img src={thumbnail} className="h-[13dvh] w-[4dvw]" />
        </div>
      </div>

      <p className=" flex-grow font-book">{description}</p>
      <div className="flex-grow flex justify-center py-2">
        <span className="mr-5 w-full flex-grow flex justify-center font-semibold">
          Page Count: {total_pages} | Completion:{" "}
          {Math.floor((pages_read / total_pages) * 100)}%
        </span>
      </div>
      <div className="flex justify-between">
        <BookButton btnText={"Edit"} book={book} />
        <BookButton btnText={"Delete"} id={book.bookid} />
      </div>
    </div>
  );
};

export default Book;
