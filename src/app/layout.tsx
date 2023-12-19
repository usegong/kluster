import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";

import { join } from "@/lib/string";

import LayoutFooter from "@/components/LayoutFooter";
import LayoutHeader from "@/components/LayoutHeader";

const inter = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://create.usegong.com"),
  title: "We Build innovative solutions | Gong",
  authors: [
    {
      name: "Oguntunde Caleb Fiyinfoluwa",
      url: "https://github.com/oasisMystre/",
    },
  ],
  keywords:
    "freelancing, website, wordpress, mobile development, help, build, consultancy",
  openGraph: {
    siteName: "Create With Gong",
    images: ["https://create.usegong.com/default_banner.jpg"],
  },
  description:
    "Gong is a technology consultant company. We help business of any size to build scalable solutions, reduce cost and increase productivity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={join(
          inter.className,
          "fixed inset-0 flex flex-col text-[15px]"
        )}
      >
        <LayoutHeader />
        <main className="flex flex-col overflow-y-scroll pt-16 md:pt-32">
          {children}
          <LayoutFooter />
        </main>
      </body>
    </html>
  );
}

