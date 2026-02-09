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

import team1 from "../assets/Images/team-01.png"
import team2 from "../assets/Images/team-02.png"
import team3 from "../assets/Images/team-03.png"
import team4 from "../assets/Images/team-04.png"

import "@splidejs/react-splide/css";
import { Splide ,SplideSlide} from "@splidejs/react-splide";

import brand1 from "../assets/Images/brand1.png"
import brand2 from "../assets/Images/brand2.png"
import brand3 from "../assets/Images/brand3.png"
import brand4 from "../assets/Images/brand4.png"
import brand5 from "../assets/Images/brand5.png"
import brand6 from "../assets/Images/brand6.png"
import brand7 from "../assets/Images/brand7.png"


const About = () => {
  const members = [
      {
        id:1,
        name: "Arrav Rao",
        role: "UI/UX Designer",
        img: team1,
        letter:"A",
      },
      {
        id:2,
        name: "Diya Mehra ",
        role: "Digital Marketer",
        img: team2,
        letter:"D",
      },
      {
        id:3,
        name: "Karan Thakor",
        role: "Digital Marketer",
        img: team3,
        letter:"k",
      },
      {
        id:4,
        name: "Sara Thomas ",
        role: "Content Strategist ",
        img: team4,
        letter:"S",
      },
  
     ];

     const testimonials = [
    {
      id:1,
      text: "Their high level of customer service complemented their techical experise,they were responsive,supportive and communicative. Their dedication to the project was impressive",
      name: "jessica  Brown",
      role: "Design Quality",
      rating: 4.5, 
    },
    {
      id:2,
      text: " service complemented their techical experise,they were responsive,supportive and communicative. Their dedication to the project was impressive ",
      name: "Rohan Metha ",
      role: "Creative Director",
      rating: 4.5, 
    },
    {
      id:3,
      text: "level of customer service complemented their techical experise,they were responsive,supportive and communicative. Their dedication to the project was impressive  ",
      name: "Emily devis ",
      role: "Creative Director",
      rating: 4.5, 
    },{
      id:4,
      text: "Their dedication to the project was impressive level of customer service complemented their techical  ",
      name: "Arjun Patel ",
      role: "Startup founder",
      rating: 4, 
    }
   ];
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
         
         {/* Service */}
        <div className='service py-[2%] px-[2%] md:px-[8%] xl:px-[12%]'>
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

          {/* Team */}
        <div className=' team py-[8%] px-[2%] md:px-[8%] xl:px-[12%]'>
                <div className='team-content w-full lg:w-[60%]  mb-10 '>
                    <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm'>Expert Team Member  </span>
                    <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white"> 
                     We do awesome service for our clients.
                   </h2>
                </div>
        
                  <div className="team-wrapper  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    {members.map((member) =>(
                      <div key={member.id} className=' team-item relative overflow-hidden border border-gray-50/20 h-[600px] md:h-[740px] group  flex flex-col justify-between  text-white cursor-pointer '>
                        {/* Description */}
                        <div className='desc  p-6 md:p-8'>
                          <div className='mb-4'>
                            <span className='block font-semibold text-gray-100 text-sm md:text-md  group-hover:text-black  transition-colors duration-300'>
                              {member.name}
                            </span>
                            <span className='block font-semibold text-gray-100 text-sm md:text-md  group-hover:text-black  transition-colors duration-300'>
                              {member.role}
                            </span>
                          </div>
                          {/* Social Links */}
                          <div className='flex gap-3 ' >
                           <Link 
                             to="#"
                              className='border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors'
                              >
                                <Icon
                                    icon="ri:facebook-fill"
                                    width="24"
                                    height="24"
                                    className='group-hover:text-black transition-transform duration-300
                                    group-hover:scale-110 '
                                />
        
                               </Link>
                               <Link 
                             to="#"
                              className='border border-gray-50/20 p-3 md:p-5 rounded-full group-hover:border-black transition-colors'
                              >
                                <Icon
                                    icon="flowbite:linkedin-solid"
                                    width="24"
                                    height="24"
                                    className='group-hover:text-black transition-transform duration-300
                                    group-hover:scale-110 '
                                />
        
                               </Link>
                              </div>
        
                              
                        </div>
                         {/* Image + letter  */}
                         <img 
                         src={member.img}
                         alt={member.name}
                          className='w-full h-auto scale-100 grayscale  group-hover:scale-110 group-hover:grayscale-0
                           transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)] '
                           />
        
                           <div className='num absolute -right-3 md:-right-5 bottom-0 text-[180px] sm:text-[220px] md:text-[300px] font-bold leading-[0.5] group-hover:text-primary pointer-events-none transition-all duration-500 
                           ease-[cubic-bezier(0.3,0,0.3,1)]'
                            style={{
                              textShadow:
                              "12px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000"
                            }}
                           >
                            <span> {member.letter} </span>
                            
                           </div>
        
                      </div>
                    ) )}
        
                  </div>
                </div>

                 {/* Testimonial */}
        <div className=' Testimonials py-[8%] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col lg:flex-row justify-between items-start gap-10 '>
        <div className='tst-content w-full lg:w-1/2  text-white '>
            <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-5 leading-tight text-white"> 
             Testimonials
           </h2>
           <div className='font-normal text-xl flex items-center'>
            4.5{" "}
            <span className='flex text-yellow-400 ml-2' >
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="material-symbols:star-rounded" width="24" height="24" />
              <Icon icon="ic:round-star-half" width="24" height="24" />
            </span>{" "}
                rating from all my clients
           </div>
          </div>
          <div className="w-full lg:w-1/2  border-l border-white ps-10 ">
            <Splide 
                options={{
                   type:"fade",
                   rewind: true,
                   autoplay:true,
                   interval:4000,
                   pauseOnHover:true,
                   arrows:false,
                   pagination: true,
                   speed:800,
                }}
                >
                  {testimonials.map((t) =>
                   <SplideSlide key={t.id}>
                    <div className='text-white'>
                      <p className='text-gray-400 text-2xl md:text-3xl max-w-2xl leading-tight mb-6 font-medium'>
                        {t.text}
                      </p>
                      <div>
                        <h3 className='text-2xl md:text-3xl font-semibold'>
                          {t.name}
                        </h3>
                        <span className='text-gray-300'> {t.role} </span>
                      </div>
                    </div>

                   </SplideSlide>
                   )}

            </Splide>
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
                    <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                      <img src={brand1} alt="brand-image" className='object-contain' />
                      <span className='text-white' > View Website  </span>
                    </Link>
        
                    <Link to="https://www.google.com/" target="blank" className='brand-item cursor-pointer border border-gray-50/20 p-5 relative flex justify-center items-center ' >
                      <img src={brand2} alt="brand-image" className='object-contain' />
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

export default About