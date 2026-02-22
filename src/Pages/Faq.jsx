import React, { useState } from 'react'
import { Link } from 'react-router'
import title_icon from "../assets/Images/title_icon.svg"
import { Icon } from '@iconify/react'


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

import brand1 from "../assets/Images/brand1.png"
import brand2 from "../assets/Images/brand2.png"
import brand3 from "../assets/Images/brand3.png"
import brand4 from "../assets/Images/brand4.png"
import brand5 from "../assets/Images/brand5.png"
import brand6 from "../assets/Images/brand6.png"
import brand7 from "../assets/Images/brand7.png"

const Faq = () => {

  const[openIndex,setOpenIndex]=useState(0)

  const toggleFaq =(index) => {
    setOpenIndex(openIndex === index ? null: index  )
  }



  return (
    <>
        {/* div start  */}
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          Client's Faq
          <span className='absolute hidden sm:flex top-0 right-35 w-10 h-10' >
            <img src={title_icon} alt="icon" className='w-full h-full'  />
          </span>
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
           Solving business problems is an Everyday.
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to={"/index"} className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/services"} className='font-normal text-white text-lg'>
              Client's Faq
            </Link>
          </li>
         </ul>
      </div>
      {/* div end */}

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


          {/* get in touch */}
      <div className='py-[2%]'>
        <div className='contact py-[8%] px-[2%] md:px-[8%] xl:px-[12%] h-[800px] relative ' >
          <div className='team-content w-full lg:w-[60%]  mb-10 '>
               <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl  rounded-sm'>Get in Touch   </span>
                <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white"> 
                    Send us your  bright ideas
                </h2>
                <Link to="/contact" className='text-primary text-3xl lg:text-5xl font-semibold '>
                   info@yourcompany
                </Link>
                <p className='text-gray-100 text-xl pt-5' > 123 Business avenue Los angeles,CA 90001 </p>
                </div>
                   <div className='contact-image'>
                         <div className='cat-img-circle img-circle--1 '></div>
                         <div className='cat-img-circle img-circle--2'></div>
                         <div className='cat-img-circle img-circle--3'></div>
                       
                     <ul className='text-white grid grid-cols-2 gap-10 absolute right-0 bottom-60 social-icons'>
                    <li>
                    <Link to='/' className='social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center'>
                     <Icon icon="ri:facebook-fill" width="44" height="44" className='text-black bg-white p-2 rounded-full ' />
                          <span> Facebook </span>
                     </Link>
                      </li>
                       
                       <li>
                     <Link to='/' className='social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center'>
                       <Icon icon="iconoir:instagram" width="44" height="44" className='text-black bg-white p-2 rounded-full ' />
                           <span> Instagram </span>
                     </Link>
                     </li>
                       
                   <li>
                      <Link to='/' className='social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center'>
                        <Icon icon="iconoir:twitter" width="44" height="44" className='text-black bg-white p-2 rounded-full ' />
                       <span> Twitter </span>
                        </Link>
                   </li>
                       
                    <li>
                       <Link to='/' className='social-icon relative overflow-hidden p-10 text-xl font-bold h-[100px] rounded-full bg-black flex gap-8 items-center'>
                        <Icon icon="iconoir:twitter" width="44" height="44" className='text-black bg-white p-2 rounded-full ' />
                           <span> Linkdln</span>
                      </Link>
                     </li>
                       
                     </ul>
                       
                     </div>
           </div>
                       
     </div> 


     {/* Brand */}
                 <div className=' brand py-[8%] px-[2%] md:px-[8%] xl:px-[12%]'>
                    <div className='brand-content w-full lg:w-[60%]  mb-10 '>
                      <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm'>Fantasthik & Premie  client  </span>
                       <h2 className="text-4xl md:text-3xl  lg:text-6xl font-semibold sm:max-w-5xl mt-5   leading-tight text-white"> 
                           We Have Had the Pleasure of Working with some Clients 
                       </h2>
                        </div>
                       <div className="brand-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                          <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center'>
                          <img src={brand1} alt="brand-image" className='object-contain' />
                           <span className='text-white' > View Website  </span>
                          </Link>
                                 
                           <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center'>
                           <img src={brand2} alt="brand-image" className='object-contain'/>
                           <span className='text-white' > View Website  </span>
                           </Link>
                                 
                            <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                             <img src={brand3} alt="brand-image" className='object-contain' />
                                   <span className='text-white' > View Website  </span>
                            </Link>
                                             
                             <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                               <img src={brand4} alt="brand-image" className='object-contain' />
                               <span className='text-white' > View Website  </span>
                              </Link>
                                 
                                <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                                 <img src={brand5} alt="brand-image" className='object-contain' />
                                   <span className='text-white' > View Website  </span>
                               </Link>
                                 
                                <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                                  <img src={brand6} alt="brand-image" className='object-contain' />
                                    <span className='text-white' > View Website  </span>
                                 </Link>
                                 
                                 <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                                <img src={brand7} alt="brand-image" className='object-contain' />
                                    <span className='text-white' > View Website  </span>
                                 </Link>
                                 
                                 <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                                  <img src={brand2} alt="brand-image" className='object-contain' />
                                     <span className='text-white' > View Website  </span>
                                 </Link>
                                 </div>
                                    
                                 
                </div>
    </>
  )
}

export default Faq