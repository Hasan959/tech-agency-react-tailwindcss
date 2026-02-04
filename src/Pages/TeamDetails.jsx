import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { teamMembers } from './Team'
import title_icon from "../assets/Images/title_icon.svg"

  const TeamDetails = () => {
  const {id} =useParams()
  const navigate = useNavigate() 

  const member = teamMembers.find(m=> m.id ===id)

  //export variable from team.jsx
  //export variable from team.jsx
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
         </ul>
        </div>
    </>
  )
}

export default TeamDetails