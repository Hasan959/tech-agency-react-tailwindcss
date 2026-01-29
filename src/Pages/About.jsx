import React from 'react'
import title_icon from "../assets/Images/title_icon.svg"
import { Link } from 'react-router'
import { Icon } from '@iconify/react'
import aboutlogo from "../assets/Images/novo-about-logo.png"
import CountUp from 'react-countup'
import serviceicon1 from "../assets/Images/service-icon1.png"
import serviceicon2 from "../assets/Images/service-icon2.png"
import serviceicon3 from "../assets/Images/service-icon3.png"
import serviceicon4 from "../assets/Images/service-icon4.png"
import serviceicon5 from "../assets/Images/service-icon5.png"


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
                <ul className='flex xl:flex-nowrap flex-wrap gap-5 lg:gap-2 '>
                  
                  <li className='w-full '>
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

              <div className="w-full lg:w-[40%] flex justify-center items-center">
                <div className='flex items-center justify-center w-[250px] h-[250px] relative border'>
                  <img src={aboutlogo} alt="about-logo" className='invert brightness-0 ' />
                </div>
              </div>
            </div>

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
          <ul className='flex flex-col gap-5 mt-20 relative ' >
          <li className='w-full flex items-start justify-between lg:flex-row flex-col'>
            <span className='w-full lg:w-3xl font-semibold text-2xl text-white'> 
              Our Mission 
            </span>
            <p className='w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl mt-2 text-gray-300'>
              Frommm the moment our company was founded,we have helped our  client find exceptional solutions for their business,creating memorable brands and digital product
            </p>
          </li>
          <li className='w-full flex items-start justify-between lg:flex-row flex-col'>
            <span className='w-full lg:w-3xl font-semibold text-2xl text-white'> 
              Our Goal 
            </span>
            <p className='w-full lg:w-[90%] xl:w-[80%] text-md sm:text-xl my-2 text-gray-300'>
              From the moment our company was founded,we have helped our  client find exceptional solutions for their business,creating memorable brands and digital product
            </p>
          </li>
          </ul>
        </div>

        <div className='service py-[2%] md:px-[8%] xl:px-[12%]'>
          <div className='service-content'>
            <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm'> what we do  </span>
                <h2 className="text-2xl sm:text-6xl font-semibold max-w-3xl mt-5 leading-tight text-white"> We are a full service agency 
                </h2>
          </div>

          <div  className='flex flex-col w-full mt-8'>
             <div className='service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row'>
               <div className='flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2'>
                   <span className='text-2xl font-semibold'>0.1</span>
                   <div className='service-info'>
                    <h4 className='text-2xl font-semibold pb-0.5'>Brand Strategy </h4>
                    <p className='text-gray-100 text-lg lg:w-3xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquam explicabo obcaecati quos, ipsam velit optio itaque tempora corporis quas qui? Iste nisi recusandae maiores fugit voluptate totam voluptatem amet! 
                    </p>
                   </div>
               </div>
                 <div className='service-image w-full lg:w-1/2 flex lg:justify-end'>
                   <div className='border border-white/20 rounded-full w-[150px] h-[150px] p-3'>
                      <img src={serviceicon1} alt="service-icon" className='invert brightness-0 w-full h-full object-contain rounded-full border border-white/20 border-b py-4 gap-5 '  />
                   </div>
                 </div>
             </div>

              <div className='service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row'>
               <div className='flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2'>
                   <span className='text-2xl font-semibold'>0.2</span>
                   <div className='service-info'>
                    <h4 className='text-2xl font-semibold pb-0.5'>Social  Media Campaign  </h4>
                    <p className='text-gray-100 text-lg lg:w-3xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquam explicabo obcaecati quos, ipsam velit optio itaque tempora corporis quas qui? Iste nisi recusandae maiores fugit voluptate totam voluptatem amet! 

                    </p>
                   </div>
               </div>
                 <div className='service-image w-full lg:w-1/2 flex lg:justify-end'>
                 <div className='border border-white/20 rounded-full w-[150px] h-[150px] p-3'>
                      <img src={serviceicon2} alt="service-icon" className='invert brightness-0 w-full h-full object-contain rounded-full border border-white/20'/>
                 </div>
                 </div>
             </div>

             <div className='service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row'>
               <div className='flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2'>
                   <span className='text-2xl font-semibold'>0.3</span>
                   <div className='service-info'>
                    <h4 className='text-2xl font-semibold pb-0.5'> Creative Direction  </h4>
                    <p className='text-gray-100 text-lg lg:w-3xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquam explicabo obcaecati quos, ipsam velit optio itaque tempora corporis quas qui? Iste nisi recusandae maiores fugit voluptate totam voluptatem amet! 
                    </p>
                   </div>
               </div>
                 <div className='service-image w-full lg:w-1/2 flex lg:justify-end'>
                 <div className='border border-white/20 rounded-full w-[150px] h-[150px] p-3'>
                      <img src={serviceicon3} alt="service-icon" className='invert brightness-0 w-full h-full object-contain rounded-full border border-white/20'/>
                 </div>
                 </div>
             </div>

              <div className='service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row'>
               <div className='flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2'>
                   <span className='text-2xl font-semibold'>0.4</span>
                   <div className='service-info'>
                    <h4 className='text-2xl font-semibold pb-0.5'> Machine Learning / AI   </h4>
                    <p className='text-gray-100 text-lg lg:w-3xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquam explicabo obcaecati quos, ipsam velit optio itaque tempora corporis quas qui? Iste nisi recusandae maiores fugit voluptate totam voluptatem amet! 
                    </p>
                   </div>
               </div>
                 <div className='service-image w-full lg:w-1/2 flex lg:justify-end'>
                 <div className='border border-white/20 rounded-full w-[150px] h-[150px] p-3'>
                      <img src={serviceicon4} alt="service-icon" className='invert brightness-0 w-full h-full object-contain rounded-full border border-white/20'/>
                 </div>
                 </div>
             </div>

              <div className='service-item w-full flex justify-between items-center border-t border-white/20 border-b py-4 gap-5 flex-col-reverse lg:flex-row'>
               <div className='flex lg:items-start flex-col md:flex-row gap-5 md:gap-8 w-full text-white lg:w-1/2'>
                   <span className='text-2xl font-semibold'>0.5</span>
                   <div className='service-info'>
                    <h4 className='text-2xl font-semibold pb-0.5'> Visual Identify   </h4>
                    <p className='text-gray-100 text-lg lg:w-3xl' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, aliquam explicabo obcaecati quos, ipsam velit optio itaque tempora corporis quas qui? Iste nisi recusandae maiores fugit voluptate totam voluptatem amet! 
                    </p>
                   </div>
               </div>
                 <div className='service-image w-full lg:w-1/2 flex lg:justify-end'>
                 <div className='border border-white/20 rounded-full w-[150px] h-[150px] p-3'>
                      <img src={serviceicon5} alt="service-icon" className='invert brightness-0 w-full h-full object-contain rounded-full border border-white/20'/>
                 </div>
                 </div>
             </div>

          </div>

        </div>

    </>
  )
}

export default About