import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiTailwindcss } from "react-icons/si";





export const TecIcons = () => {
    return(
        <div className="flex w-full flex-wrap md:w-3/5 gap-3 my-4">
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300" ><FaHtml5 size={"4rem"} className={"text-gray-300"} />HTML</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><FaCss3Alt size={"4rem"} className={"text-gray-300"}/>CSS</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><IoLogoJavascript size={"4rem"} className={"text-gray-300"}/>jAVASCRIPT</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><FaNodeJs size={"4rem"} className={"text-gray-300"}/>NODEJS</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><FaReact size={"4rem"} className={"text-gray-300"}/>REACT</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><SiTailwindcss size={"4rem"} className={"text-gray-300"}/>TAILWIND</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><BiLogoTypescript size={"4rem"} className={"text-gray-300"}/>TYPESCRIPT</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><BiLogoPostgresql size={"4rem"} className={"text-gray-300"}/>POSTGRES</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><SiExpress size={"4rem"} className={"text-gray-300"}/>EXPRESS</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><FaPython size={"4rem"} className={"text-gray-300"}/>PYTHON</div>
            <div className="flex flex-col items-center gap-1 font-bold text-gray-300"><FaGitAlt size={"4rem"} className={"text-gray-300"}/>GIT</div>
        </div>
    )
}