"use client";

import Image from "next/image";
import { FaDiscord, FaTwitter, FaTelegram, FaLinkedinIn } from "react-icons/fa";

import { IcAppDark } from "@/assets";

export default function LayoutFooter() {
  return (
    <footer className="flex space-x-4 bg-green-500 p-4">
      <div className="flex-1">
        <Image
          alt="Gong"
          src={IcAppDark}
          width={48}
          height={48}
        />
      </div>
      <div className="flex space-x-4 items-center">
        <button className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
          <FaDiscord className="text-xl" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
          <FaTwitter className="text-xl" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
          <FaTelegram className="text-xl" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-black rounded-full">
          <FaLinkedinIn className="text-xl" />
        </button>
      </div>
    </footer>
  );
}
