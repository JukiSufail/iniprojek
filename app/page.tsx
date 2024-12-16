"use client";
import Desc from "@/components/section/desc";
import Game from "@/components/section/game";
import Gun from "@/components/section/gun";
import Hero from "@/components/section/hero";
import { inView, motion, useInView } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroSection = useRef(null);
  const descSection = useRef(null);
  const GunSection = useRef(null);
  const GameSection = useRef(null);
  const isInView = useInView(heroSection);
  const [isMobileView, setIsMobileView] = useState(false);

  const checkScreenWidth = () => {
    setIsMobileView(window.innerWidth <= 768); 
    if (isMobileView) {
      document.body.style.overflow = "hidden"; 
    }
  };

  const scrollToTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    checkScreenWidth(); 
    window.addEventListener("resize", checkScreenWidth); 

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <main className="bg-red-200 overflow-x-hidden relative">
      {isMobileView && (
        <div className="content-center text-center h-screen w-screen">
          <Image
            src="/images/onyasmel.png"
            alt="wleowleowleo"
            width={300}
            height={200}
            className="mb-4 mt-[-20px]"
          />
          <p className="text-3xl font-bold mb-4 mx-4 text-red-600">
            Halaman ini gabisa dibuka lewat hp aowkaowoaokwoaok
          </p>
          <p className="text-lg font-bold mb-4 mx-4 text-red-600">
            Silakan hidupkan pisi anda dan lihat dari sana :v
          </p>
        </div>
      )}

      {!isMobileView && (
        <div>
          <div ref={heroSection}>
            <Hero gs={GunSection} ms={GameSection} ds={descSection} />
          </div>
          <motion.div
            animate={{ opacity: isInView ? 0 : 1 }}
            onClick={scrollToTop}
            className="bg-blue-200/50 fixed right-0 bottom-0 m-4 p-2 z-30 text-blue-200/50 border border-blue-200"
          >
            <ArrowUp />
          </motion.div>
          <div ref={descSection}>
            <Desc />
          </div>
          <div ref={GunSection}>
            <Gun />
          </div>
          <div ref={GameSection}>
            <Game />
          </div>
        </div>
      )}
    </main>
  );
}
