import { useState, useContext } from "react";
import DataContext from "../context/DataContext";
import SearchSelection from "./SearchSelection";

const SearchBar = () => {
  const { setToBeAdded } = useContext(DataContext);

  const [searchValue, setSearchValue] = useState("");
  const [bookList, setBookList] = useState({});

  const handleBack = () => {
    setToBeAdded(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&maxResults=40`
      );
      if (!response.ok) {
        console.error("Book fetch did not go through");
      }
      const books = await response.json();
      console.log(books);
      setBookList(books);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(`${value}`);
  };

  return (
    <div className="flex flex-col flex-wrap">
      <div className="w-full flex justify-center">
        <button
          className="mr-8 mt-4 text-testShadow underline"
          onClick={handleBack}
        >
          Back
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-row justify-center items-align box-border flex-wrap"
      >
        <div className="w-full flex justify-center">
          <input
            onChange={handleChange}
            className="h-8 border w-80 mt-20 border-white focus:border-testShadow focus:outline-none focus:searchbar-box-shadow duration-300 px-2 text-softBlack rounded-md shadow-sm"
            type="text"
            placeholder="Search books and authors..."
          />
          <input
            type="submit"
            className="h-8 ml-4 mt-20 px-4 cursor-pointer rounded-md shadow-md hover:shadow-inner hover:bg-alternateBrown duration-300 bg-warmBrown text-softWhite font-semibold"
          ></input>
        </div>

        {bookList.items ? (
          <div className="justify-center flex-grow flex text-center mt-10">
            <ul className="overflow-auto flex-grow border-box border border-softBlack flex-wrap flex h-[75dvh] w-[30dvw]">
              {bookList.items.map((book, index) => {
                return <SearchSelection key={index} book={book} />;
              })}
            </ul>
          </div>
        ) : (
          <span></span>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
