import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

export default function Gun() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="mt-6 text-red-600 bg-red-200 font-bold">

      <p className="text-red-500 pb-1 border-red-700 font-bold mt-16 mx-auto text-3xl border-b w-fit text-center">
        Weapon
      </p>

      <div className="flex items-center space-x-4 justify-center mr-14">
        <div className="flex-shrink-0 mt-16 mb-32 w-2/5 h-2/3 mx-16 aspect-square bg-cover bg-red-400" style={{ backgroundImage: "url('https://raw.githubusercontent.com/JukiSufail/png/main/Bow.png')" }}></div>
        <div className="flex-shrink-0 mt-16 mb-32 w-2/5 h-2/3 mx-16 aspect-square bg-cover bg-red-400" style={{ backgroundImage: "url('https://raw.githubusercontent.com/JukiSufail/png/main/DS.png')" }}></div>
      </div>
    </motion.div>

  );
}
  function Images() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg font-bold bg-blue-600/50  p-1 px-2 text-white">
          images
        </p>
        <Carousel
         plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]} className="mt-4 overflow-x-hidden">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-blue-300  w-full aspect-video bg-cover"
              style={{ backgroundImage: "url('./images/gun/gun4.png')" }}></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="bg-blue-300  w-full aspect-video bg-cover"
                style={{ backgroundImage: "url('./images/gun/gun.png')" }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-blue-300  w-full aspect-video bg-cover bg-center"
              style={{ backgroundImage: "url('./images/gun/gun3.png')" }}></div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    );
  }
  function Attachment() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg font-bold bg-blue-600/50  p-1 px-2 text-white">
          attachment
        </p>
        <ul className="list-inside list-disc p-2 px-4">
          <li>iron sight</li>
          <li>akimbo</li>
        </ul>
      </motion.div>
    );
  }
  function Description() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="text-lg font-bold bg-blue-600/50  p-1 px-2 text-white">
          description
        </p>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <p className="text-sm font-semibold border-b border-purple-500/50">
              cardtridge
            </p>
            <p className="text-lg font-bold">9 x 19 mm</p>
          </div>
          <div>
            <p className="text-sm font-semibold border-b border-purple-500/50">
              rounds
            </p>
            <p className="text-lg font-bold">30 (x 2)</p>
          </div>
          <div>
            <p className="text-sm font-semibold border-b border-purple-500/50">
              rate of fire
            </p>
            <p className="text-lg font-bold">850 rpm</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-semibold border-b border-purple-500/50">
              about
            </p>
            <p className="text-sm font-semibold h-40 overflow-y-scroll">
              a gas-operated submachine gun designed and manufactured by SIG
              Sauer, and is primarily chambered in 9×19mm Parabellum. It is a
              gas-operated firearm featuring a closed, rotating bolt. These
              design features, rare in submachine guns, were chosen to enhance
              the safety of the user and to have a more reliable firearm. It was
              designed in 2013 and was released to the general public in 2015.
              It features the SIG Sauer short stroke push-rod gas system to
              reduce the recoil and improve the reliability of the weapon.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
