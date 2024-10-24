import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa'
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12 bg-slate-300'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <a className='hover:scale-110 duration-300' href="https://www.facebook.com/profile.php?id=100051548446916&mibextid=ZbWKwL" target='_blank'><FaFacebook size={24}/></a>
                    <a className='hover:scale-110 duration-300' href="https://www.instagram.com/prince_kumar8524?igsh=OGxmYmkzNHdnZnZy" target='_blank'><FaInstagram size={24}/></a>
                    <a className='hover:scale-110 duration-300' href="https://www.linkedin.com/in/prince-kumar-0b525b280" target='_blank'><FaLinkedin size={24}/></a>
                    <a className='hover:scale-110 duration-300' href="https://www.github.com/prince7982/desktop-tutorial" target='_blank'><IoLogoGithub size={24}/></a>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy; All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer