"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-yellow-200 w-full py-10 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" w-full grid sm:grid-cols-1  lg:flex  justify-center items-center gap-x-16"
      >
        {/* Left Section - Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="  flex flex-col items-center md:items-center text-center"
        >
          <motion.img
            src="/logo_trecolori.png"
            alt="Tricolori Logo"
            className="w-40 h-40 mb-4"
            initial={{ rotate: -10, opacity: 0 }}
            animate={isInView ? { rotate: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <h2 className="text-xl font-semibold">TRICOLORI</h2>
        </motion.div>

        {/* Middle Section - Info Columns */}
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:flex gap-10 text-center md:text-left mx-10 my-4">
          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="font-semibold">OPENING HOURS:</h3>
            <p>Lunch: Mon-Thurs 11:00-14:00</p>
            <p>Evening hours: Mon-Fri 16:00-21:00</p>
            <p>Sat: 12:00-21:00</p>
            <p>Sun: 16:00-21:00</p>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="font-semibold">ADDRESS</h3>
            <p>Linnégatan 22, 216 14 Limhamn</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="flex flex-col "
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="font-semibold">CONTACT</h3>
            <p className="text-green-600 font-bold text-xl">076 228 81 83</p>
            <p>info@tricolori.se</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="flex flex-col my-4 items-center md:items-start text-left"
          >
            <h3 className="font-semibold mb-2">FOLLOW US</h3>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-gray-500">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="hover:text-gray-500">
                <FaSquareInstagram size={24} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Social Links */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.4 }}
        className="flex items-center justify-center text-center"
      >
        <p className="text-center text-xs mt-4">
          <span className="text-blue-500">&copy; </span>2025 Trecolori. All
          Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
