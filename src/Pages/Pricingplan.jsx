import { Icon } from '@iconify/react'
import React from 'react'
import { Link } from 'react-router'


const plans = [
  {
    title:'Strandard Package',
    duration: '3 month',
    price:'$60.10',
    Icon:'solar:rocket-bold',
    recommended:true,
    features:[
      {text: 'unlimited updates',active:true},
      {text:'Custom permissions',active:true},
      {text:'Custom insfrastructure',active:false},
      {text:'Custom design and features',active:false},
      
    ],
  },
  {
    title:'professional package',
    duration: '3 month',
    price:'$60.10',
    Icon:'solar:rocket-bold',
    recommended:false,
    features:[
      {text: 'unlimited updates',active:true},
      {text:'Custom permissions',active:true},
      {text:'Custom insfrastructure',active:false},
      {text:'Custom design and features',active:false},
      
    ],
  },
  {
    title:'Business Package',
    duration: '3 month',
    price:'$60.10',
    icon:'solar:rocket-bold',
    recommended:false,
    features:[
      {text: 'unlimited updates',active:true},
      {text:'Custom permissions',active:true},
      {text:'Custom insfrastructure',active:false},
      {text:'Custom design and features',active:false},
      
    ],
  },
]

const Pricingplan = () => {
  return (
    <>
       <div className="section-banner h-[500px] bg-[#121212] px-[2%] md:px-[8%] xl:px-[12%] flex flex-col justify-end items-start text-white w-full">
        <h2 className='text-5xl lg:text-7xl font-semibold w-full lg:max-w-2xl relative pb-3 ' >
          Pricing Plan 
        </h2>
        <p className='border-b-2 w-full pb-10 border-gray-300 ' >  
          It helps you choose prices to maximise 
         </p>
         <ul className='flex gap-8 py-5 ' >
          <li>
            <Link to={"/index"} className='font-normal text-white text-lg'>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/pricingplan"} className='font-normal text-white text-lg'>
              Pricingplan 
            </Link>
          </li>
         </ul>
        </div>

        <div className='py-[8%] px-[2%] md:px-[8%] xl:px-[12%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
          {
            plans.map((plan,idx) =>(
              
              <div key={idx} className={`border border-gray-50/20 rounded-lg relative ${plan.recommended ? 'shadow-[0px_0px_25px_rgba(0,0,0,0.2)]' : '' }`}>
                {plan.recommended && (
                  <span className=' absolute -top-4 right-6 bg-white text-black text-sm px-3 py-1 rounded-sm'>
                    Recommended 
                  </span>
                ) }
              </div>
            ))
          }
        </div>
    </>
  )
}

export default Pricingplan