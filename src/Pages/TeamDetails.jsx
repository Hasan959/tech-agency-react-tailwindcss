import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { teamMembers } from './Team'
import title_icon from "../assets/Images/title_icon.svg"

  const TeamDetails = () => {
  const {id} =useParams()
  const navigate = useNavigate() 

  const member = teamMembers.find(m=> m.id ===id)

  //export variable from team.jsx
  
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

              <img src={member.img} alt="" />
              
            </div>

          </div>
        </div>
    </>
  )
}

export default TeamDetails