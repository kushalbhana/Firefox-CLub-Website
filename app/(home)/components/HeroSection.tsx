import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function HeroSection() {
  return (
    <div className=' min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-4xl lg:text-7x1 font-bold'>
          Firefox Club
          <br/>
          <span className='underline underline-offset-8 decoration-blue-600'>
            {"Events"}
          </span> 
        </h1>
        <p className='md:w-96 text-lg text-gray-300'>
          {"Explore the events and get to know about the latest technologies and trends."}
        </p>
        <Link href={"mailto:om.works01@gmail.com"} className='inline-block'>
          <Title text='Register Now !'/>
        </Link>
      </div>
      <div className='relative'>
        <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>

          <div className='flex gap-3 translate-x-8'>

          <div className='w-32 h-32 rounded-2xl bg-blue-500'></div>
          <div className='w-32 h-32 rounded-full bg-purple-600'></div>

          </div>

          <div className='flex gap-3 -translate-x-8'>

          <div className='w-32 h-32 rounded-2xl bg-purple-600'></div>
          <div className='w-32 h-32 rounded-full bg-blue-500'></div>
          

          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>

        </div>
        <div className='absolute bottom-5 sm:bottom-14 left-0 sm:-left-10'>
        <MovingBorderBtn borderRadius='0.5rem' className='p-3 font-semibold'>
          <Link href={"https://drive.google.com/file/d/18Czj8bBc4Z267YxxqtsaSB1TS50nsthV/view?usp=sharing"}>{"Don't Click ☠️ "}</Link>
        </MovingBorderBtn>
        </div>
      </div>
    </div>
  )
}
