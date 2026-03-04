import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Singh Digital Group",
  description: "Building mobile apps for real people. Creators of ShubhVichar — a daily motivation app built for India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}