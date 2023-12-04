






const BookButton = ({ btnText }) => {
  return (
    <button className="bg-warmBrown hover:bg-alternateBrown text-softWhite font-semibold py-2 px-4 rounded-md shadow-md hover:shadow-inner duration-300">
      {btnText}
    </button>
  );
};

export default BookButton;
