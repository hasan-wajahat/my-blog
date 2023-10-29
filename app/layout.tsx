import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Dosis } from 'next/font/google';
import classNames from 'classnames';
import Header from './components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const dosis = Dosis({
  subsets: ['latin'],
  variable: '--font-dosis',
});

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
      <body
        className={classNames(
          inter.variable,
          dosis.variable,
          'bg-gray-50',
          'dark:bg-gray-900',
          'text-black',
          'dark:text-white',
          'font-sans'
        )}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
