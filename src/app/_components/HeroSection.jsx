import Container from '../_components/Container'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
      <>
      <Container className="flex flex-wrap pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10">
          <div className="max-w-2xl mb-8 pr-3">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
              Frontend developer
            </h1>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
              Proficient in React.js and Next.js, I leverage these technologies to create seamless, 
              responsive, and visually appealing interfaces. Database management is streamlined with MongoDB, 
              while my styling arsenal includes Styled-components, Material UI, and Tailwind CSS for a perfect blend of aesthetics and functionality.
              I excel in integrating essential tools like NextAuth and managing databases efficiently with Prisma, ensuring robust authentication solutions and streamlined data handling.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="#contact"
                className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          {/*
          <Image
            src=""
            width="529"
            height="529"
            className={"object-cover rounded-full hidden lg:inline"}
            alt="Tuomo Kankaanpää"
            loading="eager"
          />
          */}
        </div>
      </Container>
    </>
  )
}

export default HeroSection