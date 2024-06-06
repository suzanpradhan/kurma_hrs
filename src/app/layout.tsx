import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
const inter = Inter({
  subsets: ['latin'],
  // display: 'swap',
});

export const metadata = {
  title: 'Attendance System',
  description: 'Generated by Joshi ',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-whiteShade">
        {children}
        <div id="deleteWarningDialog"></div>
      </body>
    </html>
  );
}
