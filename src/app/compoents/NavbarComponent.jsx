import React from 'react'

const NavbarComponent = () => {
  return (
    <div className='fixed z-10 w-full'>
      <div className='flex justify-between items-center px-5 fo h-[70px] '>
        <div>
           <a href="#">
            <img className='cursor-pointer w-[140px] ml-1' src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="logo" /> 
           </a>
        </div>
        <div>
            <ul className='flex items-center gap-x-12 text-white'>
                <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg duration-300  cursor-pointer'>Home</li>
                <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg duration-300  cursor-pointer'>Popular</li>
                <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg duration-300  cursor-pointer'>Romance</li>
                <li className='hover:bg-white hover:text-black px-4 py-2 rounded-lg duration-300  cursor-pointer'>Anime</li>   
                <input type="text" placeholder="Type here..." className="text-black input input-bordered input-accent w-[200px]  h-10" />
            </ul>
        </div>
    </div>
    </div>
  )
}

export default NavbarComponent