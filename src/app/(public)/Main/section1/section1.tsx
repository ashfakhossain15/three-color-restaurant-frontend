import { motion } from "framer-motion";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-stone-600 to-amber-900 py-10 px-5 lg:py-20 lg:px-20 mt-10 overflow-hidden">
      {/* Text Section */}
      <section className="flex-1 lg:pr-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
            WE ARE MORE THAN JUST A PIZZERIA
          </h1>
          <p className="text-base lg:text-lg mb-4 lg:mb-8 text-gray-200">
            At Tre Colori we welcome you to a tasteful world of possibilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center lg:text-left"
        >
          <p className="text-base lg:text-lg text-gray-200">
            We offer not only a variety of pizzas, but also a wide menu that
            includes delicious kebab dishes, juicy smash burgers and refined à
            la carte options.
          </p>
        </motion.div>
      </section>

      {/* Image Section */}
      <section className="flex-1 mt-10 lg:mt-0">
        <div className="relative w-full max-w-lg mx-auto my-5">
          {/* First Image (Base Layer) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <Image
              src="/main1.jpg"
              alt="Main 1"
              width={300}
              height={200}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute z-20 -top-10 -right-10 lg:-top-20 lg:-right-20"
          >
            <Image
              src="/main2.jpg"
              alt="Main 2"
              width={200}
              height={150}
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section1;