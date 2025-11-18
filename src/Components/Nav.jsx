import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] =useState("");
     const [navBg, setNavBg] = useState(false);

     const toggleDropdown = (name) => {
      setOpenDropdown(openDropdown === name ? "" : name)
     }

     useEffect(()=> {
      const  handleScroll = () => {
        setNavBg(window.scrollY > 100)
      }
     },[]);

  return (
    <>
        <div  className={`navabar h-[90px] flex justify-between items-center px-[2%] md:px-[8%] xl:px-[12%] fixed top-0 left-0 right-0 z-0 transition-all duration-500 
          ${navBg ? "bg-white shadow-lg text-black" : "bg-transparent text-white"}`} >
            <Link to="/" className={`logo text-4xl font-semibold transition-all duration-500
               ${navBg ? "text-black" : "text-white"}`}>
                Nov <span className='text-black' >a.</span>  
            </Link>
          </div>
    </>
  )
}

export default Nav


