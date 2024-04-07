"use client";
import clsx from "clsx";

import Link from "next/link";
import { MdClose } from "react-icons/md";

import { layoutNavigations } from "@/config";
import { useParams, usePathname, useRouter } from "next/navigation";

type LayoutNavigationProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LayoutNavigation({
  open,
  setOpen,
}: LayoutNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "flex-1 lt-md:fixed lt-md:inset-0 lt-md:bg-black/50 lt-md:z-40 lt-md:pr-4 lt-md:pt-4",
        open
          ? "flex lt-md:flex-col lt-md:animate-slide-in-up lt-md:animate-duration-100"
          : "lt-md:hidden"
      )}
    >
      <div className="flex lt-md:flex-col lt-md:bg-primary lt-md:rounded-md">
        <header className="flex flex-col p-4 md:hidden">
          <button
            className="self-end p-1 border rounded-md border-white/50"
            onClick={() => setOpen(false)}
          >
            <MdClose className="text-xl text-white/50" />
          </button>
        </header>
        <div className="flex-1 flex lt-md:flex-col md:space-x-2 md:px-4 md:bg-black/30 md:rounded-md">
          {layoutNavigations.map((navigation, index) => (
            <Link
              href={navigation.href}
              key={index}
              className={clsx("p-4 shrink-0", {
                "text-green": navigation.href === pathname,
              })}
              onClick={() => setOpen(false)}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
