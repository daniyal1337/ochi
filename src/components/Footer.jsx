import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className=' flex gap-5 w-full h-screen bg-zinc-900 p-20 '>
        <div className=' w-1/2 h-full  flex flex-col justify-between font-semibold '>
            <div className='heading '>
            <h1 className='text-[8vw] tracking-tighter leading-none uppercase -pb-10 '>Eye-</h1>
            <h1 className='text-[8vw] tracking-tighter leading-none uppercase -pb-10 text-red-600 '>Opening</h1>
            </div>
         <h3 className='text-2xl'>Ochi.</h3>
            
        </div>
        <div className='w-1/2 '>
        <h1 className='text-[6vw] tracking-tighter leading-none uppercase -pb-10 '>Presentations
        </h1>
        <div className='dets font-thin mt-10 '>
            <a className='block text-xl font-light' href="#">Facebook</a>
            <a className='block text-xl font-light' href="#">Instagaram</a>
            <a className='block text-xl font-light' href="#">Twitter</a>

        </div>
        
        </div>
      </div>
    )
  }
}

export default Footer
