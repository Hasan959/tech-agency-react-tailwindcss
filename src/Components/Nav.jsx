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
                Nov <span className='text-primary' >a.</span>  
            </Link>

            <div className='cursor-pointer z-60' onClick={() => setMenuOpen(!menuOpen)}>
              <span 
                   className= {`block w-10 h-0.5 transition-all duration-500
                   ${navBg ?"bg-black" : "bg-white"}
                   ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              >
              </span>
              <span 
                   className= {`block w-10 h-0.5 mt-2.5 transition-all duration-500
                   ${navBg ?"bg-black" : "bg-white"}
                   ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              >
              </span>
              
            </div>
          </div>
    </>
  )
}

export default Nav


