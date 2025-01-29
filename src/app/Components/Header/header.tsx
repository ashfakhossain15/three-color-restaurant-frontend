"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [logoClass, setLogoClass] = useState("initial");

  const toggleMenuBar = () => setMenuBar(!menuBar);

  useEffect(() => {
    setTimeout(() => {
      setLogoClass("animates");
    }, 600);
  }, []);

  return (
    <div className="">
      <header className="flex justify-between items-center bg-white/30 backdrop-blur-none px-6 md:px-20 py-4 md:py-6 shadow z-40">
        <Link href="/">
          <div className={`logo-container ${logoClass}`}>
            <Image
              src="/logo_trecolori.png"
              width={90}
              height={90}
              alt=""
              className="w-14 h-14 md:w-20 md:h-20"
            />
          </div>
        </Link>

        <nav className="hidden md:flex justify-center space-x-4 md:space-x-8 text-base md:text-lg font-semibold">
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="/">Dashboard</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="">Menu</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="">Order Online</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="">About Us</Link>
          </button>
        </nav>

        <div className="md:hidden flex items-center ">
          <button
            type="button"
            onClick={toggleMenuBar}
            className="text-blue-500"
          >
            {menuBar ? "=" : "+"}
          </button>
        </div>
      </header>

      {/* Menu Bar */}
      <div
        className={`md:hidden transform transition-all duration-300 ease-in-out ${
          menuBar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } bg-white/30 absolute top-20 left-0 w-full shadow-lg z-50`}
      >
        <nav className="flex flex-col space-y-2 p-4 text-base font-semibold">
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="/">Dashboard</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="">Menu</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="">Order Online</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href="">About Us</Link>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
