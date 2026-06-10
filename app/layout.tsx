import type { Metadata } from "next";
import "./globals.css";
import AlbertSans from "next/font/local";
import Header from "@/components/Header";

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
      <body className="flex flex-col justify-start items-center mx-auto">
        <Header />
        <div className="min-h-screen w-full max-w-4xl py-26">
          {children}
        </div>
        </body>
    </html>
  );
}
