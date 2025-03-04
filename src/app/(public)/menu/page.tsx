import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const menuItems = [
  { id: 1, name: "Classic Pizza" },
  { id: 2, name: "Classic Pasta" },
  { id: 3, name: "Macka Pane e Focaccia" },
  { id: 4, name: "Pommes Fries" },
];
const Menu = () => (
  <div>
    <Header />
    <section className="relative h-full bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/menu-img.jpg')] w-full">
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

      <div className="relative  w-full mx-auto py-32 px-11 md:pt-40 flex flex-col justify-center items-center">
        <Link href="https://open-vsx.org/extension/Equinusocio/vsc-material-theme">
          <Button className="bg-yellow-300 px-5 py-3 transition-all duration-500 hover:text-white text-black rounded-full">
            Order online
          </Button>
        </Link>
        <section className="grid grid-cols-2 gap-6 py-7 px-5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="border-2 border-yellow-500 p-3 text-center rounded-md hover:border-yellow-400 transition-all duration-500"
            >
              <button className="text-xl text-white font-bold">
                {item.name}
              </button>
            </div>
          ))}
        </section>
      </div>
    </section>
    <Footer />
  </div>
);

export default Menu;
