import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {
  motion 

  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.8" className='w-full h-screen bg-zinc-900 pt-1 '> 
      <div className='textstructure mt-40 px-20'>
          <div className='masker font-semivbold '>
            <h1 className='uppercase text-9xl leading-none tracking-tighter'>We Create</h1>
            
           </div>
           <div className='masker font-semivbold w-fit flrx overflow-hidden '>

            
           
            <h1 className='uppercase text-9xl leading-none tracking-tighter'>
            
            
              <span className='text-green-500 '>
                
                Eye</span> Opening</h1>
                <motion.div initial={{width:0}} animate={{width:"11.5vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1 }} className='w-[11.5vw] h-[7vw] relative top-[1vw] bg-red-500 ml-3'></motion.div>
            
           </div>
           
           <div className='masker font-semivbold '>
            <h1 className='uppercase text-9xl leading-none tracking-tighter'>Presentations</h1>
            
           </div>

       </div>

        <div className='border-t-2 border-zinc-700 mt-32  flex justify-between items-center py-5 px-20'>
            {["For public and private Companies"," From the first pitch to IPO","Start the Project" ].map((item,index)=>( <p className='text-md font-light tracking-tight leading-none '>{item}</p>
            ))}
        </div>
    </div>
  )
}

export default LandingPage
