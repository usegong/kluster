import { MdMenu } from "react-icons/md";

import Logo from "./Logo";
import { layoutNavigations } from "@/config";

export default function LayoutHeader() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bg-green-500/50 p-8 blur-2xl" />
      <header className="absolute inset-x-0 flex items-center space-x-4 px-8 py-4 md:px-16 z-10">
        <Logo className="flex-1" />
        <div className="flex space-x-2 px-4 bg-black/30 rounded-md lt-md:hidden">
          {layoutNavigations.map((navigation, index) => (
            <a
              key={index}
              className="p-4"
            >
              {navigation.name}
            </a>
          ))}
        </div>
        <div className="flex-1 items-center justify-end flex space-x-4">
          <button className="bg-primary px-8 py-2 rounded truncate">Hire us</button>
          <button className="border-2 border-green-950/50 p-2 rounded-md hover:bg-green-950">
            <MdMenu className="text-xl text-green-50" />
          </button>
        </div>
      </header>
    </div>
  );
}
