import Image from "next/image";
import Navbar from "./components/Navar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Tools from "./components/Tools";
export default function Home() {
    return (
   
    <div className="text-white min-h-[450vh] bg-black overflow-hidden">
       <TracingBeam className="px-6">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] relative  ">
      {/* <div className=" bg-black dark:bg-white dark:bg-grid-black/[0.2] bg-grid-white/[0.03] relative  "> */}
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <Hero />
        </div>
         <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full">
            
         </div>
            <div className="max-w-7xl mx-auto p-5" >
               <Skills/>
               <Tools/>
               <Projects/>
              
               <Footer/>
            </div>
          
      </div>
      </TracingBeam>
    </div>
  
  );
}
