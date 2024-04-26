import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-3xl text-black font-semibold '>
        <h1 className='text-[4.5vw] leading-[4.5vw] tracking-tight  '> Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple</h1>
      <div className=' w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#474e25]'>
          <div className='w-1/2 '>
          <h1 className='text-7xl'>Our Approach:</h1>
           <button className=' flex gap-7 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full  text-white '>READ MORE
           <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
           </button>
          </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-red-400'></div>
      </div>

    </div>
  )
}

export default About
