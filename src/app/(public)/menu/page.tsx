import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";

const Menu = () => (
  <div className="">
    <Header />
    <section className="relative h-full  bg-cover  bg-center bg-no-repeat bg-fixed bg-[url('/menu-img.jpg')] w-full">
      <span className="absolute inset-0 bg-black bg-opacity-50 "></span>
      <div className="w-full mx-auto py-32 px-11 md:pt-40 flex flex-col justify-center items-center">
        <button className="bg-yellow-300 px-5 py-3 rounded-full">
          Order online
        </button>
      </div>
    </section>
    <Footer />
  </div>
);

export default Menu;
