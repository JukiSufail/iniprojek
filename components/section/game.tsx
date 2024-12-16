"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Game() {
  return (
    <div className="h-max w-screen bg-red-200 p-4">
      <p className="text-red-500 pb-1 border-red-700 font-bold mt-16 mx-auto text-3xl border-b w-fit text-center">
        Path
      </p>
      <div className="flex space-x-4">
        {/* Gambar Preservation */}
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="aspect-square bg-cover bg-center"
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/JukiSufail/png/main/eidolon.png')`,
            }}
          />
          <p className="mt-2 text-red-600 bg-red-300 font-extrabold text-center">
            March 7th Preservation
          </p>
        </div>

        {/* Gambar Hunt */}
        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="aspect-square bg-cover bg-center"
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/JukiSufail/png/main/huntimg.png')`,
            }}
          />
          <p className="mt-2 text-red-600 bg-red-300 font-extrabold text-center">
            March 7th Hunt
          </p>
        </div>
      </div>

      <section className="mt-8">
        <Stats />
      </section>
      <section className="mt-8">
        <Type />
      </section>
      {/* <section className="mt-8">
        <Skills />
      </section> */}
    </div>
  );
}


function Stats() {
  const stats = {
    hp: 3701,
    atk: 981,
    def: 3751,
    spd: 161,
  };
  const status = {
    hp: 3296,
    atk: 2549,
    def: 730,
    spd: 135,
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-red-300 p-4"
    >
      <p className="px-1 bg-red-400 text-red-600 font-bold text-center text-2xl">
        Stats
      </p>

      <div className="grid grid-cols-2 gap-4 py-4 text-center">

        <div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">HP</p>
            <p className="text-3xl font-extrabold">{stats.hp}</p>
          </div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">ATK</p>
            <p className="text-3xl font-extrabold">{stats.atk}</p>
          </div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">DEF</p>
            <p className="text-3xl font-extrabold">{stats.def}</p>
          </div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">SPD</p>
            <p className="text-3xl font-extrabold">{stats.spd}</p>
          </div>
        </div>

        <div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">HP</p>
            <p className="text-3xl font-extrabold">{status.hp}</p>
          </div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">ATK</p>
            <p className="text-3xl font-extrabold">{status.atk}</p>
          </div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">DEF</p>
            <p className="text-3xl font-extrabold">{status.def}</p>
          </div>
          <div className="text-red-600 p-2">
            <p className="font-extrabold">SPD</p>
            <p className="text-3xl font-extrabold">{status.spd}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



function Type() {
  const ShieldType = "Shield";
  const FUAType = "Follow-up Attack";

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-red-300 p-4"
    >
      <p className="px-1 bg-red-400 text-red-600 font-bold text-center text-2xl">
        Type
      </p>
      <div className="grid grid-cols-2 gap-4 py-2 text-center">
        <div className="text-red-600 p-2">
          <p className="text-red-600 font-extrabold">specialist</p>
          <p className="text-3xl font-extrabold">{ShieldType}</p>
        </div>

        <div className="text-red-600 p-2 text-center">
          <p className="text-red-600 font-extrabold">specialist</p>
          <p className="text-3xl font-extrabold">{FUAType}</p>
        </div>
      </div>
    </motion.div>
  );
}


// function Skills() {
//   const skills = ["Skill X", "Skill Y", "Skill Z"];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 100 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="bg-blue-200/20 p-4"
//     >
//       <p className="px-1 bg-blue-200/80 text-blue-800 font-bold text-center text-lg">
//         Skills
//       </p>
//       <ul className="text-white text-center font-extrabold">
//         {skills.map((skill) => (
//           <li key={skill} className="py-2">
//             {skill}
//           </li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }
