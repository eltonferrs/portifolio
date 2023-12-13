import { ReactNode } from "react"

interface cardContact{
    children: ReactNode;
    title: string;
    text: string;
    textBt: string;
}

export const CardContact = ({children,title,text,textBt}:cardContact) => {
    return(
        <div className="w-full flex flex-row gap-5 lg:w-9/12 lg:justify-end">
            {children}
            <div className="w-3/4">
                <h2 className='text-2xl font-bold py-2'>{title}</h2>
                <p className="text">{text}</p>
                <button>{textBt}</button>
            </div>
        </div>
    )
}