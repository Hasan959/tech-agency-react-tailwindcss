import React, { useState } from 'react'
import { Link } from 'react-router'

import project1 from "../assets/Images/project-01.jpg"
import project2 from "../assets/Images/project-02.jpg"
import project3 from "../assets/Images/project-03.jpg"
import project4 from "../assets/Images/project-04.jpg"
import project5 from "../assets/Images/project-05.jpg"
import project6 from "../assets/Images/project-06.jpg"
import project7 from "../assets/Images/project-07.jpg"
import project8 from "../assets/Images/project-08.jpg"

const projects = [
  {id:1,image: project1, category:"Branding",title:"Museums Art Concept" },
  {id:2,image: project2, category:"Markteing",title:"Market Economy Graphics" },
  {id:3,image: project3, category:"Design",title:"Headphones 3d Rendering " },
  {id:4,image: project4, category:"Branding",title:"Product Packing Style" },
  {id:5,image: project5, category:"Desing",title:"BusinessCard logo" },
  {id:6,image: project6, category:"Branding",title:"Museums Art Concept" },
  {id:7,image: project7, category:"Interactive",title:"Daily weather Mobile App " },
  {id:8,image: project8, category:"Markteing",title:"Colorful Ice Cream Ornament  " },
]

const Projects = () => {

  const [filter, setFilter] = useState("All Projects")
  const categories = ['All Projects','Markteing','Interactive','Design','Branding']
  const filteredData = filter === "All Projects" ? projects : projects.filter((item)=>item.category===filter)  

  return (
    <>
       <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          Our Projects 
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
         Creative studio at the intersection of art ,design techonology.
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to="/" className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className='font-normal text-white text-lg'>
              Our Projects  
            </Link>
          </li>
         </ul>
        </div>
        <div className='py-[8%] px-[5%] xl:px-[12%] flex flex-col lg:flex-row'>
          <div className='lg:w-[25%] p-5 rounded-lg  '>
            <ul className='text-gray-400 space-y-5 text-xl'>
                 {categories.map((cat)=>(
                  <li key={cat} onClick={()=> setFilter(cat)} className={`cursor-pointer hover:text-white transition-all ${filter === cat ? "text-white font-semibold ": "" } `} >
                    {cat}
                  </li>
                 ))}
            </ul>
          </div>

          <div className='lg:w-[75%] grid grid-cols-1 md:grid-cols-2'>
            {filteredData.map((item) =>(
              <div key={item.id} className='border-b border-gray-300/20 p-5 rounded-lg group'>
                
              </div>
            ) )}
          </div>
        </div>
    </>
  )
}

export default Projects