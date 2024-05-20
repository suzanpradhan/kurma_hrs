import SideNav from './_components/SideNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="md:w-64 fixed hidden md:block">
          <SideNav />
        </div>
        <div className="md:ml-64">{children}</div>
      </body>
    </html>
  );
}
