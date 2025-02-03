"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Header = () => {
  const navberLinks = [
    { title: "Dashboard", href: "/" },
    { title: "About Us", href: "/about-us" },
    { title: "Menu", href: "/menu" },
    { title: "Contact", href: "/contact" },
  ];
  const [menuBar, setMenuBar] = useState(false);
  const [logoClass, setLogoClass] = useState("initial");
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenuBar = () => setMenuBar(!menuBar);

  useEffect(() => {
    setTimeout(() => {
      setLogoClass("animates");
    }, 600);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full z-50 transition-all duration-400 ${
        isSticky
          ? "fixed top-0 bg-black/60 backdrop-blur-md py-2 shadow-md"
          : "absolute bg-black/30 backdrop-blur-[3px] py-4 md:py-6"
      }`}
    >
      <header className="flex justify-between items-center px-6 md:px-20 transition-all duration-300">
        <Link href="/">
          <div className={`logo-container ${logoClass}`}>
            <Image
              src="/logo_trecolori.png"
              width={90}
              height={90}
              alt=""
              className={`transition-all duration-300 ${
                isSticky
                  ? "w-12 h-12 md:w-16 md:h-16"
                  : "w-14 h-14 md:w-20 md:h-20"
              }`}
            />
          </div>
        </Link>

        <nav className="hidden md:flex justify-center space-x-4 md:space-x-8 text-base md:text-lg font-semibold">
          {navberLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-yellow-100 hover:text-yellow-500 transition duration-150"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
          <motion.button
            type="button"
            onClick={toggleMenuBar}
            className="text-white text-2xl"
            animate={{ rotate: menuBar ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menuBar ? <FaTimes /> : <FaAlignRight />}
          </motion.button>
        </div>
      </header>

      {isSticky ? (
        <div
          className={`md:hidden transform transition-all duration-300 ease-in-out ${
            menuBar
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } bg-black/30 absolute top-12 left-0 w-full shadow-lg z-50`}
        >
          <nav className="flex flex-col justify-center items-center w-full space-y-2 p-4 text-base font-semibold">
            {navberLinks.map((item, index) => (
              <Link
                key={index}
                onClick={toggleMenuBar}
                href={item.href}
                className="text-yellow-100 hover:text-yellow-500 transition duration-150"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      ) : (
        <div
          className={`md:hidden transform transition-all duration-300 ease-in-out ${
            menuBar
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } bg-black/30 absolute top-20 left-0 w-full shadow-lg z-50`}
        >
          <nav className="flex flex-col justify-center items-center space-y-2 p-4 font-semibold w-full">
            {navberLinks.map((item, index) => (
              <Link
                key={index}
                onClick={toggleMenuBar}
                href={item.href}
                className="text-yellow-100 hover:text-yellow-500 transition duration-150"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
