
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
  return (
    <footer className='bg-black text-gray-300 pt-10 pb-5 px-[2%] md:px-[8%] xl:px-[12%]'>
       <div className='max-w-7xl mx-auto border border-gray-600' >
        <div className='grid md:grid-cols-3 gap-10 py-15 '>
          <div>
            <h3 className='text-white text-2xl font-semibold mb-3'> Information</h3>
            <p className="text-gray-400">
              From the moment our company was founded, we have helped our clients exceptional solutions <strong> for their business. </strong>
            </p>
          </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer