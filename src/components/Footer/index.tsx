import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

export const Footer = () => {
    return(
        <div className="w-full flex justify-center bg-gray-100">
            <div className="flex w-9/12 flex-col items-center  font-mono text-sm my-5 md:flex-row">
                <div className="w-full flex flex-col items-center md:flex-row md:gap-14 md:items-center">
                    <img
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-12 h-12 rounded-full"
                    src="/perfil.jpg"
                    alt="my photo perfil"
                    />
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className='text-xl font-bold py-4'>Thank you!</h2>
                        <p className="text-gray-400 text-center text-base font-normal leading-7">Follow me on my social networks and let's talk</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link href="https://www.instagram.com/elton_ferrs/" target="_blank" ><IoLogoInstagram className="bg-primary-500 p-3 rounded-full hover:p-1 ease-out duration-300" size={"3rem"} /></Link>
                    <Link href="https://www.linkedin.com/in/elton-ferreira-141435216/" target="_blank" ><IoLogoLinkedin className="bg-primary-100 p-3 rounded-full hover:p-1 ease-out duration-300" size={"3rem"} /></Link>
                </div>
            </div>
      </div>
    )
} 