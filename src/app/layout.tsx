import type { Metadata } from "next";
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });


export const viewport: Viewport = {
  themeColor: "white"
};

export const metadata: Metadata = {
  title: "Amith Jayapraban",
  description: "Amith Jayapraban is a Software Engineer based in Bengaluru, India, working at HashedIn by Deloitte. Explore my portfolio, projects, and tech skills.",
  applicationName: "Amith Jayapraban",
  keywords: [
    "Amith Jayapraban",
    "Software Engineer",
    "Bengaluru",
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
    description: "Amith Jayapraban is a Software Engineer based in Bengaluru, India, working at HashedIn by Deloitte. Explore my portfolio, projects, and tech skills.",
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
    description: "Amith Jayapraban is a Software Engineer based in Bengaluru, India, working at HashedIn by Deloitte. Explore my portfolio, projects, and tech skills.",
    images: ["https://amith.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://amith.vercel.app/"),
  verification: {
    google: "5gn88G8fZ4NoID7NpsNc8a3uxACMWPqWHD6cNNkjQpE",
  },
  appleWebApp: {
    title: "Amith Jayapraban",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amith Jayapraban",
    alternateName: ["Amith Portfolio"],
    url: "https://amith.vercel.app/",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={` ${inter.className} h-full bg-background text-textcolor  overflow-y-auto  overflow-x-hidden  flex flex-col justify-start items-center gap-8`}
      >
        {children}
      </body>
    </html>
  );
}
