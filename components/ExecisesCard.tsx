import Image from 'next/image'
import React, { lazy } from 'react'
import Link from 'next/link'

const ExecisesCard = ({exercise, key}) => {
    //console.log(exercise)
    const srcGif = exercise.gifUrl
  return (
    <Link href="#">
    <div key={key} className='w-[20rem] h-[27rem] shadow-sm hover:w-[22rem] hover:h-[29rem] hover:shadow-lg rounded-md py-4 px-6 transition-all ease-in-out duration-300'>
        <Image 
        loader={()=> srcGif}
        src={srcGif} 
        alt={exercise.name} 
        width={100}
        height={100}
        className='w-full'

        />
        <h1 className='font-semibold text-2xl text-red-600'>{exercise.name}</h1>
        <p className='text-gray-600 text-sm py-1'>Targeted body part: <span className='text-md font-semibold'>{exercise.target}</span></p>
        <p className='text-gray-600 text-sm py-1'>Equipment: <span className='text-md font-semibold'>{exercise.equipment}</span></p>
    </div>
    </Link>
  )
}

export default ExecisesCard