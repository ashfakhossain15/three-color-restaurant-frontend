"user client";
import { motion } from "framer-motion";

const CustomerReview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/30 p-6 rounded-lg shadow-lg w-full flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl font-bold text-center mb-4 text-yellow-200">
        SEE WHAT OUR CUSTOMERS SAY!
      </h2>
      <div className="text-center max-w-md">
        <p className="text-white text-2xl">
          Vår och åt lunch med goda vänner i vår lilla matgrupp. Mycket nöjda
          med maten som bestod av dagens lunch för mig och hamburgertallrik för
          övriga. Rekommenderas!
        </p>
        <p className="text-gray-500 mt-4">- Mats Planell</p>
      </div>
    </motion.div>
  );
};

export default CustomerReview;
