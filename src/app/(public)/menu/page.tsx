"use client";
import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
const menuItem = [
  { id: 1, name: "Classic Pizza" },
  { id: 2, name: "Classic Pasta" },
  { id: 3, name: "Macka Pane e Focaccia" },
  { id: 4, name: "Pommes Fries" },
];
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/menu/pizza");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <Header />
      <section className="relative h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/menu-img.jpg')] w-full">
        <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

        <div className="relative  w-full mx-auto py-32 px-11 md:pt-40 flex flex-col justify-center items-center">
          <Link href="https://open-vsx.org/extension/Equinusocio/vsc-material-theme">
            <Button className="bg-yellow-300 px-5 py-3 transition-all duration-500 hover:text-white text-black rounded-full">
              Order online
            </Button>
          </Link>
          <section className="grid grid-cols-2 gap-6 py-7 px-5">
            {menuItem.map((item) => (
              <div key={item.id}>
                <button className="border-2 border-yellow-500 p-3 text-center rounded-md hover:border-yellow-400 transition-all duration-500   text-sm text-wrap md:text-xl text-white font-bold w-full h-">
                  {item.name}
                </button>
              </div>
            ))}
          </section>
          <section>{/* Additional sections can be added here */}</section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
