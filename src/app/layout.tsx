import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <header className=" p-[1rem]">
          <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-white">
                <a href="#" className="text-lg font-bold">
                  Logo
                </a>
              </div>
              <div className="hidden md:flex gap-10">
                <a href="#" className="text-white mr-4">
                  Home
                </a>
                <a href="#" className="text-white mr-4">
                  About
                </a>
                <a href="#" className="text-white mr-4">
                  Services
                </a>
                <a href="#" className="text-white mr-4">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </header> */}

        {children}
      </body>
    </html>
  );
}
