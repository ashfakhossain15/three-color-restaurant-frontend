"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const toggleMenuBar = () => setMenuBar(!menuBar);
  //   const [isImageVisible, setIsImageVisible] = useState(false);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsImageVisible(true);
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div>
      <header className="flex justify-between items-center bg-white/30 backdrop-blur-none px-6 md:px-12 py-4 md:py-6 shadow-lg">
        <Link href="/">
          <Image
            src="/logo_trecolori.png"
            width={60}
            height={60}
            alt="Logo"
            className="w-12 h-12 md:w-16 md:h-16"
          />
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
        <div>
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={(): void => toggleMenuBar()}
              className="text-blue-500"
            >
              {menuBar ? "=" : "+"} </button>
          </div>
          {menuBar ? (
            <div className="md:hidden ">
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
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
