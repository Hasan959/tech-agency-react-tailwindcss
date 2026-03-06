import React, { useState } from 'react'

import title_icon from '../assets/Images/title_icon.svg'
import { Link } from 'react-router'
import { Icon } from '@iconify/react'
//contact section 

const faqs = [
  {
    question:'Secure Managemt and workplace',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  },
  {
    question:'Logistics workforce on track',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  },
  {
    question:'Online course and Certification',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  },
  {
    question:'Figure and data representative of an organization ',
    answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

  }
]

const Contact = () => {
  const[openIndex,setOpenIndex]=useState(0)
  
    const toggleFaq =(index) => {
      setOpenIndex(openIndex === index ? null: index  )
    }
  
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
          <div className='w-full lg:w-1/2 text-white h-[550px] rounded-2xl overflow-hidden'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d930314.0183352923!2d89.092704!3d24.379942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc3dbff19296b7%3A0xfd93c885b25d7630!2sNatore%20District!5e0!3m2!1sen!2sbd!4v1772467663150!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
      </div>

      <div className='faq px-[2%] md:px-[8%] xl:px-[12%] py-[8%]'>
              {faqs.map((faq,index)=>(
                <div key={index} className='overflow-hidden transition-all duration-700 mb-5'>
                  <button onClick={()=> toggleFaq(index)} className={`w-full flex items-center cursor-pointer justify-between px-8 py-6 text-lg font-semibold border-2 rounded-full transition-all duration-700 ${openIndex === index ? "bg-lime-400 border-lime-400 text-black" : "border-gray-300 text-white hover:border-lime-300 "}`}>
                    <span> {faq.question} </span>
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full transition-transform duration-700 ${openIndex === index ? "bg-black text-white rotate-180 " : "bg-gray-100 text-black" }`}>
                      <Icon icon={ openIndex === index ? "mdi:chevron-up" : "mdi:chevron-down"} className='text-xl' />
                    </span>
                  </button>
      
                  <div className={`overflow-hidden transition-all duration-700 ease-in-out 
                    ${openIndex === index ? "max-h-60 opacity-100 mt-4 ": "max-h-0 opacity-0"}`}>
                    <p className='px-8 pb-4 text-gray-300 leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
      
    </>
  )
}

export default Contact
