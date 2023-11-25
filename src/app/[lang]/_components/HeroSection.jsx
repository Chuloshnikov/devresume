import Container from './Container'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
              {description}
            </p>
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="#contact"
                className="px-7 py-3 text-white text-xl bg-orange-500 hover:bg-orange-700 duration-300 rounded-md"
              >
                {contact_me_btn}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full lg:w-1/2">
          <div 
          className='absolute -top-3 left-0 w-full h-[100px] bg-black rotate-[17deg]'
          />
          <Image
            src={picture.filename}
            width={529}
            height={529}
            className={"object-cover rounded-full"}
            alt="Max Ch"
            loading="eager"
            priority
          />
           <div 
          className='absolute -bottom-3 left-0 w-full h-[100px] bg-black rotate-[17deg]'
          />
        </div>
      </Container>
    </>
  )
}

export default HeroSection