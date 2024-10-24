import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongoDB from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import nodejs from "../../public/node.png"
import video1 from "../../public/video1.mp4"
import video2 from "../../public/video2.mp4"
import video3 from "../../public/video3.mp4"
import video4 from "../../public/video4.mp4"
import video5 from "../../public/video5.mp4"
import video6 from "../../public/video6.mp4"

const Portfolio = () => {
    const cardItem=[
        {
            id:1,
            // logo:mongoDB,
            video:video1,
            name:"Image Gallery"
        },
        {
            id:2,
            // logo:express,
            video:video2,
            name:"Quiz Website"
        },
        {
            id:3,
            // logo:reactjs,
            video:video3,
            name:"Form Validation"
        },
        {
            id:4,
            // logo:nodejs,
            video:video4,
            name:"To-Do-List"
        },
        {
            id:5,
            // logo:python,
            video:video5,
            name:"PORTFOLIO PRINCE"
        },
        {
            id:6,
            // logo:java,
            video:video6,
            name:"Login Page"
        }
    ]
  return (
    <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Projects</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-5'>
               {
                cardItem.map(({id, logo, name,video}) => (
                    <div className='md:w-[325px] md:h-[290px] rounded border-[2px] shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                          <video autoplay="{true}" loop muted controls src={video} className='rounded-sm w-full'/>
                          <div>
                            <div className='text-center font-bold text-xl pt-3 mb-2'>{name}</div>
                            {/* <p className='px-2 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
                          </div>
                          <div className='flex justify-center items-center pb-3 space-x-4'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                          </div>
                </div>
                ))
               }
            </div>
        </div>
    </div>
  )
}

export default Portfolio