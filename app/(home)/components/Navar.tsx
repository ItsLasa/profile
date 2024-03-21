import Link from 'next/link'
import React from 'react'
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si'

function Navar() {
    const socials=[
        {
            link:"https://www.linkedin.com/in/manoj-illangasinghe",

            label:"Linkedin",
            icon:SiLinkedin,
        },
        {
            link:"https://github.com/itsLasa",

            label:"Github",
            icon:SiGithub,
        },
        {
            link:"https://github.com/itsLasa",

            label:"Facebook",
            icon:SiFacebook,
        },
    ]
  return (
    <nav className='py-6  flex justify-between items-center mb-12'>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-500 -rotate-2'>ManojDev 👽 </h1>

        <div className='flex items-center  gap-5'>
         


            {socials.map((social,index)=>{
                   const Icon=social.icon

                return  <Link href={social.link} key={index} aria-label={social.label}>
                      <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}

export default Navar