import { cn } from '@/lib/utils';
import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiX } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";

function Navbar({className}:{className?:string}) {
    const socials = [
        {
            Link : "https://github.com/kushalbhana",
            Icon : SiGithub,
            Label:"Github",
        },
        {
            Link : "https://www.linkedin.com/in/kushalbhana/",
            Icon : SiLinkedin,
            Label:"Linkedin",
        },
        {
            Link : "https://twitter.com/KushalBhana",
            Icon : SiX,
            Label:"x",
        },
        
    ]
  return (
    <nav className={cn('py-10 flex justify-between items-center', className)}>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-500 -rotate-2'>Firefox Club</h1>
        <div className=''>
            <img src='./firefix_logo.png' alt='Image Description' className='w-10 h-10' />
        </div>
        <div className='flex items-center gap-5'>
            {socials.map((social, index) => {
                const {Link, Icon, Label} = social;
                return (
                    <a key={index} href
                    ={Link} aria-label={Label}>
                        <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                    </a>
                )
            }
            )}
        </div>
    </nav>
  )
}

export default Navbar