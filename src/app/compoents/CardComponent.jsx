'use client'
import React from 'react'

const CardComponent = ({movie}) => {
  return (
    <div className='w-[280px]  bg-white p-4 rounded-lg'>
        <div className='h-[150px] w-full '>
            <img 
                // check default iamge
                src={movie.image != "" ? movie.image : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"} 
                alt="image" 
                className='h-[100%] w-full'
            />  
        </div>
        <div>
            <h3 className='mt-3 font-bold text-lg line-clamp-1'>
                {movie.movie_title}
            </h3>
            <p className='line-clamp-2 mt-2'>
                {movie.description}
            </p>
        </div>
    </div>
  )
}

export default CardComponent