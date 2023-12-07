const SearchSelection = ({ book }) => {
  const { title, description, pageCount } = book.volumeInfo;
  const author = book.volumeInfo.authors;
  let thumbnail = "No image available";
  if (book.volumeInfo.imageLinks) {
    thumbnail = book.volumeInfo.imageLinks.smallThumbnail;
  }
  return (
    <li className="flex w-1/2 h-80 flex-row flex-wrap border">
      <div className="w-full text-xl pt-2">
        <h1 className="w-full text-xl">
          <i>{title}</i>
        </h1>
        <h2 className="w-full text-lg font-semibold">
          {author ? author.join(", ") : "No author available."}
        </h2>
      </div>

      <div className="w-1/4 pl-2 flex justify-center items-center">
        <img src={thumbnail} className="h-40 w-28" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <p className="text-sm overflow-auto bg-softWhite border-softBlack max-h-56 mb-4 p-2">
          {description ? description : "No description available"}
        </p>
      </div>
      <div className="w-1/4">
        <button className="h-8 ml-4 mt-20 px-4 rounded-md shadow-md hover:shadow-inner hover:bg-alternateBrown duration-300 bg-warmBrown text-softWhite font-semibold">
          Select
        </button>
      </div>
    </li>
  );
};

export default SearchSelection;
