import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { teamMembers } from './Team'
import title_icon from "../assets/Images/title_icon.svg"
import { Icon } from '@iconify/react'

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
        <div className='py-[8%] px-[2%] md:px-[8%] lx:px-[12%]'>
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
                   <Link to='https://www.facebook.com' className='cursor-pointer' target='blank'>
                  <Icon icon="flowbite:linkedin-solid" width="24" height='24' className='border border-white rounded-sm min-w-10 min-h-10 p-1'/>
                  </Link>
                </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default TeamDetails