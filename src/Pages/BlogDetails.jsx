import React from 'react'
import { Link, useParams } from 'react-router'
import title_icon from "../assets/Images/title_icon.svg"

import blog1 from "../assets/Images/blog_01.jpg"
import blog2 from "../assets/Images/blog_02.jpg"
import blog3 from "../assets/Images/blog_03.jpg"
import blog4 from "../assets/Images/blog_04.jpg"
import blog5 from "../assets/Images/blog_05.jpg"
import blog6 from "../assets/Images/blog_06.jpg"

import post1 from "../assets/Images/blogpost01.jpg"
import post2 from "../assets/Images/blogpost02.jpg"
import post3 from "../assets/Images/blogpost03.jpg"


const BlogDetails = () => {

  const blogs = [
        {
          id: 1,
          date:'April 10, 2025',
          category:"Art",
          title:"Play to your strength and supercharge your business ",
         
          image:blog1,
        },
        {
          id: 2,
          date:'May 10, 2025',
          category:"Markteing",
          title:"Play to your strength and supercharge your business ",
          
          image:blog2,
        },
        {
          id: 3,
          date:'June 10, 2025',
          category:"Copywriting",
          title:"Play to your strength and supercharge your business ",
         
          image:blog3,
        },
        {
          id: 4,
          date:'April 127, 2026',
          category:"Design",
          title:"Play to your strength and supercharge your business ",
         
          image:blog4,
        },
        {
          id: 5,
          date:'May 10, 2025',
          category:"Technology",
          title:"Play to your strength and supercharge your business ",
         
          image:blog5,
        },
        {
          id: 6,
          date:'June 10, 2025',
          category:"Development",
          title:"Play to your strength and supercharge your business ",
          
          image:blog6,
        }
       ];

       const {id} =useParams()
       const blog = blogs.find((b)=> b.id === Number(id)) 
       if(!blog) return <div className='text-center text-red-500 py-20'> page not found  </div> 

  return (
    <>
      {/* div start  */}
      <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-2xl md:text-5xl lg:text-7xl font-semibold w-full lg:max-w-5xl relative pb-3 ' >
          {blog.title}
          <span className='absolute hidden sm:flex top-0 right-35 w-10 h-10' >
            <img src={title_icon} alt="icon" className='w-full h-full'  />
          </span>
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
           {blog.date} - {blog.category} 
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to={"/index"} className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className='font-normal text-white text-lg'>
              blog 
            </Link>
          </li>
          <li>
            <Link to="/blog" className='font-normal text-white text-lg'>
              {blog.title}
            </Link>
          </li>
         </ul>
      </div>
      {/* div end */}

      <div className='py-[8%] px-[2%] md:px-[8%] xl:px-[12%] text-white'>
        <img src={blog.image} alt={blog.title} className='rounded-lg w-full h-[800px] object-cover'/>
        <p className='mt-8 text-lg text-gray-300 leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur dolor ea sed est eos ipsa quis id quisquam dolorum nostrum, eligendi, numquam vel in ab! Praesentium iste temporibus accusantium aperiam eaque laboriosam, provident, quidem beatae quasi amet, non quae asperiores veniam reprehenderit adipisci. Eveniet asperiores quia blanditiis ullam enim, veritatis quaerat voluptatum cupiditate non possimus iusto, quam placeat ratione!
        </p>
        <p className='mt-8 text-lg text-gray-300 leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consequatur dolor ea sed est eos ipsa quis id quisquam dolorum nostrum, eligendi, numquam vel in ab! Praesentium iste temporibus accusantium aperiam eaque laboriosam, provident, quidem beatae quasi amet, non quae asperiores veniam reprehenderit adipisci. Eveniet asperiores quia blanditiis ullam enim, veritatis quaerat voluptatum cupiditate non possimus iusto, quam placeat ratione!
        </p>

        <h3 className='text-5xl font-semibold pt-10 pb-4'> custom Listing Styles </h3>

        <ul className='space-y-5 list-disc ps-5 text-xl text-gray-300'>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quis.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quis.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quis.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quis.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quis.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, quis.
          </li>
        </ul>

        <div className='bg-black mt-10 border border-lime-300 p-8 md:p-12 rounded-md relative'>
          <p className='text-2xl md:text-3xl font-semibold leading-tight '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus magnam asperiores vitae eos dolorem laudantium quisquam iusto tempora. Quos!
          </p>
        </div>
        <p className='mt-8 text-lg text-gray-300 leading-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus exercitationem eligendi voluptatem quo, ipsa error perspiciatis distinctio pariatur dicta vero at praesentium earum quod incidunt quos odit voluptatum ea.
        </p>
        <h3 className='text-5xl font-semibold pt-10 pb-4'> Whats Next </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ab, soluta eaque assumenda laborum similique. Similique eveniet vitae, iure nemo, <b> harum dolores doloremque magni placeat incidunt quisquam </b>asperiores minima necessitatibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vel dolorem est veniam eligendi tenetur reprehenderit porro ipsa autem deserunt?
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-10'>
          <img src={post1} alt="post-image"/>
          <img src={post2} alt="post-image"/>
          <img src={post3} alt="post-image"/>
        </div>
      </div>
    </>
  )
}

export default BlogDetails