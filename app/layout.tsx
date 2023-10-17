import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import classNames from "classnames";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Learn Frontend With Hasan',
  description: 'Frontend topics explained in simple words',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'bg-gray-50', 'dark:bg-gray-900', 'text-black', 'dark:text-white')}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
