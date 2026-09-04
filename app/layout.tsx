import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Mono, Manrope, Noto_Sans_Arabic } from "next/font/google";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/app/components/smooth-scroll";
import { PreferencesProvider } from "@/app/components/preferences-provider";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const arabicFont = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
});

const navFont = Chakra_Petch({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dana Hmeed — Software Engineer",
  description:
    "Software engineering portfolio of Dana Hmeed, featuring full-stack products, collaborative tools, desktop systems, and applied machine learning.",
  metadataBase: new URL("https://danahmeed.framer.website"),
  openGraph: {
    title: "Dana Hmeed — Software Engineer",
    description: "Selected software engineering work across web products, systems, and applied AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('portfolio-theme');if(t==='light')document.documentElement.dataset.theme='light';const l=localStorage.getItem('portfolio-locale');if(l==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl'}}catch(e){}` }} />
      </head>
      <body className={`${bodyFont.variable} ${monoFont.variable} ${arabicFont.variable} ${navFont.variable}`}>
        <PreferencesProvider><SmoothScroll>{children}</SmoothScroll></PreferencesProvider>
      </body>
    </html>
  );
}
