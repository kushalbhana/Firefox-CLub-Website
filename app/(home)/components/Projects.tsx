import React from 'react'
import { SiAppwrite, SiDocker, SiFlutter, SiGithub, SiGoogle, SiGooglecloud, SiNextdotjs, SiNodedotjs, SiPostgresql, SiSanity, SiTailwindcss, SiTrpc } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const projects = [
        {
            title: 'YardtoAcers',
            tech: [SiNextdotjs,SiTrpc,SiPostgresql,SiSanity,SiTailwindcss],
            link:"https://yardstoacres-com.vercel.app/",
            cover:"/yardtoacers.png",
            background:"bg-indigo-500"
        },
        {
            title: 'Devtown',
            tech: [SiFlutter,SiAppwrite,SiGithub],
            link:"https://github.com/ommgh/devtown",
            cover:"/dev-town.png",
            background:"bg-green-500"
        },
        {
            title: 'Scan2Sell',
            tech: [SiNextdotjs,SiNodedotjs,SiPostgresql,SiTailwindcss,SiGooglecloud],
            link:"https://scan2sell.vercel.app",
            cover:"/scan-2-sell.png",
            background:"bg-yellow-500"
        },
        {
            title: 'CueSource',
            tech: [SiNextdotjs,SiTrpc,SiPostgresql,SiTailwindcss],
            link:"https://cuesource.vercel.app/",
            cover:"/cue-source.png",
            background:"bg-purple-400"
        }

    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title text='Projects 🖌️' className='flex flex-col items-center justify-center rotate-6'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
            {projects.map((project,index)=>{
                return <Link href ={project.link} key={index}>
                    <div className={cn("p-5 rounded-md",project.background)}>
                        <DirectionAwareHover
                        imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                            <div className='space-y-5'>
                            <h1 className='text-2xl font-bold'>{project.title}</h1>
                            <div className='flex items-center gap-5'>
                                {project.tech.map((Icon,index)=>{
                                    return <Icon className='w-8 h-8' key={index}/>
                                })}
                            </div>
                            </div>
                        </DirectionAwareHover>
                    </div>
                </Link> ;
            })}

        </div>
    </div>
  )
}
