/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

export default function Desc() {
  return (
    <div className="p-4 bg-red-200 w-screen bg-contain" style={{ backgroundImage: "url('./pattern/grid.svg')" }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex items-center space-x-4">
        
        <div className="flex-shrink-0 mt-16 w-1/3 h-2/3 mx-16 aspect-square bg-cover bg-red-400" style={{ backgroundImage: "url('https://raw.githubusercontent.com/JukiSufail/foto/main/bebebb.png')" }}></div>
        
        <div className="w-1/2">
          <p className="text-red-500 pb-1 border-red-700 font-bold text-3xl mt-4 border-b w-fit">March 7th</p>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="py-4">
            <p className="bg-red-300 mt-6 p-1 font-bold text-red-600 uppercase tracking-wide text-center">
              Introduction
            </p>
            <p className="mt-6 text-red-600 font-semibold text-justify h-40">
              A girl who once slumbered in eternal ice and knows nothing about her past.
              To find out the truth about her origins, she decided to travel with the Astral Express.
              As of right now, she has prepared about 67 different versions of her life story for herself.
            </p>
          </motion.div>
        
        </div>
      </motion.div>

      <div className="p-4 bg-red-200 w-screen bg-contain" style={{ backgroundImage: "url('./pattern/grid.svg')" }}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center space-x-4">

          <div className="flex-shrink-0 mt-16 pt-2 w-1/3 h-2/3 mx-16 aspect-square bg-cover bg-red-400" style={{ backgroundImage: "url('https://raw.githubusercontent.com/JukiSufail/png/main/AstralExpress.png')" }}></div>

          <div className="w-1/2">
            <p className="text-red-500 pb-1 border-red-700 font-bold mt-16 text-3xl border-b w-fit">Astral Express</p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="py-4">
              <p className="bg-red-300 p-1 font-bold text-red-600 uppercase tracking-wide text-center">
                Faction
              </p>
              <p className="mt-6 text-red-600 font-semibold text-justify">
                After the fall of Akivili, the Aeon of Trailblaze,
                Their trailblazing will was inherited by Their followers, the Nameless, including the Astral Express that the Aeon once rode on.
                However, as the Cancer of All Worlds continues to spread, the star rails that the Express runs on also fell victim.
                The Express could barely run before the blight descended, and had no choice but to run around when the rails became overly obstructed.</p>

              <p className="mt-6 text-red-600 font-semibold text-justify">It remained so for many years until a girl with red hair discovered the desolate Express.
                She was fascinated by the wordless stories the engine and the star rails had in store.
                She spent countless hours repairing the cracks and evening the dents, restoring the Express to its original form.
                The curious girl then set foot into the Express and began her trailblazing voyage that surveys the cosmos.</p>

              <p className="mt-6 text-red-600 font-semibold text-justify">The Astral Express made stops at every station, with passengers boarding and exiting along the way.
                Many join and leave the Express' journey.
                The travelers come from different worlds, shoulder different burdens, and head to different destinations.
                However, while they are on the Astral Express, they would share the same voyage.
                That is why Himeko and the Express do not hesitate to open the doors to anyone willing to share this magical experience, regardless of their agendas and intentions.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 mt-16 w-2/5 h-2/3 mx-16 aspect-video bg-cover bg-red-400" style={{ backgroundImage: "url('https://raw.githubusercontent.com/JukiSufail/images/main/train.jpg')" }}></div>
          <div className="flex-shrink-0 mt-16 w-2/5 h-2/3 mx-16 aspect-video bg-cover bg-red-400" style={{ backgroundImage: "url('https://raw.githubusercontent.com/JukiSufail/images/main/kereta.jpg')" }}></div>
        </div>
      </div>
      </div>
  );
}
