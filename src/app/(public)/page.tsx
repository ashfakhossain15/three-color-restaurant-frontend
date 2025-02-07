"use client";
import React from "react";
import Header from "../Components/Header/header";
import Main from "./Main/page";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="relative h-full  bg-cover  bg-center bg-no-repeat bg-fixed bg-[url('/trecolori-limhamn.jpg')] w-full">
        <span className="absolute inset-0 bg-black bg-opacity-50 "></span>
        <Main />
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
