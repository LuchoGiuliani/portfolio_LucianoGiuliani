import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion"

export default function AboutMe() {
  const [text,count] = useTypewriter({
    words: ['Hi, I am Luciano Giuliani',
            'Front-End Developer',
          'From Buenos Aires,  Argentina'],
          loop:true,
          delaySpeed: 5000
  })
  return (
    <>
      <div className="flex  items-center justify-between">
        <div className="flex-col align-middle justify-center">
          <h1 className="text-xl text-white font-bold tracking-[2px]">About me</h1>
          <h1 className="text-xl text-white font-bold tracking-[2px]">{text}</h1>
         
        </div>
        <div className="foto flex-shrink-0">
          <motion.img
          initial={{
            x:-500,
            opacity:0
          }}
          transition={{
            duration:1.2
          }}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            src="/src/assets/foto.png"
          />
        </div>
      </div>

      <div>
        <figure className="aboutMe_parrafo p-40 ">
          <p className="text-slate-50 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            repudiandae voluptate nesciunt quis consequatur placeat, cumque
            debitis omnis qui doloribus eligendi obcaecati. Quam nam dolore
            sapiente voluptate nemo repellat reiciendis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            repudiandae voluptate nesciunt quis consequatur placeat, cumque
            debitis omnis qui doloribus eligendi obcaecati. Quam nam dolore
            sapiente voluptate nemo repellat reiciendis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            repudiandae voluptate nesciunt quis consequatur placeat, cumque
            debitis omnis qui doloribus eligendi obcaecati. Quam nam dolore
            sapiente voluptate nemo repellat reiciendis.
          </p>
        </figure>
      </div>
    </>
  );
}
