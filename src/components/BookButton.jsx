import { useContext } from "react";
import DataContext from "../context/DataContext";







const BookButton = ({ btnText, book }) => {

  const { setIsSelected } = useContext(DataContext)

  function handleEdit() {
    setIsSelected(book)
  }

  async function handleDelete() {
    try {



    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button onClick={btnText === 'Edit' ? handleEdit : handleDelete} className="bg-warmBrown hover:bg-alternateBrown text-softWhite font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-inner duration-300">
      {btnText}
    </button>
  );
};

export default BookButton;
