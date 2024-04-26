import { motion } from 'framer-motion'
import React, { useState } from 'react'
import  {Power4} from 'gsap/all'

function Features() {

    const [ishovering,sethovering] = useState(false);


  
  return (
    <div className=' w-full py-20 '>
     <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-600'>
        <h1 className=' text-7xl font-mono tracking-tight'>Featured Projects</h1>
        </div>
        <div className=" cards w-full flex gap-10 mt-10 px-20 ">

            

            <div onMouseEnter={()=>sethovering(true) }  onMouseLeave={()=> sethovering(false)} className=" relative cardcontainer w-1/2 h-[75vh]   ">

                <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-8xl font-thin leading-none tracking-tighter  '>
                <h1 className='absolute flex text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-8xl font-thin leading-none tracking-tighter  overflow-hidden  '>
                  {"".split('').map((item,index)=>(
                  <motion.span  className="inline-block " initial={{y:"100%"}} animate={ishovering ? {y:"0"} : {y: "100%"} }
                  transition={{ease:[0.22, 1, 0.36,1], delay:index*.06}} >
                    {item}
                    </motion.span>
                  ))}
                  </h1>
                </h1>
                <div className=' card  w-full h-full  rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>
               
            </div>
            <div className="cardcontainer relative w-1/2 h-[75vh]  rounded-xl ">
                <div onMouseEnter={()=>sethovering(true) }  onMouseLeave={()=> sethovering(false)} className=' card  w-full h-full  rounded-xl overflow-hidden '>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2  z-[9] text-8xl font-thin leading-none tracking-tighter  '>
                  {"VISE".split('').map((item,index)=>(
                  <motion.span  className="inline-block " initial={{y:"100%"}} animate={ishovering ? {y:"0"} : {y: "100%"} }
                  transition={{ease:[0.22, 1, 0.36,1], delay:index*.06}} >
                    {item}
                    </motion.span>
                  ))}
                  </h1>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </div>
               
            </div>
     </div>
    </div>
  )
}

export default Features
