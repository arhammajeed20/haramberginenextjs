import "./globals.css";
import { Metadata } from "next";

export const metadata = {
  title: "Harambergine",
  description: "HaramBergine - Meme Coin with a Purpose",
  icons: {
    icon: "./heroimage.png",
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
