import { Icon } from '@iconify/react';
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
        <div  className={`navabar h-[90px] mx-auto  flex justify-between items-center px-[2%] md:px-[8%] xl:px-[12%] fixed top-0 left-0 right-0 z-50 transition-all duration-500 
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

          <div className= {`fixed top-0 left-0 w-full h-screen backdrop-blur-sm bg-black/90 text-white px-[2%] md:px-[8%] xl:px-[12%] z-20 flex flex-col justify-center items-start transform transition-all duration-700 ease-[cubic-beizer(0,77,0,0.75,1)] origin-top
          ${menuOpen
             ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
             : "opacity-0 -translate-y-10 scale-y-0 pointer-events-none " }`}>

              <ul className="space-y-10">
                 <li>
                   <Link to="/" className='text-4xl lg:text-6xl font-bold' 
                      onClick={()=> setMenuOpen(false) } >
                      Home
                   </Link>
                 </li>

                <li>
                  <Link to="/about" className='text-4xl lg:text-6xl font-bold' 
                    onClick={()=> setMenuOpen(false) } >
                      About
                  </Link>
                </li>

                  <li className='relative'>
                    <button onClick={()=> toggleDropdown("pages")}
                      className='flex cursor-pointer items-center text-4xl lg:text-6xl gap-2 font-bold  '>
                      pages
                      <Icon  icon="ri:arrow-down-s-line"
                             width="40"
                             hanging="40"
                             className={`transition-transform duration-700 
                              ${openDropdown ==="pages" ? "rotate-180" :"" }`} />

                    </button>
                    <ul className={`overflow-hidden transition-all duration-700
                       ${openDropdown === "pages" ? "max-h[400px] opacity-100 mt-3"
                        : " max-h-0 opacity-0 "
                       } `}>
                        {["Team" , "Services","Prices Plan", "FAQ"].map((item)=>(
                          <li key={item} >
                             <Link to={`/${item.toLocaleLowerCase().replace(/\s/g, "")}`}
                              className='block py-2 text-4xl font-semibold'
                               onClick={()=> {
                               setMenuOpen(false) 
                               setOpenDropdown("")}}>
                                {item}
                             </Link>
                          </li>

                        ))}

                    </ul>
                </li>


                 <li>
                  <Link to="/projects" className='text-4xl lg:text-6xl font-bold' 
                    onClick={()=> setMenuOpen(false) } >
                      Projects
                  </Link>
                </li>




                <li className='relative'>
                    <button onClick={()=> toggleDropdown("blogs")}
                      className='flex cursor-pointer items-center text-4xl lg:text-6xl gap-2 font-bold  '>
                      Blog
                      <Icon  icon="ri:arrow-down-s-line"
                             width="40"
                             hanging="40"
                             className={`transition-transform duration-700 
                              ${openDropdown === "blogs" ? "rotate-180" :"" }`} />
                    </button>

                    <ul className={`overflow-hidden transition-all duration-700
                       ${openDropdown === "blogs" ? "max-h[200px] opacity-100 mt-3"
                        : " max-h-0 opacity-0 "
                       } `}>
                        
                        <li>
                          <Link to="/blog" className=' block text-4xl font-semibold'
                           onClick={() =>{  setMenuOpen(false) 
                                           setOpenDropdown("")
                                         }}
                                         >
                                          Blog
                          </Link>
                        </li>

                         <li>
                          <Link to="/blog/1" className=' block text-4xl font-semibold'
                           onClick={() =>{  setMenuOpen(false) 
                                           setOpenDropdown("")
                                         }}
                                         >
                                          Blog Details
                          </Link>
                        </li>

                    </ul>
                </li>
                <li>
                  <Link to="/contact" className='text-4xl lg:text-6xl font-bold' 
                    onClick={()=> setMenuOpen(false) } >
                      Contact Us
                  </Link>
                </li>

                
              </ul>

             </div>
              
    </>
  )
}

export default Nav




// import { Icon } from '@iconify/react';
// import React, { useState } from 'react'
// import { Link } from 'react-router'
// const Nav = () => {
//   const [menuOpen , setMenuOpen] =useState(false);
// const [navBg, setNavBg ] = useState( false);
// const [openDropdown, setOpenDropdown ] =useState("");
// const toggleDropdown = (name) => {
//   setOpenDropdown(openDropdown === name ? "" : name  )
// }
//   return (
//    <>
//    <div className={` h-[90px] flex justify-between items-center px-[2%] md:px-[8%] xl:px-[12%] fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${navBg ? "bg-white shadow-lg text-black" : "bg-transparent text-white"}`}>

     
//     <Link to="/" className={` text-4xl font-semibold  ${navBg ? "text-black" : "text-white "  }`} >
//     Naha <span className='text-primary' > R </span>
//     </Link>

//     <div className='cursor-pointer z-60' onClick={()=> setMenuOpen(!menuOpen) } >
//       <span className= {`block w-10 h-0.5 transition-all duration-500 ${navBg ? "bg-black " : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2 " : "" } `} >
//       </span>
//       <span className={`block w-10 h-0.5 mt-2.5 transition-all duration-500 ${navBg ? "bg-black" : "bg-white"}
//        ${menuOpen ? "-rotate-45 -translate-y-1.5 ":""  } `}></span>
//     </div>
//    </div>


//    <div className={`fixed top-0 left-0 w-full h-screen backdrop-blur-sm bg-red-500  px-[2%] md:px-[8%] xl:px-[12%] z-20 flex flex-col justify-center items-start transform transition-all duration-700 ease-[cubic-beizer(0,77,0,0.75,1)] origin-top ${menuOpen ?
//      "opacity-100 translate-y-0 scale-100 pointer-events-auto text-white ":"opacity-0 -translate-y-10 scale-y-0 pointer-events-none text-orange-500"  }`}>
//     <ul className='space-y-10'>
//     <li>
//       <Link to="/" className='text-4xl lg:text-6xl font-bold ' onClick={()=> setMenuOpen(false) }  >
//       Home
//       </Link>
//     </li>

//       <li>
//         <Link to={"/about"} className='text-4xl lg:text-6xl font-bold' onClick={()=> setMenuOpen(false)} >
//          About
//         </Link>
//       </li>

//       <li className='relative' >
//         <button onClick={()=> toggleDropdown("pages")} className=' flex cursor-pointer items-center  text-4xl lg:text-6xl gap-2 font-bold '> Pages <Icon icon="ri:arrow-down-s-line" width="40" hanging="40" className={`transition-transform  duration-700 ${openDropdown === "pages" ? "rotate-180" : "" }`}  />  </button>
//         <ul className={`transition-all overflow-hidden duration-700 
//           ${openDropdown === "pages" ? "max-h[400px] opacity-100 mt-3  ": "max-h-0 opacity-0 "  } `} >
//           {["Team" , "Services", "Prices Plan", "FAQ"].map((item)=>( <li key={item}> <Link to={``} className='block py-2 text-4xl font-semibold' onClick={()=>{setMenuOpen(false) 
//           setOpenDropdown("")}} > {item} </Link>  </li> 
//            ))}
//         </ul>
//       </li>

//       <li>
//         <Link to="/projects" className='text-4xl lg:text-6xl font-bold' onClick={()=> setMenuOpen(false) } >
//         Projects
//         </Link>
//       </li>


//       <li className='relative'> 
//         <button> Blog </button>
//       </li>

    
//    </ul>
//    </div>
     
//    </>
//   )
// }

// export default Nav