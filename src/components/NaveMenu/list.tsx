export const List = () =>{
    return(
        <ul className="flex flex-col justify-center bg-gray-100 ease-out duration-300 ">
            <li className="flex justify-center  ease-out duration-300"><a className=' text-base font-bold' href="#home">Home</a></li>
            <li className="flex justify-center  ease-out duration-300"><a className='text-base font-bold' href="#projects">Projetos</a></li>
            <li className="flex justify-center  ease-out duration-300"><a className='text-base font-bold ' href="#contact">Contato</a></li>
        </ul>
    )
}