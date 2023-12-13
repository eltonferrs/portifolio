import Image from 'next/image'
import project from "../../public/header-bg.png"
import { Header } from '@/components/Header';
import { TecIcons } from '@/components/TechIcons';
import { BsGithub } from "react-icons/bs";
import { CardProject } from '@/components/CardProjects';
import { CardContact } from '@/components/CardContact';
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Footer } from '@/components/Footer';







export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <section className="w-9/12 flex flex-col min-h-[83vh] items-center py-8 sm:p-16 bg-none lg:bg-[url('../../public/header-bg.png')] bg-right bg-no-repeat">
        <div className="w-full flex flex-col items-start gap-y-5">
          <div className="flex items-center w-full justify-between gap-1 lg:w-60">
            <img
              className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-12 h-12 rounded-full"
              src="/perfil.jpg"
              alt="my photo perfil"
            />
            <p>Hello, my name is Elton</p>
          </div>
          <div className=" w-full lg:w-2/5">
            <h1 className='text-4xl font-bold py-8'>I <span className='text-primary-200'>Love</span> creating and <span className='text-primary-200'>developing</span> projects</h1>
            <p className="text">Discover here in this environment, created especially for you, all my projects and technologies</p>
          </div>
          <div className="flex w-full items-center lg:w-2/5">
            <button className='p-4 bg-primary-200 rounded-md'>See Projects</button>
            <BsGithub size={"3rem"}/>
          </div>
          <TecIcons/>
        </div>
      </section>
      <section className="w-9/12 flex flex-col min-h-[83vh] items-center sm:p-16">
        <div className="w-full flex flex-col items-start gap-y-5">
          <div className=" w-full lg:w-2/5">
            <h2 className='text-4xl font-bold py-8'>My projects</h2>
            <p className="text">Projects created at<span>Kenzie Academy</span></p>
          </div>
          <div className="flex items-center w-full flex-col">
            <CardProject/>
            <CardProject/>
            <CardProject/>
            <CardProject/>
          </div>
        </div>
      </section>
      <section className="w-9/12 flex flex-col min-h-[83vh] items-center sm:p-16 lg:pe-0 lg:min-h-[75vh]">
        <div className="w-full flex flex-col items-center h-full lg:justify-between lg:flex-row lg:items-center">
          <div className=" w-full lg:w-2/5">
            <h2 className='text-4xl font-bold py-8'>Let's set up a conversation and <span className='text-primary-200'>develop our creativity</span> together?</h2>
            <p className="text">Advertise your brand organically within Dribbble's design inspiration feed.</p>
          </div>
          <div className="flex w-full flex-col lg:w-3/5 lg:items-end">
            <CardContact text="I'm available for a voice chat, let's about creativity together?" textBt='Call Now' title={'My phone'}>
              <FaWhatsapp className="bg-primary-400 p-3 rounded my-3" size={"4rem"} />
            </CardContact>
            <CardContact text='Send me an email reporting feedbacks, suggestions and ideas' textBt='Send email Now' title={'My email'}>
              <MdEmail className="bg-primary-500 p-3 rounded my-3" size={"4rem"}/>
            </CardContact>
            <CardContact text='We can create more constant interactions as well as a sharing network' textBt='Go to Telegram Now' title={'My email'}>
              <IoLogoLinkedin className="bg-primary-100 p-3 rounded my-3" size={"4rem"}/>
            </CardContact>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
