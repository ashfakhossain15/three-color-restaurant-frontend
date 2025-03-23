"use client";
import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

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
        setError("Failed to load menu items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: { opacity: 0, x: -100 }, // Start offscreen to the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const sectionVariantsRight = {
    hidden: { opacity: 0, x: 100 }, // Start offscreen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const renderMenuItems = (
    category: string,
    items: MenuItem[],
    index: number
  ) => {
    const isEven = index % 2 === 0; // Alternate between left and right
    const variants = isEven ? sectionVariants : sectionVariantsRight;

    return (
      <motion.div
        key={category}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animate only once and when 20% of the section is in view
        className={`mb-6 ${isEven ? "text-left" : "text-right"}`} // Alternate text alignment
      >
        <h3 className="text-lg font-semibold border-b-2 border-yellow-500 mb-2">
          {category.toUpperCase()}
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <li key={item.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-lg font-semibold">{item.name}</span>
                  {item.ingredients && (
                    <ul className="mt-2 text-sm text-gray-600">
                      {item.ingredients.map((ingredient, idx) => (
                        <li key={idx}>• {ingredient}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <span className="text-yellow-600 font-bold mt-2">
                  {item.price}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

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
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-6 py-7 px-5"
          >
            {["pizza", "pasta", "calzone", "sandwiches", "fries"].map(
              (category, index) => (
                <div key={index}>
                  <button className="border-2 border-yellow-500 p-3 text-center rounded-md hover:border-yellow-400 transition-all duration-500 text-sm md:text-xl text-white font-bold w-full">
                    {category.toUpperCase()}
                  </button>
                </div>
              )
            )}
          </motion.section>

          {/* Dynamic menu items */}
          <section className="w-full max-w-4xl bg-white p-5 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-bold text-center mb-4">Menu Items</h2>

            {loading ? (
              <p className="text-center text-gray-500">Loading menu...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : Object.keys(menuItems).length > 0 ? (
              Object.entries(menuItems).map(([category, items], index) =>
                renderMenuItems(category, items, index)
              )
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
