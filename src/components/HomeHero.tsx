import Image from "next/image";

import { Allura, Crood } from "@/assets";

export default function HomeHero() {
  return (
    <div className="relative flex flex-col space-y-24 md:flex md:space-y-0">
      <div className="md:w-4/6 flex flex-col space-y-4 items-start px-8 z-10">
        <p>Hey There,</p>
        <div>
          <h1 className="text-4xl font-extrabold">
            <span>Create with </span>
            <span className="text-emerald-500">Gong</span>
          </h1>
          <h1 className="text-4xl font-extrabold">a freelancing agency</h1>
        </div>
        <p className="text-sm text-stone-700">
          Gong a freelancing agency that specialize in building specialized mvp
          websites for small businesses.
        </p>
        <div className="relative flex items-center">
          <button className="text-sm z-10">About Us</button>
          <div className="absolute w-6 h-6 bg-emerald-500 rounded-full z-0" />
        </div>
        <button className="btn-secondary">
          Hire us
        </button>
      </div>
      <div className="relative h-full flex justify-end md:absolute md:right-0 md:z-0">
        <Image
          src={Allura}
          alt="Team Freelancer"
          className="w-full h-full object-cover xl:ml-48 md:-mt-32"
        />
        <Image
          src={Crood}
          alt="Team Freelancer"
          className="absolute md:w-[80%] md:right-0 bottom-0 md:object-cover"
        />
      </div>
    </div>
  );
}
