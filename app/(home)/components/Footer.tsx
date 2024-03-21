import Link from 'next/link'
import React from 'react'
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si'

function Footer() {
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
    <nav className='py-10 flex justify-center items-center mt-16'>
        

        <div className='flex items-center justify-center  gap-10'>
         


            {socials.map((social,index)=>{
                   const Icon=social.icon

                return  <Link href={social.link} key={index} aria-label={social.label}>
                      <Icon className='w-6 h-6 hover:scale-150 transition-all' />
                </Link>
            })}
        </div>
    </nav>
  )
}

export default Footer