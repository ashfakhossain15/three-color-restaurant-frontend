"use client";
import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// Define the Chef interface
interface Chef {
  name: string;
  specialty: string;
  skills: string;
  about: string;
  image: string;
}

// Chef data
const chefs: Chef[] = [
  {
    name: "Chef Marco Bianchi",
    specialty: "Traditional Italian Pasta & Sauces",
    skills:
      "Handmade pasta, authentic regional recipes, and perfecting the art of balancing flavors.",
    about:
      "With roots in Tuscany, Chef Marco has mastered the art of creating pasta dishes that transport you straight to the Italian countryside. His signature dishes include handmade ravioli and classic carbonara.",
    image: "/depositphotos_253679410-stock-photo-happy-male-indian-chef-or.jpg", // Replace with actual image path
  },
  {
    name: "Chef Sofia Ricci",
    specialty: "Wood-Fired Pizzas & Artisanal Breads",
    skills:
      "Crafting the perfect dough, innovative toppings, and baking with a wood-fired oven.",
    about:
      "Hailing from Naples, the birthplace of pizza, Chef Sofia brings her expertise in creating crispy, flavorful pizzas that are a feast for the eyes and the taste buds. Her Margherita pizza is a crowd favorite.",
    image: "/360_F_113342818_8ng3aJ55Ta4UgjTg9a6WdweC74DSDcoC.jpg", // Replace with actual image path
  },
  {
    name: "Chef Luca Moretti",
    specialty: "Gourmet Desserts & Pastries",
    skills:
      "Patisserie, chocolate artistry, and creating visually stunning desserts.",
    about:
      "Chef Luca’s passion for sweets is evident in every bite. From creamy tiramisu to delicate cannoli, his desserts are the perfect ending to any meal at Trecolori.",
    image: "/360_F_638575039_yR0M7I081AEEAtrSdTBpS12oQP7uNwtL.jpg", // Replace with actual image path
  },
];

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      type: "stagger",
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};

export default function AboutUs() {
  useEffect(() => {
    setTimeout(() => {});
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-orange-50 to-orange-100 pt-36 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center text-orange-900 mb-12"
          >
            About Us
          </motion.h1>

          {/* Restaurant Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-lg text-orange-800">
              Welcome to <span className="font-semibold">Trecolori</span>, where
              culinary artistry meets the warmth of Italian hospitality. At
              Trecolori, we believe that food is more than just sustenance—it’s
              an experience, a celebration of flavors, and a way to bring people
              together.
            </p>
          </motion.div>

          {/* Chef Section */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Chef Image */}
                <div className="relative h-64">
                  <Image
                    src={chef.image}
                    alt={chef.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Chef Details */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-orange-900 mb-2">
                    {chef.name}
                  </h2>
                  <p className="text-orange-600 font-semibold mb-2">
                    {chef.specialty}
                  </p>
                  <p className="text-orange-700 mb-4">{chef.skills}</p>
                  <p className="text-orange-800">{chef.about}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Philosophy Section */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mt-16"
          >
            <h2 className="text-3xl font-bold text-orange-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-lg text-orange-800">
              At Trecolori, we are committed to delivering an authentic Italian
              dining experience. We take pride in using locally sourced, fresh
              ingredients and staying true to the traditions of Italian cooking.
              Every dish is prepared with care, and every meal is served with a
              smile.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
