import React, { act, useState } from 'react'
import heroVideo from "../assets/Images/hero-video.mp4"
import title_icon from "../assets/Images/title_icon.svg"
import ser1 from "../assets/Images/serv-icon1.png" 
import ser2 from "../assets/Images/serv-icon2.png" 
import ser3 from "../assets/Images/serv-icon3.png" 
import { Link } from 'react-router'
import { Icon } from '@iconify/react'

import "@splidejs/react-splide/css";
import { Splide ,SplideSlide} from "@splidejs/react-splide";

import project1 from "../assets/Images/project-01.jpg"
import project2 from "../assets/Images/project-02.jpg"
import project3 from "../assets/Images/project-03.jpg"
import project4 from "../assets/Images/project-04.jpg"

import team1 from "../assets/Images/team-01.png"
import team2 from "../assets/Images/team-02.png"
import team3 from "../assets/Images/team-03.png"
import team4 from "../assets/Images/team-04.png"




const Index = () => {

  const [activeIndex,setActiveIndex] = useState(2)

  const services = [
    {id: 1 , title: "Creation" , img: ser1},
    {id: 2 , title: "Creation" , img: ser2},
    {id: 3 , title: "Creation" , img: ser3}, 
  ];

  const items = [
    "- Creative Direction",
    "- Machine Learning/AI",
    "- Brand Strategy",
    "- Native and Web Apps",
  ]

  const projects = [
    {
      id: 1,
      image:project1,
      category:"Branding",
      title:"Museums Art Concept",

    },
    {
      id: 2,
      image:project2,
      category:"Markteing",
      title:"Market Economy Graphics",

    },
    {
      id: 3,
      image:project3,
      category:"Design",
      title:"Headphones 3d Rendering ",

    },
    {
      id: 4,
      image:project4,
      category:"Branding",
      title:"Product Packing Style ",

    },
    
  ];
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
      img: team2,
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
            className='absolute  right-20 bottom-16 w-[67px] h-[67px] rounded-full border border-white z-30 cursor-pointer flex items-center justify-center group hover:scale-110 transition-transform duration-300 '>
              <span className='absolute inset-0 rounded-full border border-white opacity-50 animate-pulseRing text-white'></span>

              {/* Outer <span> → জায়গা তৈরি করে দেয় (container) */}
              <span className='relative  flex items-end justify-between w-[22px] h-[25px]  z-10  '>
                {/* ➤ Inner <span> → আসল bars (equalizer strokes) */}
                <span className='w-1 h-1 bg-white animate-eq1 '></span>
                <span className='w-1 h-1 bg-white animate-eq2 '></span>
                <span className='w-1 h-1 bg-white animate-eq3 '></span>
                <span className='w-1 h-1 bg-white animate-eq4 '></span>
              </span>
              
            </a>
        </div>
      
       </div>
      {/* Services */}
      <div className='services grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-[8%] px-[2%] md:px-[8%] xl:px-[12%] '>
        {services.map((service, index)=>(
          <div key={service.id} className={`w-full text-center group rounded-full p-10 flex justify-center items-center flex-col relative service-item h-[450px] transition-all duration-300  ${activeIndex === index ? "active bg-primary ":"bg-transparent" } `}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(1)}
          
          >
            <img 
               src={service.img}
               alt={service.title}
               width={60}
               height={60} 
               className={`pb-4 transition-all duration-300 ${activeIndex ===index ? "filter-none" : "invert"  } `}
               />
               <div className={`service-content transition-all duration-300 
                  ${activeIndex === index ? "text-black" : "text-white"}`}>
                    <h2 className='text-5xl font-semibold pb-6'> {service.title} </h2>
                    <p className='text-xl'> Developing websites is about so more than marketing.its also about asthetics. </p>
                  </div>

                  {/* Bubble */}
                  <div className='nova-bubble absolute bottom-[-60px] right-0 w-[142px] h-[152px] pointer-events-none'>
                    <div className={`bubble-1 w-8 h-8 rounded-full bg-pink-300 absolute transition-all duration-500 
                     ${activeIndex == index 
                     ?"opacity-100 bottom-0 right-0 scale-100"
                     :"opacity-0 bottom-[-20%] ring-[-10%] scale-0"}`}> 
                     </div>

                     <div className={`bubble-2 w-6 h-6 bg-blue-300 rounded-full absolute transition-all duration-500 delay-100
                       ${activeIndex== index ? "opacity-100 bottom-[30%] left-0 scale-100 ": "opacity-0 bottom-[50%] left-[40%] scale-0"}`} ></div>

                       <div className={`bubble-3 w-10 h-10 bg-green-500 rounded-full absolute transition-all duration-500 delay-100
                        ${activeIndex == index ? "opacity-100 bottom-[63%] left-[57%] scale-100 " : " opacity-0 bottom-[50%] left-[40%] scale-0"}`}></div>

                       
                       
                  </div>
          </div>
        ))}
      </div>

      {/* About */}
      <div className='about py-[8%] px-[2%] md:px-[12%] flex justify-between items-start lg:flex-row flex-col gap-10 ' >
        <div className="about-content w-full lg:w-[60%] ">
          <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm'> welcome to Nova  </span>
          <h2 className="text-3xl sm:text-6xl font-semibold sm:max-w-3xl my-6 leading-tight text-white"> A Design Agency Delivering Success by Winning Hearts
          </h2>
          <ul className='flex xl:flex-nowrap flex-wrap gap-5 lg:gap-10 '>
            <li className='w-full xl:w-1/2'>
            <span className='font-semibold text-2xl text-white'> our mission </span>
            <p className="text-md sm:text-xl mt-2 text-gray-300 ">
              From the moment our company was founded we have helped our clients find 
              <b>exceptional solutions for their business</b>memorable brands and digital products.our expertise grows with each year. and our accmulated experience 
            </p>
            </li>
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

        <div className="w-full lg:w-[40%] flex justify-center items-center">
          <div className='flex items-center justify-center w-[250px] h-[250px] relative border rounded-full'>
            <svg
                  viewBox='0 0 300 300'
                   className=' absolute w-full h-full animate-[spin_20s_linear_infinite] 
                   '>

                    <defs>
                      <path 
                           id='circlePath'
                            d='M150 150, m-120  0, a120 120 0 1 1 240, 0 a120 120 0 1 1 -240 0'/ >

                    </defs>
                    <text
                          fill='#fff'
                           fontSize='16'
                           fontWeight='600'
                           letterSpacing='4'
                           textLength='1400'
                    >
                      <textPath href='#circlePath' startOffset='0' >
                        YEARS OF DIGITALS SOLUTIONS .YEARS OF DIGITAL SOLUTIONS .YEARS OF DIGITAL SOLUTIONS
                      </textPath>
                    </text>
            </svg>
            <div className="border rounded-[50%] px-6 py-5 ">
              <div className='text-8xl font-bold text-transparent mt-5 border'
                style={{
                  WebkitTextStrokeWidth:"3px",
                  WebkitTextFillColor: "#fff"
                }}
              >
                14

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* splide */}
      <div className='py-[2%] flex justify-center items-center'>
        <div className='w-full overflow-hidden border-t border-white border-b flex justify-center items-center h-full'>
          <Splide
               options={{
                 type:"loop",
                 drag: "free",
                 focus: "center",
                 autoWidth: true,
                 arrows: false,
                 pagination: false,
                 gap: "3rem",
                 autoplay: true,
                 interval:0,
                 speed:100000,
                 pauseOnHover: false,
                 resetProgress:false,
               }} >
                {items.map((text,index)=>(
                  <SplideSlide key={index} >
                    <div className='text-[10vw] font-bold uppercase whitespace-nowrap'
                    style={{
                       color: "transparent",
                       WebkitTextStroke: "2px #fff"
                      
                    }} >
                      {text}

                    </div>

                  </SplideSlide>
                ))}

          </Splide>
           

        </div>
      </div>
      {/* Featured Projects */}
      <div className='featured py-[8%] px-[2%] md:px-[8%] xl:px-[12%]'>
        <div className='featured-content w-full flex justify-between flex-col lg:flex-row lg:items-end mb-10 '>
          <div>
            <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm'>Featured Projects</span>
            <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white"> Studio Showcase 
           </h2>
          </div>
          <Link to="/projects" className='btn rounded-sm w-fit '>
               <Icon icon="vaadin:plus" width="30" height="30"/>
               <span> More Projects   </span>
            </Link>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 text-white gap-10 w-full lg:w-[90%] xl:w-full'>
          {projects.map((item) =>(
            <div key={item.id} className='border border-gray-300/20 p-5 cursor-pointer rounded-lg group'>
              <div className='h-[550px] w-full rounded-lg overflow-hidden mb-5'>
                <img 
                src={item.image}
                alt={item.title}
                className='w-full h-full group-hover:scale-110 object-cover  transition-all duration-300 '
                 />
              </div>
              <Link to={`/projects/${item.id}`}>
                <span className='text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm'>
                 {item.category}
                </span>
                <h3 className='text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary transition-all duration-300'>
                  {item.title}
                </h3>
              </Link>
            </div>
          ) )}
        </div>
      </div>
      {/* Team */}
      <div className=' team py-[8%] px-[2%] md:px-[8%] xl:px-[12%]'>
        <div className='team-content w-full lg:w-[60%]  mb-10 '>
          <div>
            <span className='text-black bg-primary px-2 py-3 font-semibold text-md sm:text-xl rounded-sm'>Expert Team Member  </span>
            <h2 className="text-2xl sm:text-6xl font-semibold sm:max-w-3xl mt-5 leading-tight text-white"> 
             We do awesome service for our clients.
           </h2>
          </div>

          <div className="team-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {members.map((member) =>(
              <div key={member.id} className=' team-item relative overflow-hidden border border-gray-50/20 h-[600px] md:h-[740px] group  flex flex-col justify-between  text-white cursor-pointer '>
                {/* Description */}
                <div className='desc p-6 md:p-8'>
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

              </div>
            ) )}

          </div>
        </div>
      </div>

    </>
  )
}

export default Index