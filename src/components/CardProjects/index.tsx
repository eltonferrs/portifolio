export const CardProject = () => {
    return(
        <div className="w-full flex flex-col md:w-9/12">
            <h1>Projeto 1</h1>
            <div>
                <p>linguagem:</p>
            </div>
            <p>Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...</p>
            <div className="flex w-9/12 flex-row items-center justify-between font-mono text-sm my-5 ">
                <button>GitHub Code</button>
                <button>Aplicação</button>
            </div>
        </div>
    )
}