"use client";

import Image from "next/image";

import { LogoMark } from "@/assets";

export default function LayoutHeader() {
  return (
    <header className="px-8 py-4">
      <Image 
        src={LogoMark} 
        alt="Gong"
        className="w-8 h-8" />
    </header>
  );
}
