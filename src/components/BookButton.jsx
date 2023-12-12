import { useContext } from "react";
import DataContext from "../context/DataContext";
import AuthContext from "../context/AuthContext";

const BookButton = ({ btnText, book, id }) => {
  const { renderUrl, currentUser } = useContext(AuthContext);
  const { setIsSelected, setToBeDeleted } = useContext(DataContext);

  function handleEdit() {
    setIsSelected(book);
  }

  async function handleDelete() {
    try {
      await fetch(`${renderUrl}/books/${currentUser.userid}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setToBeDeleted(book)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button
      onClick={btnText === "Edit" ? handleEdit : handleDelete}
      className="bg-warmBrown hover:bg-alternateBrown text-softWhite font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-inner duration-300"
    >
      {btnText}
    </button>
  );
};

export default BookButton;
