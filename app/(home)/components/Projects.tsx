import React from 'react'
import { SiAppwrite, SiDocker, SiFlutter, SiGithub, SiGoogle, SiGooglecloud, SiNextdotjs, SiNodedotjs, SiPostgresql, SiSanity, SiTailwindcss, SiTrpc } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const projects = [
        {
            title: 'Event-1',
            tech: [SiNextdotjs,SiTrpc,SiPostgresql,SiSanity,SiTailwindcss],
            link:"https://yardstoacres-com.vercel.app/",
            cover:"/event-img2.jpg",
            background:"bg-blue-500"
        },
        {
            title: 'Event-2',
            tech: [SiFlutter,SiAppwrite,SiGithub],
            link:"https://github.com/ommgh/devtown",
            cover:"/event-img3.jpg",
            background:"bg-green-400"
        },
        {
            title: 'Event-3',
            tech: [SiNextdotjs,SiNodedotjs,SiPostgresql,SiTailwindcss,SiGooglecloud],
            link:"https://scan2sell.vercel.app",
            cover:"/event-img4.jpg",
            background:"bg-green-400"
        },
        {
            title: 'Event-4',
            tech: [SiNextdotjs,SiTrpc,SiPostgresql,SiTailwindcss],
            link:"https://cuesource.vercel.app/",
            cover:"/event-img5.jpg",
            background:"bg-blue-500"
        }

    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text='Gallery' className='flex flex-col items-center justify-center rotate-6'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project,index)=>{
                return <Link href ={project.link} key={index}>
                    <div className={cn("p-5 rounded-md",project.background)}>
                        <DirectionAwareHover
                        imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                            <h1 className='text-2xl font-bold'>{project.title}</h1>
                            </div>
                        </DirectionAwareHover>
                    </div>
                </Link> ;
            })}

        </div>
    </div>
  )
}
