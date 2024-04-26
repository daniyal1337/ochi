import { easeIn, motion } from 'framer-motion'
import React from 'react'

function Marque() {
  
   
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".3" className='w-full h-[80vh] rounded-3xl py-20 bg-[#004C42] text-white'>
        <div className='text  border-t-2 border-b-2 border-zinc-300 flex   whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[17vw] leading-none font-semibold uppercase mb-10 pt-5 pr-20 '>We are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className='text-[17vw] leading-none font-semibold uppercase mb-10 pt-5 pr-20  '>We are ochi</motion.h1>
       
        </div>
      
    </div>
  )
}

export default Marque
