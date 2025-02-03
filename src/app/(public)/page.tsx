"use client";
import React from "react";
import Header from "../Components/Header/header";
import Main from "./Main/main";
import Footer from "../Components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <div className="absolute top-0 w-full z-50">
          <Header />
        </div>
      </div>
      <Main />
      <div>
        <Footer />
      </div>
    </div>
  );
}
