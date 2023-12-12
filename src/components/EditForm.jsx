import DataContext from "../context/DataContext";
import { useContext, useState } from "react";

const EditForm = ({ book }) => {
  const { title, author, description, total_pages } = book;

  const [descriptionValue, setDescriptionValue] = useState(description)
  function changeDescription(e) {
    setDescriptionValue(e.currentTarget.value)
  }

  const [pageCountValue, setPageCountValue] = useState(total_pages)
  function changePageCount(e) {
    setPageCountValue(e.currentTarget.value)
  }

  const [pagesReadValue, setPagesReadValue] = useState(0)
  function changePagesRead(e) {
    setPagesReadValue(e.currentTarget.value)
  }



  return (
    <div className="flex flex-col border-softBlack border-2 p-2 mb-5 w-full h-full text-softBlack">
      <div>
        <h1>
          <i className="text-2xl font-semibold mb-2">{title}</i>
        </h1>
        <h2 className="text-lg font-semibold">{author}</h2>
      </div>
      <div className="w-full flex justify-center text-center flex-wrap p-2">
        <h3 className="w-full font-semibold mb-2 ">Description</h3>
        <textarea onChange={changeDescription} value={descriptionValue} className="border-2 rounded-md focus:outline-none border-softBlack text-sm bg-softWhite resize-none p-2 w-[20dvw] h-[20dvh]" />
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col text-center">
            <label>Page Count</label>
            <input type="number" value={pageCountValue} onChange={changePageCount} className="bg-softWhite border-2 border-softBlack rounded-md p-1 text-xs focus:outline-none"/>
        </div>
        <span className="px-5 font-semibold text-lg mt-5">|</span>
        <div className="flex flex-col text-center">
            <label>Pages Read</label>
            <input type="number" value={pagesReadValue} onChange={changePagesRead} className="bg-softWhite border-2 border-softBlack rounded-md p-1 text-xs focus:outline-none"/>
        </div>
      </div>
      <div className="flex justify-between">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default EditForm;
