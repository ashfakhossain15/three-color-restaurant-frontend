"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import {  useRef } from "react";

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, margin: "-100px" });
  // useEffect(() => {
  //   setTimeout(() => {
  //     useInView("");
  //   }, 500);
  // }, []);
  return (
    <div
      ref={ref}
      className="relative h-screen bg-cover  bg-center bg-no-repeat bg-fixed bg-[url('/trecolori-limhamn.jpg')] w-full"
    >
      <span className="absolute inset-0 bg-black bg-opacity-50"></span>

      <div className="relative flex flex-col items-center justify-center h-full text-white text-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            src="/logo_trecolori.png"
            alt="Main Image"
            width={300}
            height={300}
          ></Image>
        </motion.div>
        <h1 className="text-white">Welcome to Trecolori</h1>
        <p>Discover our vibrant and sustainable culinary offerings</p>
        <button className="mt-4 px-8 py-2 text-white bg-yellow-500 hover:bg-yellow-400 transition duration-150">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Main;
