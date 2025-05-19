import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amith Jayapraban",
  description: "Software Engineer from Kerala, India",
  keywords: [
    "Amith Jayapraban",
    "Software Engineer",
    "Kerala",
    "React",
    "Next.js",
    "Web Developer",
    "Frontend",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Amith Jayapraban" }],
  openGraph: {
    title: "Amith Jayapraban",
    description: "Software Engineer from Kerala, India.",
    url: "https://amith.vercel.app/",
    siteName: "Amith Jayapraban",
    images: [
      {
        url: "https://amith.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amith Jayapraban Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amith Jayapraban",
    description: "Software Engineer from Kerala, India.",
    images: ["https://amith.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://amith.vercel.app/"),
  verification: {
    google: "5gn88G8fZ4NoID7NpsNc8a3uxACMWPqWHD6cNNkjQpE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} h-full bg-background text-textcolor  overflow-scroll flex flex-col justify-start items-center gap-8  p-8`}
      >
        {children}
      </body>
    </html>
  );
}
