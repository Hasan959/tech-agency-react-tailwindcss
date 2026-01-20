
import React from 'react'
import { Link } from 'react-router'
import { Icon } from '@iconify/react'

import gallery1 from "../assets/Images/post1.jpg"
import gallery2 from "../assets/Images/post2.jpg"
import gallery3 from "../assets/Images/post3.jpg"
import gallery4 from "../assets/Images/post4.jpg"
import gallery5 from "../assets/Images/post5.jpg"
import gallery6 from "../assets/Images/post6.jpg"



const Footer = () => {
  const galleryImages = [gallery1 ,gallery2, gallery3, gallery4,gallery5,gallery6 ]

   
  return (
    //footer start
    <footer className='bg-black text-gray-300 pt-10 pb-5 px-[2%] md:px-[8%] xl:px-[12%]'>
       <div className='max-w-7xl px-5 mx-auto border border-gray-800' >
        <div className='grid md:grid-cols-3 gap-10 py-15 '>
          <div>
            <h3 className='text-white text-2xl font-semibold mb-3'> Information</h3>
            <p className="text-gray-400">
              From the moment our company was founded, we have helped our clients exceptional solutions <strong> for their business. </strong>
            </p>
          </div>
           {/* Get In Touch */}
            <div>
              <h3 className='text-white text-2xl font-semibold mb-3 ' > Get In Touch  </h3>
              <p className="text-gray-400">
                Bajrd House , 15-17 St Cross St <br/> London EC1N 8UW 
             </p>
              <p className='text-gray-400 mb-1' > +8801755327835</p>
              <p className='text-gray-400 mb-1' > username@domain.com </p>
          </div>
           {/* Gallery */}
           <div className='flex flex-wrap gap-3 justify-start md:justify-end  '>
            {galleryImages.map((img,index) => (
                <img
                key={index} 
                src={img} 
                alt={`gallery-${index}`}
                className='rounded w-[90px] h-[70px] object-cover hover:scale-110 transition-all '
                 
                />

            ) )}
           </div>
        </div>
         <hr className='border-gray-700 mb-6' />

         <div className='flex flex-col md:flex-row justify-between  items-center  gap-5  ' >
          <p className='text-gray-400 text-sm ' >
            &copy; 2025 by Hasan Mhamud.  All Right Reserved 
          </p>
          <div className='flex gap-4 pb-2 ' >
            <Link to="#"
                  className='text-white border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 '
                  >
                    <Icon icon="mdi:facebook" width="22" height="22"  />
            </Link>
            <Link to="#"
                  className='text-white border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 '
                  >
                    <Icon icon="uil:twitter" width="22" height="22"  />
            </Link>
            <Link to="#"
                  className='text-white border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 '
                  >
                    <Icon icon="uil:twitter" width="22" height="22"  />
            </Link>
            <Link to="#"
                  className='text-white border border-gray-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 '
                  >
                    <Icon icon="ri:linkedin-fill" width="22" height="22"  />
            </Link>
          </div>
         </div>
         
       </div>
       {/* footer  end */}
       
    </footer>
    
  )
}

export default Footer
