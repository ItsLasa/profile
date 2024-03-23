"use client";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Profile from "@/public/profile-1.jpeg";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

function Hero() {
  const word = [
    {
      text: "Hey",
      className: "text-4xl lg:text-5xl",
    },
    {
      text: "I'm ",
      className: "text-4xl lg:text-5xl",
    },
    {
      text: " Manoj..👋 ",
      className: "text-4xl lg:text-5xl dark:text-blue-500",
    },
  ];
  return (
    <div className="min-h-[60vh] flex gap-10 flex-col-reverse lg:flex-row lg:gap-0 items-center justify-between">
      <div className="text-4xl lg:text-5xl  font-bold space-y-10 text-center lg:text-left">
        <TypewriterEffectSmooth words={word} />
        {/* <h1>Nice to meet you! 👏
            <br/>
            <span className='underline underline-offset-8  decoration-green-500'>{"I'm Manoj"}</span></h1> */}

        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based In Sri Lanka, I'm a Undergradute IT Student Passionate About Building A Modern Web Application That User Love.. "
          }
        </p>

      {/* <div className="p-10 flex justify-center text-center">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
           
            <span>Aceternity UI</span>
          </HoverBorderGradient>
        </div> */}

        <Link href={"mailto:manojlasantha306@gmail.com"}>
                <div className='text-[14px] lg:text-xl font-bold py-8'>
                    <h1 className='hover:text-blue-500 transition-all  hover:-rotate-1'>Contact Me 📬</h1>
                    
                </div>
            </Link>
      </div>
      <div>
        <div className="w-full  py-2 px-4">
          <div>
            <Image
              src={Profile}
              className=" rounded-xl object-cover  h-[55vh] w-[50vw]  lg:h-[55vh] lg:w-[20vw] "
              alt={"profile image"}
            />
          </div>

          <div className="glow absolute top-[110px] right-1/2 -z-10"></div>
        </div>
        <div className="pt-2 flex justify-center ">
          <Button borderRadius="0.4rem " className="p-4 px-10 font-semibold  ">
            <p>💻 Available For Work</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
