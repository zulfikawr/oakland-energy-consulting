import type React from 'react';
import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter_Tight({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Oakland Energy Consulting',
  description: 'Redefining energy with tailored, concrete solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.variable}>
      <body className='font-inter text-body'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
