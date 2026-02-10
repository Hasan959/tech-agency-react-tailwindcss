import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { teamMembers } from './Team'
import title_icon from "../assets/Images/title_icon.svg"
import { Icon } from '@iconify/react'

import serviceicon1 from "../assets/Images/service-icon1.png"
import serviceicon2 from "../assets/Images/service-icon2.png"
import serviceicon3 from "../assets/Images/service-icon3.png"
import serviceicon4 from "../assets/Images/service-icon4.png"
import serviceicon5 from "../assets/Images/service-icon5.png"

import project1 from "../assets/Images/project-01.jpg"
import project2 from "../assets/Images/project-02.jpg"
import project3 from "../assets/Images/project-03.jpg"
import project5 from "../assets/Images/project-05.jpg"

  const TeamDetails = () => {
  const {id} =useParams()
  const navigate = useNavigate() 

  const member = teamMembers.find(m=> m.id ===id)

  //Export variable from team.jsx
  
  useEffect(()=> {
    if(!member) navigate("/team")
  },[member,navigate])

   if(!member) return null 
  return (
    <>
       <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3'>
          {member.name}
          <span className=' absolute hidden sm:flex top-0 right-35 w-10 h-10'>
            <img src={title_icon} alt="icon" className='w-full h-full'/>
          </span>
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
          Meeting Our Creativity company family.
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to={"/index"} className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className='font-normal text-white text-lg'>
              Our Team 
            </Link>
          </li>
          <li>
            <Link to="#" className='font-normal text-white text-lg'>
              {member.name}
            </Link>
          </li>
         </ul>
        </div>

        {/* Team Info */}
        <div className='py-[8%] px-[2%] md:px-[8%] xl:px-[12%]'>
          <div className='w-full border border-white h-auto xl:h-[600px] flex justify-between flex-col xl:flex-row items-start gap-10 xl:gap-4 relative xl:p-0 lg:p-20 sm:p-10 p-5'>
            <div className='w-full xl:w-fit h-[600px] xl:h-full bg-white xl:p-0 m-0 xl:m-20 rounded-sm overflow-hidden'>
              <img src={member.img} alt="team-image" className='h-full w-full object-cover object-top'/>
            </div>
            <div className='w-full xl:w-[60%] xl:p-20 text-white'>
              <h4 className='text-5xl font-semibold'> {member.name} </h4>
              <span className='text-xl text-gray-300'> {member.role} </span>
              <ul>
                <li className='py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row  gap-3 sm:gap-0'>
                <span className='text-xl font-semibold' >  Age</span>
                <p className='text-gray-300/80'> {member.age} </p>
                </li>
                <li className='py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row  gap-3 sm:gap-0'>
                <span className='text-xl font-semibold' >  Location </span>
                <p className='text-gray-300/80'> {member.location} </p>
                </li>
                <li className='py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row  gap-3 sm:gap-0'>
                <span className='text-xl font-semibold' >  Email </span>
                <p className='text-gray-300/80'> {member.email} </p>
                </li>
                <li className='py-4 border-t border-gray-50/20 mt-5 flex justify-between flex-col sm:flex-row  gap-3 sm:gap-0'>
                <span className='text-xl font-semibold' >  Phone </span>
                <p className='text-gray-300/80'> {member.phone} </p>
                </li>
              </ul>
                <div className='text-white flex items-center mt-5 gap-5'>
                  <Link to='https://www.facebook.com' className='cursor-pointer' target='blank'>
                  <Icon icon="ri:facebook-line" width="24" height='24' className='border border-white rounded-sm min-w-10 min-h-10 p-1'/>
                  </Link>
                   <Link to='https://linkedin.com' className='cursor-pointer' target='blank'>
                  <Icon icon="flowbite:linkedin-solid" width="24" height='24' className='border border-white rounded-sm min-w-10 min-h-10 p-1'/>
                  </Link>
                </div>
            </div>
          </div>
          <p className='text-white pt-5 xl:pt-0 xl:mt-30 pb-4 text-sm md:text-lg '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet id nihil assumenda distinctio possimus expedita a odit cum nobis pariatur excepturi modi ipsum porro necessitatibus iste consectetur maiores voluptates perferendis reiciendis, fuga voluptatem quia omnis sunt? Nemo sint maxime facilis repellendus, soluta minima beatae dolores id doloremque voluptatum reprehenderit reiciendis ex quaerat vitae. Tempore, quas dolorem? Illo deserunt ullam quaerat.
          </p>
          <p className='text-white text-sm md:text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt aperiam perferendis, beatae necessitatibus illo, odit inventore aspernatur dignissimos facilis obcaecati iusto molestias itaque alias accusantium numquam ex sequi, rerum ipsam! Quisquam distinctio necessitatibus illo sunt accusantium. Ab recusandae, accusamus deserunt molestiae culpa repudiandae, nulla qui neque dolore error hic rerum.
          </p>
          <ul className='text-white/80 pt-5 ps-5 space-y-3 list-disc ' > 
            <li>
                 Lorem ipsum dolor sit amet.
            </li>
            <li>
                 Lorem ipsum dolor sit amet.
            </li>
            <li>
                 Lorem ipsum dolor sit amet.
            </li>
            <li>
                 Lorem ipsum dolor sit amet.
            </li>
            v
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

        {/* Featured */}
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
                  <div className='border-gray-300/20 border p-5 rounded-lg group'>
                  <div className=' h-[550px] w-full rounded-lg overflow-hidden mb-5'>
                    <img src={project1} alt="project-image" className='w-full h-full group-hover:scale-110 object-cover transition-all duration-300'/>
                  </div>
                  <Link to="projects">
                  <span className='text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg'>
                     Branding
                  </span>
                  <h3 className='text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300'> Musumes Art Concept  </h3>
                  </Link> 
                  </div>

                  <div className='border-gray-300/20 border p-5 rounded-lg group'>
                  <div className=' h-[550px] w-full rounded-lg overflow-hidden mb-5'>
                    <img src={project2} alt="project-image" className='w-full h-full group-hover:scale-110 object-cover transition-all duration-300'/>
                  </div>
                  <Link to="projects">
                  <span className='text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg'>
                     Markteing 
                  </span>
                  <h3 className='text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300'> Market Economy Graphics  </h3>
                  </Link> 
                  </div>

                  <div className='border-gray-300/20 border p-5 rounded-lg group'>
                  <div className=' h-[550px] w-full rounded-lg overflow-hidden mb-5'>
                    <img src={project3} alt="project-image" className='w-full h-full group-hover:scale-110 object-cover transition-all duration-300'/>
                  </div>
                  <Link to="projects">
                  <span className='text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg'>
                     Design 
                  </span>
                  <h3 className='text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300'> Headphone 3d Rendering    </h3>
                  </Link> 
                  </div>

                  <div className='border-gray-300/20 border p-5 rounded-lg group'>
                  <div className=' h-[550px] w-full rounded-lg overflow-hidden mb-5'>
                    <img src={project5} alt="project-image" className='w-full h-full group-hover:scale-110 object-cover transition-all duration-300'/>
                  </div>
                  <Link to="projects">
                  <span className='text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg'>
                     Design 
                  </span>
                  <h3 className='text-2xl sm:text-4xl font-semibold mt-2 hover:text-primary duration-300'> Business Card and logo    </h3>
                  </Link> 
                  </div>

                </div>
                
        </div>
    </>
  )
}

export default TeamDetails