import BookButton from './BookButton'


const Book = ({ book }) => {
  const { title, author, description, total_pages, pages_read } = book;

  return (
    <div className="flex flex-col border-black border-2 p-2 mb-5 w-full h-full">
      <h1>
        <i className="text-2xl font-semibold mb-2">{title}</i>
      </h1>
      <h2 className="text-lg font-semibold mb-2">{author}</h2>
      <p className="text-sm flex-grow">{description}</p>
      <div className="flex-grow flex justify-center py-2">
        <span className="mr-5">
          Page Count: {total_pages}    |    Completion: {pages_read / total_pages}%
        </span>
      </div>
      <div className="flex justify-between">
        <BookButton btnText={'Edit'}/>
        <BookButton btnText={'Delete'}/>
      </div>
    </div>
  );
};

export default Book;
