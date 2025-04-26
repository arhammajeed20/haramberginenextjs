import "./globals.css";
import { Metadata } from "next";

export const metadata = {
  title: "InfinitiCoin",
  description:
    "InfinitiCoin - Revolutionary Multi-layered Blockchain Gambling Platform",
  generator: "v0.dev",
  icons: {
    icon: "/infinitiLogocard.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1D1D24] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
