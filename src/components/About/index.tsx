export const About = () =>{
    return(
        <section className="w-9/12 flex flex-col min-h-[83vh] items-center sm:p-16">
        <div className="w-full flex flex-col items-start gap-y-5">
          <div className=" w-full lg:w-2/5">
            <h2 className='text-4xl font-bold py-4'>Experiências profissionais</h2>
            <p className="text">Um pouco da minha trajetória de aprendizado e conquistas, A minha principal característica é o aprendizado
rápido, fazendo com que eu busque, discuta e aprenda novas metodologias</p>
          </div>
          <div className="flex items-center gap-6 w-full flex-col">
            <div>
                <h3 className=" font-bold text-2xl">Monitor de ensino Front-end</h3>
                <p className="text">Kenzie academy Brazil | Maio 2023 até o monento</p>
                <p className=" max-w-xl">
                Atendimento a estudantes de programação;
                Correção e orientação de código;
                Ajuda na resolução de dúvidas e desenvolvimento de código
                </p>
                <div className=" py-2">
                    <p>
                        <span className="bg-primary-200 rounded p-1 m-2">Html</span>
                        <span className="bg-primary-200 rounded p-1 m-2">Css</span>
                        <span className="bg-primary-200 rounded p-1 m-2">Javascript</span>
                        <span className="bg-primary-200 rounded p-1 m-2">React</span>
                    </p>
                </div>
            </div>
            <div>
                <h3 className=" font-bold text-2xl">Técnico em Urna eletrônica</h3>
                <p className="text">Solução serviços comercio e construção LTDA | Agosto 2022 Outubro 2022</p>
                <p className=" max-w-xl">
                Suporte técnico durante as eleições; Treinamento, soluções e operação em urnas; Automatizar,
                disponibilizar e otimizar processos e recursos.
                </p>
    
            </div>
          </div>
        </div>
      </section>
    )
}