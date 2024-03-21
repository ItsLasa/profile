import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";
import { SiAdobexd, SiFigma, SiGit, SiGithub, SiJenkins, SiLighthouse, SiNotion, SiRedhat, SiVisualstudio, SiVisualstudiocode } from "react-icons/si";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[5px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      <div className="">

      
        
        <div className="rounded-2xl px-10 py-12 relative z-10 bg-[black] ">
        <h4 className="text-center text-indigo-500 -rotate-6 font-semibold text-2xl relative mb-6">Tools⚡</h4>
          
          <div className="flex gap-4 transition-all hover:scale-110 px-6 justify-center items-center">
          <SiGit className="w-8 h-8"/>
          <SiFigma className="w-8 h-8"/>
          <SiAdobexd className="w-8 h-8"/>
          <SiNotion className="w-8 h-8"/>
          <SiJenkins className="w-8 h-8"/>
          <SiLighthouse className="w-8 h-8"/>
          <SiVisualstudio className="w-8 h-8"/>
          <SiGithub className="w-8 h-8"/>
          
          </div>

        </div>

      </div>
    </div>
  );
};
