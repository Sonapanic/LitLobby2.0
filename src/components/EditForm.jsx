import DataContext from "../context/DataContext";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const EditForm = ({ book }) => {
  const { setIsSelected, setToBeDeleted } = useContext(DataContext);
  const { renderUrl, currentUser } = useContext(AuthContext);
  const { title, author, description, total_pages, genre, pages_read } = book;

  const [descriptionValue, setDescriptionValue] = useState(description);
  function changeDescription(e) {
    setDescriptionValue(e.currentTarget.value);
  }

  const [genreValue, setGenreValue] = useState(genre);
  function changeGenre(e) {
    setGenreValue(e.currentTarget.value);
  }

  const [pageCountValue, setPageCountValue] = useState(total_pages);
  function changePageCount(e) {
    setPageCountValue(e.currentTarget.value);
  }

  const [pagesReadValue, setPagesReadValue] = useState(pages_read);
  function changePagesRead(e) {
    setPagesReadValue(e.currentTarget.value);
  }

  function handleCancel() {
    setIsSelected(null);
  }

  async function handleSave() {
    try {
      const bookEdit = {
        title: book.title,
        author: book.author,
        description: descriptionValue,
        genre: genreValue,
        total_pages: pageCountValue,
        pages_read: pagesReadValue,
      };
      await fetch(`${renderUrl}/books/${currentUser.userid}/${book.bookid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookEdit),
      });
      setIsSelected(null);
      setToBeDeleted(book)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col shadow-md rounded-lg bg-lightWhite p-2 mb-5 w-full h-full text-softBlack">
      <div>
        <h1>
          <i className="text-2xl font-semibold mb-2">{title}</i>
        </h1>
        <h2 className="text-lg font-semibold">{author}</h2>
        <div className="mt-4">
          <label>Genre: </label>
          <input className="px-1 text-sm focus:outline-none border-softBlack border-2 rounded-md" type="text" value={genreValue} onChange={changeGenre} />
        </div>
      </div>
      <div className="w-full flex justify-center text-center flex-wrap p-2">
        <h3 className="w-full font-semibold mb-2 ">Description</h3>
        <textarea
          onChange={changeDescription}
          value={descriptionValue}
          className="border-2 mb-4 rounded-md focus:outline-none border-softBlack text-sm resize-none p-2 w-[20dvw] h-[20dvh]"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col text-center">
          <label>Page Count</label>
          <input
            type="number"
            value={pageCountValue}
            onChange={changePageCount}
            className="border-2 border-softBlack rounded-md px-1 text-sm w-[10dvh] focus:outline-none"
          />
        </div>
        <span className="px-5 font-semibold text-lg mt-5">|</span>
        <div className="flex flex-col text-center">
          <label>Pages Read</label>
          <input
            type="number"
            value={pagesReadValue}
            onChange={changePagesRead}
            className="border-2 border-softBlack rounded-md px-1 w-[10dvh] text-sm focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-between p-2">
        <button onClick={handleCancel} className="underline text-testShadow">
          Cancel
        </button>
        <button onClick={handleSave} className="underline text-testShadow">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditForm;
