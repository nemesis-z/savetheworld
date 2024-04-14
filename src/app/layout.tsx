import { Inter } from 'next/font/google';

import './globals.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Save the world',
  description: 'We gathered here to celebrate memes, not war, together we are strong',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en" className="dark">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
