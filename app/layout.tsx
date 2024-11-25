import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import HeroSection from './components/Hero';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Car Dealer App',
  description: 'Search cars by model and year',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gradient-to-b from-gray-light to-gray-dark">
          <nav className="w-full h-20 bg-transparent p-5">
            <Link
              href="/"
              className="uppercase tracking-wide hover:underline transition duration-500 ease-in-out"
            >
              Home
            </Link>
          </nav>
          <HeroSection />
        </header>
        <main className="px-5 py-2 mb-5">{children}</main>
        <footer className="w-full h-16 flex items-center justify-center bg-black ">
          <span className="text-gray-200 text-xs">Car Dealer App</span>
        </footer>
      </body>
    </html>
  );
}
