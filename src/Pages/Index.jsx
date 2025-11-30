import React from 'react'
import heroVideo from "../assets/Images/hero-video.mp4"
import title_icon from "../assets/Images/title_icon.svg"

import { Link } from 'react-router'
import { Icon } from '@iconify/react'


const Index = () => {
  return (
    
    <>
    {/* Hero */}
       <div className='h-screen w-full relative overflow-hidden' >
        <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover' >
          <source src={heroVideo} type='video/mp4'/>

        </video>
        <div className='px-[2%] md:px-[8%] xl:px-[12%] text-white  h-full w-full flex flex-col justify-center relative z-10'>
          <h2 className='text-5xl  md:text-7xl xl:text-9xl font-semibold w-full lg:max-w-2xl pb-3 '> Future By Design 
        <span className='absolute top-0 right-0 w-10 h-10 '>
           <img src={title_icon} alt="Icon" className='w-full f-full' />
        </span>
        </h2>
        <p className='text-xl md:text-2xl max-w-2xl font-medium'>
          Creative studio at the intersection of art, design and technology.
        </p>
        <a href="#"
            className='absolute right-0 bottom-16 w-[67px] h-[67px] rounded-full border border-white z-30 cursor-pointer flex items-center justify-center group hover:scale-110 transition-transform duration-300 '>
              <span className='absolute inset-0 rounded-full border border-white opacity-50 animate-pulseRing '></span>
              <span></span>
            </a>
        </div>
        
       </div>

    </>
  )
}

export default Index