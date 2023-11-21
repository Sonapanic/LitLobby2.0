


const Book = ({ book }) => {

    const { title, author, description, total_pages, pages_read } = book

    return (
        <div className="flex flex-wrap border-black border-2 p-2">
            <div className="p-2">{title}</div>
            <div className="p-2">{author}</div>
        </div>
    )
}




export default Book