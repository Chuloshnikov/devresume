"use client"
import React, { useRef } from 'react';
import Link from "next/link";
import Container from "./Container";
import { FaFacebookSquare, FaInstagram, FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
import Particles from 'react-particles'
import { loadStarsPreset } from "tsparticles-preset-stars";


const ContactSection = ({ data }) => {

  const { title, subtitle, email, fullname, message, contact_btn } = data;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o1o48ly', 'template_hnisq8m', form.current, 'TZaPO96gnKE3GoF8A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <Container className="flex w-full flex-col lg:flex-row my-16 items-center justify-center text-center">
      <Particles id="tsparticles" options={{
                preset: "stars",
                fullScreen: {
                    zIndex: -1
                }
            }} init={async (engine) => await loadStarsPreset(engine)}/>
      <div className="text-xl" id="contact">
        <h2 className="text-4xl font-bold text-center mb-8">{title}</h2>
        <div
        className="flex gap-8 items-center justify-center"
        >
          <Link href={"https://www.facebook.com/profile.php?id=100011425857304"}>
            <FaFacebookSquare className="w-10 h-10 text-blue-600"/>
          </Link>
          <Link href={"https://www.instagram.com/maxmaxich/"}>
            <FaInstagram className="w-10 h-10 text-pink-500"/>
          </Link>
          <Link href={"/"}>
            <FaTelegram className="w-10 h-10 text-blue-500"/>
          </Link>
          <Link href={"https://api.whatsapp.com/send?phone+380955255166"}>
            <FaWhatsappSquare className="w-10 h-10 text-green-500"/>
          </Link>
        </div>
        <div
        className="mt-4 flex items-center justify-center"
        >
          <a
          href="mailto:maks447@ukr.net" 
          className="flex gap-2 items-center justify-center cursor-pointer"
          >
             <IoMdMail className="w-5 h-5"/>
            <span>maks447@ukr.net</span>
          </a>
        </div>
        <div>
          <p className="text-4xl font-bold text-center mt-20">
            {subtitle}
          </p>
            <form 
            ref={form} 
            onSubmit={sendEmail}
            className='flex flex-col gap-2 mt-4'
            >
              <input 
              className='bg-black border-2 border-gray-600 rounded-lg px-2 py-1'
                type="text" 
                name="name" 
                placeholder={fullname} 
                required
              />
              <input 
                className='bg-black border-2 border-gray-600 rounded-lg px-2 py-1'
                type="email" 
                name="email" 
                placeholder={email} 
                required
              />
            <textarea
              className='bg-black border-2 border-gray-600 rounded-lg px-2 py-1'
              name='message' 
              rows="7" 
              placeholder={message} 
              required
            />
              <button
              className="px-7 py-3 text-white text-xl bg-orange-500 hover:bg-orange-700 duration-300 rounded-md"
               type='submit' 
               value="Send"
               >
                {contact_btn}
              </button>
          </form>
        </div>
      </div>
    </Container>
  );
}



export default ContactSection;