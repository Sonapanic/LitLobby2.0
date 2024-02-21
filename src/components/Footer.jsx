import About from "./About"
import { Link } from "react-router-dom";
// Will have links for about, roadmap, contact me


const Footer = () => {
    return (
        <div className="flex w-[100dvw] h-28 underline bg-gray-200 shadow-inner items-center justify-around text-darkGreen">
            <Link to={"about"} className=" ">About</Link>
            <Link to={"contact"} className="">Contact</Link>
        </div>
    )
}







export default Footer