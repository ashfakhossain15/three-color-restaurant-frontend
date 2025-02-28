import Footer from "@/app/Components/Footer/Footer";
import Header from "@/app/Components/Header/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Menu = () => (
  <div className="">
    <Header />
    <section className="relative h-full  bg-cover  bg-center bg-no-repeat bg-fixed bg-[url('/menu-img.jpg')] w-full">
      <span className="absolute inset-0 bg-black bg-opacity-[0.3] z-10 "></span>

      <div className="w-full mx-auto py-32 px-11 md:pt-40 flex flex-col justify-center items-center opacity-100 z-50">
        <Link href="https://open-vsx.org/extension/Equinusocio/vsc-material-theme">
          <Button className="bg-yellow-300 px-5 py-3 rounded-full">
            Order online
          </Button>
        </Link>
      </div>
    </section>
    <Footer />
  </div>
);

export default Menu;
