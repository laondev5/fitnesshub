import React from 'react'
import Container from './Container'
import Image from 'next/image';
import bg from "../public/bg.jpg"
import { Button } from './ui/button';
const Hero = () => {
  return (
    <div className="w-full h-[70vh] overflow-hidden">
      <div className="absolute w-full h-[70vh] -z-10 overflow-hidden">
        <Image
          src={bg}
          alt="hero"
          className='w-full'
          width={1200}
          height={60}
          objectFit="cover"
        />
      </div>
        <div className="w-full h-full backdrop-brightness-50">
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-8 w-[30rem]  h-[25rem] shadow-lg pt-12 px-6 bg-black/70 rounded-b-md text-white">
                <div className='font-bold text-xl md:text-2xl lg:text-4xl pt-6 pb-3'>You Only Fail When You Stop Trying</div>
                <p className='font-semibold text-md text-gray-100 mt-4 '>Build your body, Build your mind set start a workout routen today and grow your mind</p>
                <Button variant="secondary" size="lg" className='bg-orange-600 mt-3 text-white font-semibold'>
                  Get Started
                </Button>
              </div>
            </div>
          </Container>
        </div>
      
    </div>
  );
}

export default Hero