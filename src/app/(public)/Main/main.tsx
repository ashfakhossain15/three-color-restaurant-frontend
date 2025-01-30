"use client";

const Main = () => {
  return (
    <div className="relative h-screen sm:bg-contain lg:bg-cover  bg-center bg-fixed bg-[url('/trecolori-limhamn.jpg')]">
      <span className="absolute inset-0 bg-black bg-opacity-50"></span>

      <div className="relative flex items-center justify-center h-full text-white text-2xl">
        Home
      </div>
    </div>
  );
};

export default Main;
