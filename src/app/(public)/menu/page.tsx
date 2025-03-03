import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      </div>
    </section>
    <Footer />
  </div>
);

export default Menu;
