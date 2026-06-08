import type { Metadata } from "next";
import "./globals.css";
import AlbertSans from "next/font/local";

const albertSans = AlbertSans({
  src: "../public/fonts/AlbertSans.ttf",
  variable: '--font-custom',
  display: "swap",
});

export const metadata: Metadata = {
  title: "tellmesomething",
  description: "a place where you can voice out ur thoughts. :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${albertSans.className} h-full antialiased`}>
      <body className="flex flex-col justify-center items-center mx-auto min-h-screen max-w-4xl">{children}</body>
    </html>
  );
}
