import { IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";

export const Footer = () => {
    return(
        <div className="w-full flex justify-center bg-gray-100">
            <div className="flex w-9/12 flex-col items-center  font-mono text-sm my-5 md:flex-row">
                <div className="w-full flex flex-col items-center md:flex-row md:gap-14">
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
                <div className="flex">
                    <IoLogoInstagram className="bg-primary-500 p-3 rounded-full" size={"3rem"} />
                    <IoLogoLinkedin className="bg-primary-100 p-3 rounded-full" size={"3rem"} />
                </div>
            </div>
      </div>
    )
} 