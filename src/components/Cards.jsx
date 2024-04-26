import React from 'react'

function Cards() {
  return (
    <div className=' flex items-center px-32 gap-5 w-full h-screen bg-zinc-600 '>
      <div className='cardcontainer h-[50vh] w-1/2 '>
        <div className='card relative flex items-center justify-center  w-full h-full bg-[#004C42] rounded-xl '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-green-100 text-green-100 '>2024-2025  &copy;</button>
             </div>

      </div>
      <div className='cardcontainer flex gap-5 w-1/2  h-[50vh]'>
      <div className='card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl'>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-green-100 text-green-100 '>2024-2025  &copy;</button> </div>
      <div className='card relative flex items-center justify-center w-1/2 h-full bg-[#212121] rounded-xl '>
      <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-10 bottom-10 px-5 py-1 rounded-full border-2 border-green-100 text-green-100 '>2024-2025  &copy;</button>
         </div>
         
        </div>
    </div>
  )
}

export default Cards
