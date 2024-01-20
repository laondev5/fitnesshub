"use client"
import React, {useState, useEffect} from 'react'
import { exerciseOption, youtubeOptions, fetchData } from '@/utility/FetchData'
import ExecisesCard from './ExecisesCard'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import Container from './Container'

const Execises = ({setExercises, exercises}) => {
  const execisesUrl: string ="https://exercisedb.p.rapidapi.com/exercises" ;

  const {data: execiseData, isLoading, isError, isSuccess} = useQuery({queryKey: ["execise"], queryFn:async ()=>{
      const dataResponse = await axios.get(execisesUrl, exerciseOption)
      
      return dataResponse.data;
  }})
  setExercises(execiseData)
  return (
    <Container>
      <h1 className='text-gray-700 dark:text-white font-bold text-2xl text-center lg:text-left'>Execises</h1>
      
      {isLoading && <div className='w-full flex justify-center items-center py-12'>
        <div className='w-[5rem] h-[5rem] rounded-full animate-spin flex items-center justify-center bg-blue-950 dark:bg-white'>
          <div className='w-[3rem] h-[3rem] bg-white rounded-full dark:bg-blue-950'></div>
        </div>
        </div>}
      {isError && <p>Error :(</p>}
      {isSuccess ? 
        <div className='flex space-x-4 overflow-x-scroll py-8 px-4'>
          {exercises.map((execiseItem: any, index: number) =>(
            <ExecisesCard exercise={execiseItem} key={index}/>
          ))}
          
        </div>: <div className='hidden'></div>
        }
      
    </Container>
    
  )
}

export default Execises