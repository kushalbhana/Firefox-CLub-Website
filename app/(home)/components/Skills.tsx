"use client";

import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiAmazonaws, SiCrowdsource, SiDocker, SiGithub, SiGraphql, SiMan, SiNextdotjs, SiPagekit, SiPersonio, SiPostgresql, SiReact, SiTailwindcss, SiTypescript ,SiCarrd } from 'react-icons/si'
import { BiSolidCertification, BiSolidTrophy } from 'react-icons/bi';

export default function Skills() {
    const skills=[
        {
            text: 'Exciting Prizes',
            Icon: BiSolidTrophy
            },
            {
            text: 'Networking',
            Icon: SiCrowdsource
            },
            {
            text: 'Certificates',
            Icon: SiPagekit
            },
            {
            text: 'Enchance Skills',
            Icon: SiReact
            },
            {
            text: 'Collaboration',
            Icon: SiGithub
            },
            {
            text: 'Resume Building',
            Icon: SiCarrd  
        }
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title text='Benifits' className='flex flex-col items-center justify-center -rotate-6'/>
        <HoverEffect items={skills}/>
    </div>
  )
}
