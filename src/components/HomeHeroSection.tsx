"use client";

import Image from "next/image";
import { chainImages } from "@/config/chains";

export default function HomeHeroSection() {
  return (
    <div className="self-center">
      <div className="max-w-7xl self-center flex flex-col md:flex-row">
        <div className="max-w-xl flex flex-col space-y-4 px-8 md:px-16">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            <span className="text-green-500">Blockchain</span>
            <br /> development services
          </h1>
          <p>
            We&apos;re in a new era of digital transformation. And with that comes
            new opportunities for businesses to leverage innovative technologies
            to drive growth.
          </p>
          <div className="flex space-x-4 items-center">
            <button className="bg-primary px-8 py-3 rounded-full truncate">
              Join community
            </button>
            <button className="border border-green-500 text-green-500 px-8 py-3 rounded-full truncate">
              Learn more
            </button>
          </div>
        </div>
        <video
          src="/il_blob.mp4"
          className="h-lg md:-ml-32 2xl:ml-0 md:w-4xl object-cover -z-20 pointer-events-none"
          autoPlay
          loop
        />
      </div>
      <div className="relative">
        <div className="absolute top-0 inset-x-0 bg-black/50 p-12" />
        <div className="absolute flex space-x-8 md:space-x-16 items-center marquee">
          {chainImages.map((image, index) => (
            <div
              key={index}
              className="flex-nowrap shrink-0 grayscale"
            >
              <Image
                alt="Blockchain"
                className="w-24 h-24"
                src={image}
                width={128}
                height={64}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
