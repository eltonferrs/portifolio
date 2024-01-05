import { ReactNode } from "react"
import { BsGithub } from "react-icons/bs";
import { IoArrowRedo } from "react-icons/io5";


interface cardProject{
    children: ReactNode;
    title: string;
    tec: string;
    code: string;
    deploy: string;
}

export const CardProject = ({children, title, tec, code, deploy}:cardProject) => {
    return(
        <div className="w-full flex flex-col gap-2 md:w-5/12 border-b border-gray-600 justify-between">
            <div>
                <h3 className=" font-bold text-2xl">{title}</h3>
                <div>
                    <p>linguagem: <span className="bg-primary-200 rounded p-1">{tec}</span></p>
                </div>
                {children}
            </div>
            <div className="flex w-full flex-row items-center justify-between font-mono text-sm my-5 ">
                <button><a className="flex items-center gap-2 hover:scale-125 ease-out duration-300" href={code} target="_blank"><BsGithub size={"1.5rem"}/> GitHub Code</a></button>
                <button><a className="flex items-center gap-2 hover:scale-125 ease-out duration-300" href={deploy} target="_blank"><IoArrowRedo size={"1.5rem"}/> Aplicação</a></button>
            </div>
        </div>
    )
}