"use client";

import Link from "next/link";
import Image from "next/image";

import { socials } from "@/data";
import { WormBanner, Splash } from "@/assets";

export default function LayoutFooter() {
  return (
    <footer className="relative flex flex-col items-center">
      <Image src={WormBanner} alt="Worm banner" className="-mb-4" />
      <div className="relative w-full z-10 p-8 bg-dotted text-white">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4 flex-nowrap">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className="w-10 h-10 flex items-center justify-center bg-stone-900 rounded-full"
                >
                  <Image
                    alt={social.name}
                    src={social.icon}
                    className="w-6 h-6"
                  />
                </Link>
              ))}
            </div>
            <p className="text-stone-400 text-sm">hello@usegong.com</p>
          </div>
          <div className="text-stone-500 text-sm">
            <p>
              <span>Built with love by Gong </span>
              <span className="text-red-500"> ❤</span>
            </p>
            <p>
              Gong © 2023 All right reserved
            </p>
          </div>
        </div>
        <Image 
          src={Splash} 
          alt="Star Splash" 
          className="absolute bottom-0 right-0 w-24" />
      </div>
    </footer>
  );
}
