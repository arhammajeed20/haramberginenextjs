"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SocialLinks from "./Sociallinks";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();
  const [colorChange, setColorChange] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const changeNavbarColor = () => {
      setColorChange(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeNavbarColor);
    }

    return () => window.removeEventListener("scroll", changeNavbarColor);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSidebar(false);
      }
    };

    if (openSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [openSidebar]);

  const menuItems = [
    { name: t("navbar.home"), link: "introduction" },
    { name: t("navbar.who"), link: "who" },
    { name: t("navbar.tokenomics"), link: "tokenomics" },
    { name: t("navbar.roadmap"), link: "roadmap" },
    { name: t("navbar.howToBuy"), link: "presale" },
    { name: t("navbar.faq"), link: "faq" },
  ];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 100;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setOpenSidebar(false);
  };

  return (
    <>
      <div
        className={`fixed w-full ${
          colorChange
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        } transition-all duration-300 ease-in-out z-50 py-2.5`}
      >
        <div className=" mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="cursor-pointer flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl shadow-[0_0_10px_rgba(170,0,255,0.7)]">
                H
              </div>
              <span className="ml-2 text-sm sm:text-lg md:text-xl font-bold">
                Haram<span className="text-yellow-400">bergine</span>
              </span>
            </Link>
            <div className="flex items-center justify-center">
              <div className="hidden lg:flex space-x-3 justify-center overflow-auto">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleScroll(item.link)}
                    className="text-sm  text-white font-normal relative px-3 py-1.5 hover:inset-0 hover:bg-purple-600 hover:rounded-lg hover:transition-all hover:duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <button className="hidden lg:block bg-purple-600 text-white rounded-lg font-bold py-2 px-2 hover:opacity-90 transition-all">
                <span className="font-semibold text-sm  font-urbanist">
                  {t("navbar.buyButton")}
                </span>
              </button>

              <div className="px-3">
                <LanguageSwitcher />
              </div>

              <div className="px-3">
                <SocialLinks />
              </div>

              <button
                className="lg:hidden text-white"
                onClick={() => setOpenSidebar(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {openSidebar && (
        <div className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm lg:hidden transition-opacity duration-300">
          <div
            ref={sidebarRef}
            className="fixed right-0 top-0 h-full w-64 bg-black/80 backdrop-blur-md text-white shadow-lg transform transition-transform duration-300 translate-x-0"
          >
            <div className="flex justify-between items-center mt-4 mx-4">
              <h2 className="font-bold text-lg sm:text-xl">Menu</h2>
              <button onClick={() => setOpenSidebar(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="text-center">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index} className="py-2">
                    <button
                      onClick={() => handleScroll(item.link)}
                      className="w-full text-center py-2 text-sm sm:text-base lg:text-lg"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex justify-center">
              <LanguageSwitcher />
            </div>

            <button className="flex px-7 mt-4 mx-auto bg-purple-600 text-white py-2 rounded text-sm sm:text-base md:text-lg">
              {t("navbar.buyButton")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
