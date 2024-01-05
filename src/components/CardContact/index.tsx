import { ReactNode } from "react"
import Link from 'next/link';

interface cardContact{
    children: ReactNode;
    title: string;
    text: string;
    href: string;
}

export const CardContact = ({children,title,text, href}:cardContact) => {
    return(
        <div className="w-full flex flex-row gap-5 lg:w-9/12 lg:justify-end">
            <Link href={href} target="_blank">{children}</Link>
            <div className="w-3/4">
                <h2 className='text-2xl font-bold py-2'>{title}</h2>
                <p className="text">{text}</p>
                
            </div>
        </div>
    )
}