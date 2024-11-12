// import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: [ '300', '400', '500', '600', '700'],
  variable: "--font-sans",
})

export const metadata = {
  title: "مسار الغربية",
  description: "A website for organizing tourist trips",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" dir="rtl">
      <body
        // className={cn('min-h-screen bg-dark-300 font-sans antialiased')}
      >
        {children}
      </body>
    </html>
  );
}
