"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAmazonaws, SiDocker, SiGraphql, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si'

export default function Skills() {
    const skills=[
        {
            text: 'Next.js',
            Icon: SiNextdotjs
            },
            {
            text: 'Tailwind CSS',
            Icon: SiTailwindcss
            },
            {
            text: 'TypeScript',
            Icon: SiTypescript
            },
            {
            text: 'AWS',
            Icon: SiAmazonaws
            },
            {
            text: 'Docker',
            Icon: SiDocker
            },
            {
            text: 'PostgreSQL',
            Icon: SiPostgresql  
        }
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Skills 🛠️' className='flex flex-col items-center justify-center -rotate-6'/>
        <HoverEffect items={skills}/>
    </div>
  )
}
