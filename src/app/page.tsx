import { Header } from '@/components/Header';
import { TecIcons } from '@/components/TechIcons';
import { BsGithub } from "react-icons/bs";
import { CardProject } from '@/components/CardProjects';
import { CardContact } from '@/components/CardContact';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Footer } from '@/components/Footer';
import { About } from '@/components/About';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <section id="home" className="w-9/12 mt-32 flex flex-col min-h-[73vh] items-center py-8 sm:p-16 bg-none lg:bg-[url('../../public/header-bg.png')] bg-right bg-no-repeat sm:mt-24">
        <div className="w-full flex flex-col items-start gap-y-5">
          <div className="flex items-center w-full justify-between gap-1 lg:w-60">
            <img
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-12 h-12 rounded-full"
              src="/perfil.jpg"
              alt="my photo perfil"
            />
            <p className='text-l font-bold'>Ola, meu nome é Elton</p>
          </div>
          <div className=" w-full lg:w-2/5">
            <h1 className='text-4xl font-bold py-8'>Eu <span className='text-primary-200'>amo</span> criar e <span className='text-primary-200'>desenvolver</span> projetos</h1>
            <p className="text">Apaixonado desde criança por ciências exatas, comecei a estudar desenvolvimento web com o desejo de entender e criar minhas próprias aplicações.</p>
          </div>
          <div className="flex w-full gap-3 items-center lg:w-2/5">
            <a className='p-4 bg-primary-200 rounded-md hover:scale-125 ease-out  duration-300' href="https://github.com/eltonferrs" target='_blank'>See Projects</a>
            <BsGithub size={"3rem"}/>
          </div>
          <TecIcons/>
        </div>
      </section>
      <section id='projects' className="w-9/12 flex flex-col min-h-[83vh] items-center sm:p-16">
        <div className="w-full flex flex-col items-start gap-y-5">
          <div className=" w-full lg:w-2/5">
            <h2 className='text-4xl font-bold py-8'>My projects</h2>
            <p className="text">Alguns projetos criados junto ao curso da <span className=" text-primary-500">Kenzie Academy</span></p>
          </div>
          <div className="flex items-center gap-1 w-full flex-col md:flex-row md:flex-wrap md:justify-between md:items-stretch">
            <CardProject title='Shorts Summary' tec='JavaScript'
            code='https://github.com/eltonferrs/projetoNlwIa'
            deploy='https://projeto-nlw-ia.vercel.app/'>
              <p className='text'>Shorts Summary utiliza modelos de IA no navegador e servidor javascript, apartir de modelos pré-treinados para relizar tarefas, o short vídeo do youtube e capturado pela url informada, feito o download do aúdio, depois é feito a transcrição e o resumo do conteúdo e renderizado em tela.</p>
            </CardProject>
            <CardProject title='Kenzie-hub' tec='JavaScript'
            code='https://github.com/eltonferrs/kenzie-hub'
            deploy='https://react-entrega-kenzie-hub-eltonferrs.vercel.app/'>
              <p className='text'>A aplicação foi desenvolvida com o intuito de garantir eficiência, segurança e uma ótima experiência do usuário. A escolha do React para um desenvolvimento mais eficiente e uma experiência de usuário dinâmica.</p>
            </CardProject>
            <CardProject title='ClientAgender' tec='TypeScript'
            code='https://github.com/eltonferrs/clientAgender-front'
            deploy='https://fullstack-kenzie-front-eltonferrs.vercel.app/'>
              <p className='text'>A aplicação foi desenvolvida com o intuito de garantir eficiência, segurança e uma ótima experiência do usuário. A escolha do React, complementado pelo TypeScript, proporcionou um desenvolvimento mais seguro e escalável. TypeScript trouxe a vantagem da tipagem estática, aumentando a confiabilidade do código e facilitando a manutenção.</p>
            </CardProject>
            <CardProject title='ClientAgender-API' tec='TypeScript'
            code='https://github.com/eltonferrs/projetoNlwIa'
            deploy='https://fullstack-kenzie-front-eltonferrs.vercel.app/'>
              <p className='text'>backend da aplicação ClientAgender - Um agenda web para seus contatos! O objetivo dessa aplicação é demonstrar conhecimento em tecnologias backend, organização de código e fornecer dados para criação de interfaces.</p>
            </CardProject>
          </div>
        </div>
      </section>
      <About/>
      <section id='contact' className="w-9/12 flex flex-col min-h-[83vh] items-center sm:p-16 lg:pe-0 lg:min-h-[75vh]">
        <div className="w-full flex flex-col items-center h-full lg:justify-between lg:flex-row lg:items-center">
          <div className=" w-full lg:w-2/5">
            <h2 className='text-4xl font-bold py-8'>
Vamos marcar uma conversa e <span className='text-primary-200'>desenvolver nossa criatividade</span> juntos?</h2>
            
          </div>
          <div className="flex w-full flex-col lg:w-3/5 lg:items-end">
            <CardContact href='https://wa.me/5585981597573' text="Estou disponível para um chat de voz, vamos juntos falar de criatividade?" title={'Meu Número'}>
              <FaWhatsapp className="bg-primary-400 p-3 rounded my-3 hover:p-1 ease-out  duration-300 " size={"4rem"} />
            </CardContact>
            <CardContact href='mailto:eltonferreira9728@gmail.com' text='Envie-me um e-mail relatando feedbacks, sugestões e ideias' title={'Meu email'}>
              <MdEmail className="bg-primary-500 p-3 rounded my-3 hover:p-1 ease-out duration-300" size={"4rem"}/>
            </CardContact>
            <CardContact href='https://www.linkedin.com/in/elton-ferreira-141435216/' text='Podemos criar interações mais constantes e também uma rede de compartilhamento' title={'Meu linkdin'}>
              <IoLogoLinkedin className="bg-primary-100 p-3 rounded my-3 hover:p-1  ease-out duration-300" size={"4rem"}/>
            </CardContact>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
