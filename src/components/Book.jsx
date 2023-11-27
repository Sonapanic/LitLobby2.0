


const Book = ({ book }) => {
    const { title, author, description, total_pages, pages_read } = book

    return (
        <div className="flex flex-col border-black border-2 p-2 mb-5 w-full h-full">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <h2 className="text-lg font-semibold mb-2">{author}</h2>
            <p className="text-sm flex-grow">{description}</p>
        </div>
    )
}

export default Book;
