import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiNodejs } from "react-icons/di";


export const TecIcons = () => {
    return(
        <div className="flex w-full items-center md:w-3/5 gap-3 my-4">
            <FaHtml5 size={"4rem"} className={"text-gray-400"} />
            <FaCss3Alt size={"4rem"} className={"text-gray-400"}/>
            <IoLogoJavascript size={"4rem"} className={"text-gray-400"}/>
            <DiNodejs size={"4rem"} className={"text-gray-400"}/>
            <FaReact size={"4rem"} className={"text-gray-400"}/>
        </div>
    )
}