'use client'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import React from "react";

import { SiCss3, SiFirebase, SiFramer, SiGit, SiGo, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPhp, SiPython, SiReact, SiRust, SiTailwindcss, SiVuedotjs } from "react-icons/si";

function Skills() {

    const FrontSkills=[
        {
            text:"React",
            icon:SiReact,
        },
        {
            text:"NextJs",
            icon:SiNextdotjs,
        },
       
        {
            text:"Vue",
            icon:SiVuedotjs,
        },
        {
            text:"Tailwind",
            icon:SiTailwindcss,
        },
        {
            text:"Css",
            icon:SiCss3,
        },
      
        {
            text:"JavaScript",
            icon:SiJavascript,
        },



    ]
    
    const BackendSkills=[
        {
            text:"Php",
            icon:SiPhp,
        },
        {
            text:"Node",
            icon:SiNodedotjs,
        },
        {
            text:"Python",
            icon:SiPython,
        },
        {
            text:"Java",
            icon:SiJavascript,
        },
        {
            text:"Mysql",
            icon:SiMysql,
        },
        {
            text:"Firebase",
            icon:SiFirebase,
        },
    ]
      
  return (
    <>
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center -rotate-3 mt-6">
        <h1 className="text-3xl text-white font-bold ">Skills🧷</h1>
       
      </div>
     <div className="flex justify-center items-center mt-6">
     <h2 className="text-blue-500 underline underline-offset-8  font-semibold text-2xl">Frontend Development</h2>
     </div>

      <HoverEffect items={FrontSkills}/>

      <div className="flex justify-center items-center mt-6">
     <h2 className="text-blue-500 underline underline-offset-8 font-semibold text-2xl">Backend Development</h2>
     </div>
     <HoverEffect items={BackendSkills}/>
    </div>
   

    
    
    
    </>
  );
}

export default Skills;
