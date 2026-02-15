import React from 'react'
import { Link } from 'react-router'
import title_icon from "../assets/Images/title_icon.svg"

import sericon1 from '../assets/Images/serv-icon4.png'
import sericon2 from '../assets/Images/serv-icon5.png'
import sericon3 from '../assets/Images/serv-icon6.png'
import CountUp from 'react-countup'
import { Icon } from '@iconify/react'

//services section 
const Services = () => {
  return (
    <>
       {/* div start */}
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
      {/* div end */}
      
      {/* div start */}
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 py-[8%] px-[2%] md:px-[8%] xl:px-[12%] overflow-x-hidden'> 
        <div className='ser-item border border-gray-50/20 text-center rounded-sm relative'>
        <div className='image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14'>
          <img src={sericon1} alt="service-icon" />
        </div>
          <div className='service-info text-white p-8 pt-0 ' >
             <h4 className='text-4xl font-semibold pb-4'> Brand Creation </h4>
             <ul className='space-y-5 text-gray-300'>
               <li>
                 <span> Brand Strategy  </span>
               </li>
               <li>
                 <span> Visual Identity   </span>
               </li>
               <li>
                 <span> Naming   </span>
               </li>
               <li>
                 <span> Toolskits </span>
               </li>
               <li>
                 <span> Guidelines   </span>
               </li>
             </ul>
          </div>
        </div>

         <div className='ser-item border border-gray-50/20 text-center rounded-sm relative'>
           <div className='image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14'>
           <img src={sericon2} alt="service-icon" />
         </div>
           <div className='service-info text-white p-8 pt-0 ' >
             <h4 className='text-4xl font-semibold pb-4'> Web campaigns </h4>
             <ul className='space-y-5 text-gray-300'>
               <li>
                 <span> Creative Direction  </span>
               </li>
               <li>
                 <span> concepts   </span>
               </li>
               <li>
                 <span> copyrights  </span>
               </li>
               <li>
                 <span> social media </span>
               </li>
               <li>
                 <span> Creative Strategy    </span>
               </li>
                
             </ul>
           </div>
         </div>

        <div className='ser-item border border-gray-50/20 text-center rounded-sm relative'>
         <div className='image bg-primary mx-auto w-30 h-30 md:w-40 md:h-40 p-8 rounded-full transform -translate-y-8 md:-translate-y-14'>
           <img src={sericon3} alt="service-icon" />
         </div>
           <div className='service-info text-white p-8 pt-0 ' >
              <h4 className='text-4xl font-semibold pb-4'> UI/UX Design</h4>
               <ul className='space-y-5 text-gray-300'>
                <li>
                 <span> Native and web apps  </span>
                </li>
                <li>
                 <span> campaign /brand sites   </span>
               </li>
               <li>
                 <span> Machine Learning/ AI   </span>
               </li>
               <li>
                 <span>Brand Design </span>
               </li>
               <li>
                 <span> Production Animation Design    </span>
               </li>
                
             </ul>
           </div>
          </div>

      </div>
       {/* div end */}
        
        {/* div start */}
       <div className='grid grid-cols-1 py-[8%] sm:grid-cols-3 gap-12 px-[2%] md:px-[8%] xl:px-[12%]'>
          <div className='text-center' >
            <h2 className='text-7xl sm:text-8xl font-bold leading-none color:transparent'
            style={{
               WebkitTextStroke: "2px white"
            }}
            >
            <CountUp start={0} end={23}  duration={2} />

            </h2>
            <p className='text-gray-300 text-lg font-semibold mt-3'>
              Team Members 
            </p>
          </div>
          <div className='text-center' >
            <h2 className='text-7xl sm:text-8xl font-bold leading-none color:transparent; -webkit-text-stroke:2px rgb(255,255,255)'
            style={{
               WebkitTextStroke: "2px white"
            }}
            >
            <CountUp start={0} end={99}  duration={2.5} />+

            </h2>
            <p className='text-gray-300 text-lg font-semibold mt-3'>
              Completed project 
            </p>
          </div>
          <div className='text-center' >
            <h2 className='text-7xl sm:text-8xl font-bold leading-none color:transparent; -webkit-text-stroke:2px rgb(255,255,255)'
            style={{
               WebkitTextStroke: "2px white"
            }}
            >
            <CountUp start={0} end={12}  duration={2.8} />M

            </h2>
            <p className='text-gray-300 text-lg font-semibold mt-3'>
              Lines of code 
            </p>
          </div>
           </div>
          {/* div end */}

          <div className='w-full py-[8%] px-[2%] md:px-[8%] xl:px-[12%]'>
                    <div className='banner bg-cover object-bottom bg-center h-[800px] relative'>
                      <div className=' absolute top-0 left-0 h-full w-full flex justify-center items-center z-10'>
                        <div className="flex items-center justify-center w-[250px] h-[250px] relative border border-white rounded-full ">
                          <svg
                            viewBox='0 0 300 300'
                             className=' absolute w-full h-full animate-[spin_20s_linear_infinite] 
                             '>
                            <defs>
                                <path 
                                     id='circlePath'
                                      d='M150 150 m-120  0 a120 120 0 1 1 240 0 a120 120 0 1 1 -240 0'/>
          
                              </defs>
          
                            <text 
                              fill='#fff'
                              fontSize={16}
                              fontWeight={600}
                              letterSpacing={0}
                              textLength={1000}
                               >
                                <textPath href='#circlePath' startOffset={0} >
                                  PLAY VIDEO-
                                  PLAY VIDEO-
                                  PLAY VIDEO-
                                  PLAY VIDEO-
                                </textPath>
          
                            </text>
                         </svg>
                         <div className='border border-white rounded-[50%]'>
                          <div className='rounded-full p-6 flex items-center justify-center'>
                            <Icon icon="ri:play-fill" width="70" height="70"
                             className='text-white' />
                          </div>
                         </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
    </>
  )
}

export default Services
