"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <motion.div
        className="text-center p-8 bg-white shadow-lg rounded-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          className="w-[250px] h-[250px] object-cover my-0 mx-auto"
          src="/error.jpg"
          alt="Logo"
          initial={{ scale: 0.5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.h1
          className="text-6xl font-bold text-red-600"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Oops!
        </motion.h1>
        <p className="text-xl mt-4 text-gray-700">
          We couldn&apos;t find the page you&apos;re looking for.
        </p>
        <p className="mt-2 text-gray-500">
          Maybe you&apos;re lost? Let’s get you back to our delicious menu.
        </p>

        <Link href="/">
          <motion.button
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition my-5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
