import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CardProvider from "@/context/CardProvider";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Yantun Food",
    template: "%s | Yantun Food",
  },
  description: "Delivering delicious food to your doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <header className='px-5 py-2 flex justify-between gap-5 bg-stone-800 items-center'>
          <Link href='/'>
            <Image
              src='/foodlogo.jpg'
              alt='Yantun Food Logo'
              width={120}
              height={40}
            />
          </Link>

          <div className='space-x-5'>
            <Link prefetch={false} className='btn' href='/foods'>
              Foods
            </Link>
            <Link className='btn' href='/reviews'>
              Reviews
            </Link>
          </div>
        </header>

        <main className='px-10 py-10 flex-1'>
          <CardProvider>{children}</CardProvider>
        </main>
      </body>
    </html>
  );
}
