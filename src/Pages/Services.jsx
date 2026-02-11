import React from 'react'
import { Link } from 'react-router'
import title_icon from "../assets/Images/title_icon.svg"

import sericon1 from '../assets/Images/serv-icon4.png'
import sericon2 from '../assets/Images/serv-icon5.png'
import sericon3 from '../assets/Images/serv-icon6.png'

//services section 
const Services = () => {
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          Our service
          <span className='absolute hidden sm:flex top-0 right-35 w-10 h-10' >
            <img src={title_icon} alt="icon" className='w-full h-full'  />
          </span>
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
          Our values and valuated us to the top of our indsuty. 
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to={"/index"} className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/services"} className='font-normal text-white text-lg'>
              Our Services 
            </Link>
          </li>
         </ul>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 py-[8%] px-[2%] md:px-[8%] xl:px-[12%] overflow-x-hidden'> 
        <div className='ser-item border border-gray-50/20 text-center rounded-sm relative'>
        <div className='image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14'>
          <img src={sericon1} alt="service-icon" />
        </div>
        </div>
      </div>
    </>
  )
}

export default Services
