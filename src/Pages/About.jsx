import React from 'react'
import title_icon from "../assets/Images/title_icon.svg"
import { Link } from 'react-router'
import { Icon } from '@iconify/react'

const About = () => {
  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          About Us 
          <span className='absolute hidden md:flex top-0 right-[35px] w-10 h-10' >
            <img src={title_icon} alt="icon" className='w-full h-full'  />
          </span>
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
          Creative studio at the intertsection of art ,designed technology.
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to={"/index"} className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className='font-normal text-white text-lg'>
              About us
            </Link>
          </li>
         </ul>
      </div>

      <div className='about py-[8%] px-[2%] md:px-[12%] xl:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10 ' >
              <div className="about-content w-full lg:w-[60%] ">
                <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm'> welcome to Nova  </span>
                <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leading-tight text-white"> A Design Agency Delivering Success by Winning Hearts
                </h2>
                <ul className='flex xl:flex-nowrap flex-wrap gap-5 lg:gap-10 '>
                  
                  <li className='w-full xl:w-1/2'>
                  <span className='font-semibold text-2xl text-white'> our Goal </span>
                  <p className="text-md sm:text-xl my-2 text-gray-300 ">
                    Our goal is to deliver amazing experiences that make people talk,and build stragic value for brands,tech entertainment.
                  </p>
                  <Link to="/about" className='btn rounded-sm '>
                     <Icon icon="vaadin:plus" width="30" height="30"/>
                     <span> More About Us  </span>
                  </Link>
                  </li>
                </ul>
              </div>
      
              
            </div>

    </>
  )
}

export default About