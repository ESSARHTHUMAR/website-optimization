import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Resources",
  description: "Jump to the next level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black-100 min-h-screen font-poppins">{children}</body>
    </html>
  );
}
