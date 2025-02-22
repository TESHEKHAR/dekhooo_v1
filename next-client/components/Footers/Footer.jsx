import React from 'react'

function Footer() {
  return (
    <div className='bg-[#f5f5f5] '>
     <div className='flex justify-between items-start gap-3 max-w-[1360px] mx-auto py-[40px]'>
      <div className='flex flex-col justify-center gap-3 w-[33.33%]'>
        <h1 className='text-3xl'>Dekhooo</h1>
        <p className='text-[#6e6e6e]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
     <div className='flex flex-col justify-center gap-3'>
        <a href='#' className='text-[#6e6e6e]'>Home</a>
        <a href='#' className='text-[#6e6e6e]'>About</a>
        <a href='#' className='text-[#6e6e6e]'>Contact</a>
        <a href='#' className='text-[#6e6e6e]'>Privacy Policy</a>
      </div>
      <div className='flex flex-col justify-center gap-3'>
        <a href='#' className='text-[#6e6e6e]'>Home</a>
        <a href='#' className='text-[#6e6e6e]'>About</a>
        <a href='#' className='text-[#6e6e6e]'>Contact</a>
        <a href='#' className='text-[#6e6e6e]'>Privacy Policy</a>
      </div>
      <div className='flex flex-col justify-center gap-3'>
        <a href='#' className='text-[#6e6e6e]'>Home</a>
        <a href='#' className='text-[#6e6e6e]'>About</a>
        <a href='#' className='text-[#6e6e6e]'>Contact</a>
        <a href='#' className='text-[#6e6e6e]'>Privacy Policy</a>
      </div>
     </div>
      <div className='flex justify-center bg-black py-3'>
        <p className='text-[#fff]'>© 2025 Dekhooo.com. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer