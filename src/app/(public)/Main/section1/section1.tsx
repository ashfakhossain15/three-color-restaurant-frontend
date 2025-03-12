import { motion } from "framer-motion";
import Image from "next/image";

const Section1 = () => {
  return (
    <div className="flex  items-center justify-center bg-gradient-to-r from-stone-600 to-amber-900 py-36 px-20">
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            WE ARE MORE THAN JUST A PIZZERIA
          </h1>
          <p className="text-lg mb-8">
            At Tre Colori we welcome you to a tasteful world of possibilities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-lg">
            We offer not only a variety of pizzas, but also a wide menu that
            includes delicious kebab dishes, juicy smash burgers and refined à
            la carte options.
          </p>
        </motion.div>
      </section>
      <section className="flex items-center justify-center w-full">
        <div className="relative ">
          {/* First Image (Base Layer) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/main1.jpg"
              alt="Main 1"
              width={350}
              height={175}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -top-10 -right-10"
            style={{ width: "100%", height: "auto" }}
          >
            <Image
              src="/main2.jpg"
              alt="Main 2"
              width={350}
              height={175}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
