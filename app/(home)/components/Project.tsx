import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";
import {
  SiNextdotjs,
  SiReactquery,
  SiSupabase,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";

function Project() {
  const projects = [
    {
      title: "E-Learning Platform ",
      tech: [SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss],
      link: "http://www.github.com/itsLasa",
      cover: '/10.jpg',
      background: "bg-gradient-to-r from-blue-800 to-indigo-900",
    },
    {
      title: "Voting App ",
      tech: [SiVuedotjs, SiReactquery, SiSupabase, SiTailwindcss],
      link: "http://www.github.com/itsLasa",
      cover: "/23.jpg",
      background: "bg-gradient-to-r from-violet-600 to-purple-600",
    },
   
  ]
  return <div>
   <div className="flex flex-col items-center justify-center -rotate-3 mt-12">
        <h1 className="text-3xl text-white font-bold ">Projects 📇</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4">
        {projects.map((project,index)=>{
            return(
                <Link href={project.link} key={index}>
                    <div className={cn(
                        "p-5 rounded-md",
                        project.background
                    )}>
                     <DirectionAwareHover
                      imageUrl={project.cover}
                     >
                        <h1>{project.title}</h1>
                        <div className="flex items-center gap-6 py-2">
                            {project.tech.map((Icon,index)=>{
                                return <Icon className="w-5 h-5" key={index}/>
                            })}
                        </div>
                        
                     </DirectionAwareHover>
                    </div>
                  
                
                </Link>
            )
        })}

      </div>
  </div>
}

export default Project;
