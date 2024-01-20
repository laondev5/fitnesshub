"use client"
import Execises from '@/components/Execises'
import Hero from '@/components/Hero'
import Search from '@/components/Search'
import Image from 'next/image'
import { useState } from 'react'
import HorizontalScrollBar from '../components/HorizontalScrollBar';
import axios from 'axios';
import {useQuery } from '@tanstack/react-query';
import { exerciseOption, youtubeOptions } from '@/utility/FetchData'

export default function Home() {
  const [exercises, setExercises] = useState<[]>([]);
    const [bodyPart, setBodypart] = useState('all'); 
  return (
    <main>
      <Hero/>
      <Search setExercises = { setExercises }
        bodyPart = { bodyPart }
        setBodypart = { setBodypart }
        />
        <Execises setExercises = { setExercises }
        bodyPart = { bodyPart }
        exercises = { exercises }
        />
    </main>
  )
}
