import React from 'react'
import { Link, useParams } from 'react-router'

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

const ProjectDetails = () => {

  const{id} =useParams()
  const project = projects.find((p) => p.id === Number(id))

  if(!project){
    return <h2 className='text-center text-white py-10'> project Not found </h2>
  }


  return (
    <>
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          {project.title}
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
              {project.title} 
            </Link>
          </li>
         </ul>
      </div>

      <div className='py-[8%] px-[2%] md:px-[8%] xl:px-[12%] text-white ' >
        <div className='w-full h-[500px] overflow-hidden rounded-lg'>
          <img src={project.image} alt={project.title} className='w-full h-full object-cover ' />
        </div>

        <p className='text-gray-400 text-lg mt-8 leading-relaxed'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex vel deleniti eveniet corporis natus temporibus soluta libero odio doloremque exercitationem fugiat itaque error et quam nobis illum totam assumenda, blanditiis cumque dolorum! Quia ex quidem fugit laudantium minus. Cumque sequi consequuntur repudiandae aut ipsum doloribus in minima totam magni, rerum corrupti. Ullam ad perferendis consequuntur tenetur exercitationem harum voluptatem accusantium.
        </p>
        <p className='text-gray-400 text-lg mt-8 leading-relaxed'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim excepturi iste doloremque nulla nemo quia facilis magnam aliquam quod.<b> Commodi, excepturi quos? Commodi eius recusandae error voluptate debitis dicta ut ipsa ad consectetur ducimus eveniet possimus</b>, quos eos, ratione ab praesentium nam veniam tempore sint dolore esse temporibus? Eaque, unde!
        </p>
      </div>
      <div className='pb-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 xl:grid-cols-2
       text-white gap-10 w-full lg:w-[90%] xl:w-full'>
        {projects.map((item)=>(
          <div key={item.id} className='border- border-gray-300/20 p-5 rounded-lg group'>
            <div className='h-[550px] w-full rounded-lg overflow-hidden mb-5'>
              <img src={item.image} alt={item.title} className='w-full h-full group-hover:scale-110 object-cover transition-all duration-300'/>
            </div>
            <Link to={`/projects/${item.id}`}>
               <span className='text-white border border-gray-50/20 px-2 py-1 font-semibold text-lg rounded-sm'>
                {item.category}
               </span>
               <h3 className='text-2xl text-white sm:text-3xl font-semibold mt-2 hover:text-primary duration-300 transition-all'>
               {item.title}
                </h3>
            </Link>
          </div>
        ))}

      </div>
    </>
  )
}

export default ProjectDetails