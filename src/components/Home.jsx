import React from 'react'

import pic from "../../public/boy3.jpeg"

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped, Typed } from "react-typed";

function Home() {
    return (
        <>
            <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a <span></span> </h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Web Developer", "programmer","Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div><br />
                        <p className='text-sm md:text-md text-justify'>Hello! 👋 I'm Prince Kumar  a passionate and motivated frontend web
                            developer eager to kickstart my career in the world of web development. As a recent graduate with a Bachelor Degree or MERN stack Training in Web Development Field , I bring
                            fresh perspectives and a hunger to learn to every project I undertake.
                            My journey into web development began with a curiosity about how websites come to life and a fascination
                            with the power of code to transform ideas into interactive experiences. During my studies, I immersed
                            myself in <b>HTML</b>,<b> CSS</b>, and <b>JavaScript</b>, mastering the fundamentals of building responsive and
                            visually appealing
                            websites. <br /><br /> I'm eager to work on projects where I can use my skills and grow as a developer. Making websites that
                            people
                            enjoy using is what I'm all about. <br /><br />Thanks for checking out my portfolio. I hope we can work together on some cool projects!
                        </p><br />
                        {/* social media icons  */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100051548446916&mibextid=ZbWKwL"target='_blank'>
                                        <FaFacebookSquare className='text-2xl hover:scale-110 duration:200 cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/prince-kumar-0b525b280" target='_blank'>
                                        <FaLinkedin className='text-2xl hover:scale-110 duration:200 cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.github.com/prince7982/desktop-tutorial" target='_blank'>
                                        <IoLogoGithub className='text-2xl hover:scale-110 duration:200 cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/prince_kumar8524?igsh=OGxmYmkzNHdnZnZy"target='_blank'>
                                        <FaSquareInstagram className='text-2xl hover:scale-110 duration:200 cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration:200 rounded-full border-[2px]' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration:200 rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration:200 rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration:200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1'>
                    <img src={pic} className='md:w-[550px] md:h-[550px]' alt="prince" />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home