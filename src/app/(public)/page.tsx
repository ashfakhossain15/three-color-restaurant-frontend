"use client";
import React from "react";
import Header from "../Components/Header/header";
import Main from "./Main/main";

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 w-full z-50">
        <Header />
      </div>
      <Main />
    </div>
  );
}
