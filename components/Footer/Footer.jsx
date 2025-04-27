"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-purple-600 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_10px_rgba(170,0,255,0.7)]">
                H
              </div>
              <span className="ml-2 text-xl font-bold">
                Haram
                <span className="text-yellow-400 neon-yellow">bergine</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              🚀 Harambergine to the moon!!! 🚀 TO THE MOON!!! 🚀
              Gorilla+Eggplant=Epic 🚀
            </p>
          </div>

          <div className="flex space-x-6">
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter w-6 h-6 text-gray-400 hover:text-white hover:scale-110 transition-transform"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/harambergine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative w-6 h-6 text-gray-400 hover:text-white group">
                <img
                  alt="Telegram"
                  loading="lazy"
                  width="24"
                  height="24"
                  decoding="async"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/telegram-AcA144u4WpR552b9EIPEMiBLp4CIQ8.webp"
                  className="invert brightness-0 opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 "
                  style={{ color: "transparent" }}
                />
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github w-6 h-6 text-gray-400 hover:text-white hover:scale-110 transition-transform"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2025 Harambergine. All rights reserved.</p>
          <p className="mt-2 mb-3 mx-auto max-w-3xl">
            All information provided on this site is for general reference only
            and does not constitute any guarantee for specific purposes. All
            investment decisions and resulting losses or consequences related to
            cryptocurrencies and digital assets are solely the responsibility of
            the user.
          </p>
          <p className="mt-2">
            <a href="/#disclaimer" className="hover:text-white hover:underline">
              Disclaimer
            </a>{" "}
            |{" "}
            <a href="/privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="hover:text-white hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
