



const SearchSelection = ({ book }) => {

    const { title, description, pageCount } = book.volumeInfo
    const author = book.volumeInfo.authors
    let thumbnail = 'No image available'
    if (typeof book.volumeInfo.imageLinks.thumbnail === 'string') {
        thumbnail = book.volumeInfo.imageLinks.thumbnail
    }
    return (
        <li className="flex w-1/2 h-80 flex-col border ">
                <h1 className=""><i>{title}</i></h1>
                <h2>{author ? author.join(', ') : 'No author available.'}</h2>
                <img src={thumbnail}/>
        </li>
    )
}







export default SearchSelection