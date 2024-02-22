import About from "./About"
import { Link } from "react-router-dom";
// Will have links for about, roadmap, contact me


const Footer = () => {
    return (
        <div className="flex w-[100dvw] h-28 underline bg-gradient-to-l from-darkBrown via-viaBrown to-warmBrown shadow-inner items-center justify-around text-lightGrey">
            <Link to={"about"} className=" ">About</Link>
            <Link to={"contact"} className="">Contact</Link>
        </div>
    )
}







export default Footer