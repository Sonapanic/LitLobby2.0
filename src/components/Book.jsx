import BookButton from './BookButton'
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import EditForm from './EditForm';


const Book = ({ book }) => {
  const { title, author, description, total_pages, pages_read, genre } = book;
  const { isSelected } = useContext(DataContext)

  if (isSelected === book) {
    return <EditForm book={book}/>
  }

  return (
    <div className="flex flex-col bg-lightWhite rounded-lg shadow-md p-2 mb-5 w-full h-full text-softBlack">
      <h1>
        <i className="text-2xl font-semibold mb-2">{title}</i>
      </h1>
      <h2 className="text-lg font-semibold mb-2">{author}</h2>
      <h3>Genre: {genre}</h3>
      <p className="text-sm flex-grow">{description}</p>
      <div className="flex-grow flex justify-center py-2">
        <span className="mr-5 w-full flex-grow flex justify-center">
          Page Count: {total_pages}    |    Completion: {Math.floor((pages_read / total_pages) * 100)}%
        </span>
      </div>
      <div className="flex justify-between">
        <BookButton btnText={'Edit'} book={book}/>
        <BookButton btnText={'Delete'} id={book.bookid}/>
      </div>
    </div>
  );
};

export default Book;
