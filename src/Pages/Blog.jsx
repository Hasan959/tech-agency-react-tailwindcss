import React from 'react'
import { Link } from 'react-router'

import title_icon from "../assets/Images/title_icon.svg"

import blog1 from "../assets/Images/blog_01.jpg"
import blog2 from "../assets/Images/blog_02.jpg"
import blog3 from "../assets/Images/blog_03.jpg"
import blog4 from "../assets/Images/blog_04.jpg"
import blog5 from "../assets/Images/blog_05.jpg"
import blog6 from "../assets/Images/blog_06.jpg"

const Blog = () => {


  const blogs = [
      {
        id: 1,
        date:'April 10, 2025',
        category:"Art",
        title:"Play to your strength and supercharge your business ",
        description:"Ambletion: Behind the branding",
        image:blog1,
      },
      {
        id: 2,
        date:'May 10, 2025',
        category:"Markteing",
        title:"Play to your strength and supercharge your business ",
        description:"Ambletion: Behind the branding",
        image:blog2,
      },
      {
        id: 3,
        date:'June 10, 2025',
        category:"Copywriting",
        title:"Play to your strength and supercharge your business ",
        description:"Ambletion: Behind the branding",
        image:blog3,
      },
      {
        id: 4,
        date:'April 127, 2026',
        category:"Design",
        title:"Play to your strength and supercharge your business ",
        description:"Ambletion: Behind the branding",
        image:blog4,
      },
      {
        id: 5,
        date:'May 10, 2025',
        category:"Technology",
        title:"Play to your strength and supercharge your business ",
        description:"Ambletion: Behind the branding",
        image:blog5,
      },
      {
        id: 6,
        date:'June 10, 2025',
        category:"Development",
        title:"Play to your strength and supercharge your business ",
        description:"Ambletion: Behind the branding",
        image:blog6,
      }
     ];


  return (
    <>
       {/* div start  */}
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          News & Blog 
          <span className='absolute hidden sm:flex top-0 right-35 w-10 h-10' >
            <img src={title_icon} alt="icon" className='w-full h-full'  />
          </span>
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
           Insights ,thoughts, industy trends, markteing tips. 
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to={"/index"} className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className='font-normal text-white text-lg'>
              News & blog 
            </Link>
          </li>
         </ul>
      </div>
      {/* div end */}

       <div className='py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 '>    
             
                {blogs.map((blog)=>(
                    <div key={blog.id} className='blog-item group flex-col text-white  '>
      
                      <div className='blog-image overflow-hidden rounded-lg ' >
                      <img 
                      src={blog.image}
                      alt={blog.title} 
                      className='group-hover:scale-110 transition-all duration-300 '
                      />
                      </div>
      
                      <div className='blog-content pt-5'>
                        <p className='text-lg font-semibold pb-2'>
                          <span className='bg-lime-300 text-black px-3 py-1 rounded-full me-3 '>
                            {blog.date}
                          </span>
      
                          {blog.category}
                        </p>
                        <Link to={`/blog/${blog.id}`} className='text-xl font-semibold hover:text-lime-300 transition-all ' >
                        {blog.title}
                        </Link>
                        <p className='text-md text-gray-300 mt-3'> {blog.description} </p>
                      </div>
      
                    </div>
        
                ))}
      </div>
      
    </>
  )
}

export default Blog