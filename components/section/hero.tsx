import {
  ChevronDown,
  Computer,
  FileText,
  Home,
  HomeIcon,
  Smartphone,
  Sword,
} from "lucide-react";
import React from "react";

export default function Hero(props: { ds: any; gs: any; ms: any }) {
  const { ds, gs, ms } = props;
  const scrollToDesc = () => {
    if (ds) {
      ds.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGun = () => {
    if (gs) {
      gs.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToGame = () => {
    if (ms) {
      ms.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="p-4 h-screen flex flex-col w-screen bg-red-200">
      <div className="border text-dark grid grid-cols-4 place-items-center  p-4 bg-red-400">
        <Home className="active:text-blue-200" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })} />
        <FileText className="active:text-blue-200" onClick={scrollToDesc} />
        <Sword className="active:text-blue-200" onClick={scrollToGun} />
        <Computer className="active:text-blue-200" onClick={scrollToGame} />
      </div>
      <div className="bg-red-200 grow mb-4 ">
        <div className="w-full h-full bg-gradient-to-t from-slate-900/50 grid place-items-center bg-contain"style={{ backgroundImage: "url('./pattern/grid3.svg')" }}>
          <div className="grid capitalize justify-items-center">
            <p className="text-red-500 text-lg">webpage about</p>
            <p className="text-red-500 font-bold text-4xl">March 7th </p>
            <p className="text-red-500 text-lg lowercase">( Si Dongo Kesayangan )</p>
            <button
              onClick={scrollToDesc}
              className="mt-8 w-full bg-red-300 text-xl font-bold text-red-600 p-2"
            >
              Scroll Down
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
