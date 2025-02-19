"use client";

import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CustomerReviewCarousel from "./customer-review/customer-review";

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, margin: "10px" });
  // useEffect(() => {
  //   setTimeout(() => {
  //     useInView("");
  //   }, 500);
  // }, []);
  return (
    <div ref={ref} className="py-32 md:pt-40 pb-24">
      <div className="relative flex flex-col items-center justify-center h-full text-white gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Image
            className="w-44 h-44 md:w-60 md:h-60"
            src="/logo_trecolori.png"
            alt="Main Image"
            width={300}
            height={300}
          ></Image>
        </motion.div>
        <motion.div className="text-center text-white mx-5 gap-6">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">
            Welcome to Trecolori
          </h1>
          <p className="font-thin font-serif text-2xl">
            Discover our vibrant and sustainable culinary offerings
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <button className="mt-4 px-8 py-3 rounded-tl-3xl rounded-br-3xl text-2xl text-black font-medium  bg-yellow-500 hover:bg-yellow-400  transition duration-300">
            Order Now
          </button>
        </motion.div>
        <section className="w-full mt-10">
          <CustomerReviewCarousel />
        </section>
      </div>
    </div>
  );
};

export default Main;
