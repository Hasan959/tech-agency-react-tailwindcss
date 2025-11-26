import React from 'react'
import heroVideo from "../assets/Images/hero-video.mp4"

const Index = () => {
  return (
    
    <>
    {/* Hero */}
       <div className='h-screen w-full relative overflow-hidden' >
        <video autoPlay loop muted playsInline className='absolute top-0 left-0 w-full h-full object-cover' >
          <source src={heroVideo} type='video/mp4'/>

        </video>
       </div>

    </>
  )
}

export default Index