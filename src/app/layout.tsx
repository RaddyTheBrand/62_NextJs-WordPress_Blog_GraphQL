import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "NextJs WordPress GraphQl",
  description: "Generated by Raddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="max-w-[780px] p-4 md:p-10 mx-auto bg-background min-h-screen">
          <Header/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
