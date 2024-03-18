import "@unocss/reset/tailwind.css";

import clsx from "clsx";

import Image from "next/image";
import type { Metadata, Viewport } from "next";

import "./globals.css";

import { defaultFont } from "@/fonts";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutFooter from "@/components/LayoutFooter";

export const metadata: Metadata = {
  title: "Blockchain & Digital Currency Software and Consultancy | Gong",
  description:
    "We help build, improve and unlock full potential of small and large scale businesses with blockchain.",
  openGraph: {
    type: "website",
    images: ["/il_preview.png"],
  },
  twitter: {
    images: ["/il_preview.png"],
  },
  metadataBase: new URL("https://create.usegong.com"),
};

export const viewport: Viewport = {
  themeColor: "#052e16",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={clsx(
          defaultFont.className,
          "fixed inset-0 flex flex-col bg-black text-white overflow-y-scroll overflow-x-hidden"
        )}
      >
        <Image
          width={1024}
          height={512}
          alt="Strip Background"
          src="/il_strips.png"
          className="absolute inset-x-0 -z-10"
        />
        <div className="flex-1 flex flex-col space-y-32 bg-gradient-to-bl from-black via-green-900/50 to-black l:w-7xl 2xl:self-center overflow-y-scroll overflow-x-hidden">
          <LayoutHeader />
          {children}
          <LayoutFooter />
        </div>
      </body>
    </html>
  );
}
