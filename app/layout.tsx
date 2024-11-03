import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logout from "@/components/logout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "App for household planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Logout />
        {children}
      </body>
    </html>
  );
}
