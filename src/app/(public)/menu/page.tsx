"use client";
import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type MenuItem = {
  id: number;
  name: string;
  price: string;
  ingredients?: string[];
};

type MenuData = {
  [category: string]: MenuItem[];
};

type SectionRefs = {
  [key: string]: React.MutableRefObject<HTMLDivElement | null>;
};

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<keyof SectionRefs | null>(
    null
  );

  const sectionRefs: SectionRefs = {
    pizza: useRef<HTMLDivElement>(null),
    pasta: useRef<HTMLDivElement>(null),
    calzone: useRef<HTMLDivElement>(null),
    sandwiches: useRef<HTMLDivElement>(null),
    fries: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (category: keyof SectionRefs) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(category);
    }
  };

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/menu");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuItems(data.menu || data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setError("Failed to load menu items. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  const sectionVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const dishVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const renderMenuItems = (
    category: string,
    items: MenuItem[],
    index: number
  ) => {
    const isEven = index % 2 === 0;
    const variants = isEven ? sectionVariants : sectionVariantsRight;
    return (
      <motion.div
        key={category}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={`mb-6  ${isEven ? "text-left" : "text-right"}`}
        ref={sectionRefs[category]}
      >
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold border-b-2 border-yellow-500 mb-2">
          {category.toUpperCase()}
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <motion.li
              key={item.id}
              variants={dishVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-r from-zinc-700 to-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-white"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-lg md:text-xl lg:text-2xl my-3 font-semibold">
                    {item.name}
                  </span>
                  {item.ingredients && (
                    <ul className="mt-2 text-sm text-white">
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
            </motion.li>
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
          <Link href="#">
            <Button className="bg-yellow-300 px-5 py-3 transition-all duration-500 hover:text-white text-black rounded-full">
              Order online
            </Button>
          </Link>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-wrap justify-center gap-6 py-7 px-5"
          >
            {Object.keys(sectionRefs).map((category, index) => (
              <div
                key={index}
                className={` md:w-[30%]   ${
                  index < 3 ? "first-row" : "second-row"
                } flex justify-center`}
              >
                <button
                  onClick={() => scrollToSection(category)}
                  className="border-2 border-yellow-500 p-3 text-center rounded-md hover:border-yellow-400 transition-all duration-500 text-white text-base md:text-lg lg:text-xl font-bold w-full"
                >
                  {category.toUpperCase()}
                </button>
              </div>
            ))}
          </motion.section>

          <section className="w-full max-w-4xl bg-black/30 px-8 md:px-12 py-5 rounded-lg shadow-lg mt-6">
            <h2 className="text-xl font-bold text-center mb-4">Menu Items</h2>
            {loading ? (
              <p className="text-center text-gray-500">Loading menu...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : Object.keys(menuItems).length > 0 ? (
              Object.entries(menuItems).map(([category, items], index) =>
                activeSection === category || activeSection === null
                  ? renderMenuItems(category, items, index)
                  : null
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
