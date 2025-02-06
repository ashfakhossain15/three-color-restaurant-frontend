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
      <Main />

      <div>
        <Footer />
      </div>
    </div>
  );
}
