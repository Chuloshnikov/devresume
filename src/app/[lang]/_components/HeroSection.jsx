import Container from './Container'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTsnode, SiMongodb, SiTailwindcss, SiMui } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandPrisma } from "react-icons/tb";


const HeroSection = ({ data }) => {
  const { title,  contact_me_btn, description, picture } = data;

  return (
      <>
      <Container className="flex flex-wrap-reverse lg:flex-nowrap gap-2 pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10">
          <div className="max-w-2xl mb-8 pr-3">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
                {title}
            </h1>
            <p className="py-5 text-base xl:text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
              {description}
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="#contact"
                className="px-7 py-3 text-white text-base xl:text-xl bg-orange-500 hover:bg-orange-700 duration-300 rounded-md"
              >
                {contact_me_btn}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full lg:w-1/2">
          <div 
          className='absolute -top-3 left-0 w-full h-[100px] bg-black rotate-[17deg] flex items-center justify-center gap-2'
          >
            <FaReact className='text-white w-8 h-8' title='React.js'/>
            <SiNextdotjs className='text-white w-8 h-8' title='Next.js'/>
            <SiTsnode className='text-white w-8 h-8' title='Typescript'/>
            <IoLogoNodejs className='text-white w-9 h-9' title='Node.js'/>
          </div>
          <Image
            src={picture.filename}
            width={529}
            height={529}
            className={"object-cover rounded-full w-[89%] xl:w-[80%]"}
            alt="Max Ch"
            loading="eager"
            priority
          />
           <div 
          className='absolute -bottom-3 left-0 w-full h-[100px] bg-black rotate-[17deg] flex items-center justify-center gap-3'
          >
            <SiMongodb className='text-white w-8 h-8' title='MongoDB'/>
            <TbBrandPrisma className='text-white w-8 h-8' title='Prisma'/>
            <SiTailwindcss className='text-white w-8 h-8' title='Tailwind CSS'/>
            <SiMui className='text-white w-7 h-7' title='Materia UI'/>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HeroSection