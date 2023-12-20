import DataContext from "../context/DataContext";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SearchSelection = ({ book }) => {
  const { showToast, currentUser, renderUrl } = useContext(AuthContext);
  const { title, description, pageCount } = book.volumeInfo;
  const author = book.volumeInfo.authors;
  const genre = book.volumeInfo.categories;

  const addBook = async () => {
    try {
      const newBook = {
        userId: currentUser.userid,
        title,
        author: author ? author.join(", ") : "No author available",
        genre: genre ? genre.join(", ") : "No genre information available",
        description,
        total_pages: pageCount,
        pages_read: 0,
      };

      await fetch(`${renderUrl}/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      showToast(`Added "${title}" to your lobby`);
    } catch (err) {
      console.error(err);
    }
  };

  // const handleClick = () => {
  //   addBook()
  // }

  let thumbnail = "No image available";
  if (book.volumeInfo.imageLinks) {
    thumbnail = book.volumeInfo.imageLinks.smallThumbnail;
  }
  return (
    <li className="flex w-1/2 h-80 flex-grow flex-row flex-wrap border">
      <div className="w-full text-xl pt-2">
        <h1 className="w-full text-xl">
          <i>{title}</i>
        </h1>
        <h2 className="w-full text-lg font-semibold">
          {author ? author.join(", ") : "No author available."}
        </h2>
        <h3 className="font-semibold text-xs">Genre: {genre}</h3>
      </div>

      <div className="w-1/4 pl-2 flex justify-center items-center">
        <img src={thumbnail} className="h-[13dvh] w-[4dvw]" />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <p className="text-sm overflow-auto bg-softWhite border-softBlack max-h-56 mb-4 p-2 font-book">
          {description ? description : "No description available"}
        </p>
      </div>
      <div className="ml-4">
        <button onClick={addBook} className="h-8 px-4 mt-20 rounded-md shadow-md hover:shadow-inner hover:bg-alternateBrown duration-300 bg-warmBrown text-softWhite font-semibold">
          Select
        </button>
      </div>
    </li>
  );
};

export default SearchSelection;
