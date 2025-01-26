import Image from "next/image";
import Link from "next/link";

const Header = () => {
  //   const [isImageVisible, setIsImageVisible] = useState(false);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setIsImageVisible(true);
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div>
      <header className=" flex justify-between items-center bg-white/30 backdrop-blur-none px-12 py-6 shadow-lg">
        <Link href="/">
          <Image
            src="/logo_trecolori.png"
            width={70}
            height={70}
            alt=""
          ></Image>
        </Link>
        {/* <motion.div
        // initial={{ opacity: 0, rotate: 0 }}
        // animate={{ opacity: isImageVisible ? 1 : 0, rotate: 360 }}
        // transition={{ duration: 2 }}
        className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-blue-500"
      /> */}

        {/* Navigation Sections */}
        <nav className="flex justify-center space-x-8 text-lg font-semibold">
          <button className="hover:text-blue-500 transition duration-150 bg">
            <Link href="/"> Dashboard</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href=""> Menu</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href=""> Order Online</Link>
          </button>
          <button className="hover:text-blue-500 transition duration-150">
            <Link href=""> About Us</Link>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;
