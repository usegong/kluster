"use client";

import { MdMenu } from "react-icons/md";

import Logo from "./Logo";
import LayoutNavigation from "./LayoutNavigation";
import { useState } from "react";

export default function LayoutHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 bg-green-500/50 p-8 blur-2xl" />
      <header className="absolute inset-x-0 flex items-center space-x-4 px-8 py-4 md:px-16 z-10">
        <Logo className="flex-1" />
        <LayoutNavigation
          open={open}
          setOpen={setOpen}
        />
        <div className="flex-1 items-center justify-end flex space-x-4">
          <button className="bg-primary px-8 py-2 rounded truncate">
            Hire us
          </button>
          <button
            className="border-2 border-green-950/50 p-2 rounded-md hover:bg-green-950 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu className="text-xl text-green-50" />
          </button>
        </div>
      </header>
    </div>
  );
}
