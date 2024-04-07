"use client";

import clsx from "clsx";

import Link from "next/link";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";

import { IcApp } from "@/assets";

const inter = Inter_Tight({ subsets: ["latin"] });

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={clsx(className, "flex items-center space-x-2")}
    >
      <Image
        src={IcApp}
        width={36}
        height={36}
        alt="Gong Logo"
      />
      <h1 className={clsx(inter.className, "text-3xl font-extrabold")}>Gong</h1>
    </Link>
  );
}
