"use client";
import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

type MenuItem = {
  id: number;
  name: string;
  price: string;
  ingredients?: string[]; 
};

type MenuData = {
  [category: string]: MenuItem[];
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/menu");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuItems(data.menu); // Extract the nested `menu` object
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setError("Failed to load menu items.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <Header />
      <section className="relative h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/menu-img.jpg')] w-full">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative w-full mx-auto py-32 px-11 md:pt-40 flex flex-col justify-center items-center">
          <Link href="https://open-vsx.org/extension/Equinusocio/vsc-material-theme">
            <Button className="bg-yellow-300 px-5 py-3 transition-all duration-500 hover:text-white text-black rounded-full">
              Order online
            </Button>
          </Link>

          {/* Static menu categories */}
          <section className="grid grid-cols-2 gap-6 py-7 px-5">
            {["pizza", "pasta", "calzone", "sandwiches", "fries"].map(
              (category, index) => (
                <div key={index}>
                  <button className="border-2 border-yellow-500 p-3 text-center rounded-md hover:border-yellow-400 transition-all duration-500 text-sm md:text-xl text-white font-bold w-full">
                    {category.toUpperCase()}
                  </button>
                </div>
              )
            )}
          </section>

          {/* Dynamic menu items */}
          <section className="w-full max-w-4xl bg-white p-5 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-bold text-center mb-4">Menu Items</h2>

            {loading ? (
              <p className="text-center text-gray-500">Loading menu...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : Object.keys(menuItems).length > 0 ? (
              Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold border-b-2 border-yellow-500 mb-2">
                    {category.toUpperCase()}
                  </h3>
                  <ul>
                    {items.map((item) => (
                      <li key={item.id} className="flex justify-between py-2">
                        <div>
                          <span>{item.name}</span>
                          {item.ingredients && (
                            <ul className="text-sm text-gray-600">
                              {item.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <span className="text-yellow-600">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No menu items available.
              </p>
            )}
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Menu;
