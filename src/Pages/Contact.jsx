import React from 'react'

import title_icon from '../assets/Images/title_icon.svg'
import { Link } from 'react-router'
import { Icon } from '@iconify/react'

const Contact = () => {
  
  return (
    <>
      {/* div start  */}
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          Contact us 
          <span className='absolute hidden sm:flex top-0 right-35 w-10 h-10' >
            <img src={title_icon} alt="icon" className='w-full h-full'  />
          </span>
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
           Have Ideas for your business? Lets build something awesome together.  
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to="/" className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className='font-normal text-white text-lg'>
              Contact Us 
            </Link>
          </li>
         </ul>
      </div>
      {/* div end */}

      <div className='px-[2%] md:px-[8%] xl:px-[12%] py-[8%] flex justify-center items-start gap-10 lg:flex-nowrap flex-wrap'>
          <div className='w-full lg:w-1/2 text-white'>
             <div>
              <h3 className='text-3xl font-semibold ' > Send Us A Message </h3>
              <p className='text-lg pb-5'> Then let us know about it and we can see  </p>
             </div>
             <form className="text-white flex flex-col gap-5 ">
              <input type="text" placeholder='Ful Name' required/>
              <input type="email" placeholder='Email Name' required/>
              <input type="number" placeholder='Phone Number' required/>
              <textarea placeholder="Message" required ></textarea>
              <button type='button' className=' btn rounded-sm'>
                <Icon icon='vaadin:plus' width="30" height='30'/>
                <span>Send Us A Message</span>

              </button>

             </form>
          </div>
      </div>
    </>
  )
}

export default Contact
