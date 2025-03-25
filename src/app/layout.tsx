import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Foot from "./components/foot";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Amith Jayapraban",
  description: "Software Engineer from Kerala, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} min-h-[100dvh] bg-background text-textcolor  overflow-scroll flex flex-col justify-start items-center gap-12  p-12 lg:p-12`}
      >
        {children}
      </body>
    </html>
  );
}
