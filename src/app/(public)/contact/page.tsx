"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Define a type for the field names
type FieldName = "fullName" | "email" | "mobile" | "subject" | "message";

export default function Contact() {
  // Use the FieldName type for the activeField state
  const [activeField, setActiveField] = useState<FieldName | null>(null);

  const handleFocus = (fieldName: FieldName) => {
    setActiveField(fieldName);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  const waveAnimation = {
    scale: [1, 1.02, 1], // Wave effect
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black flex items-center justify-center p-4"
    >
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md border border-white">
        <h1 className="text-2xl font-bold mb-6 text-center text-yellow-400">
          Contact Me!
        </h1>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <motion.div
              animate={activeField === "fullName" ? waveAnimation : {}}
              onFocus={() => handleFocus("fullName")}
              onBlur={handleBlur}
            >
              <label className="block text-sm font-medium text-yellow-400">
                Full Name
              </label>
              <input
                placeholder="Enter Full Name"
                type="text"
                className={`mt-1 block w-full px-3 py-2 border ${
                  activeField === "fullName"
                    ? "border-yellow-400"
                    : "border-white"
                } rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white`}
              />
            </motion.div>

            {/* Email Address */}
            <motion.div
              animate={activeField === "email" ? waveAnimation : {}}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
            >
              <label className="block text-sm font-medium text-yellow-400">
                Email Address
              </label>
              <input
                placeholder="Enter Your Email"
                type="email"
                className={`mt-1 block w-full px-3 py-2 border ${
                  activeField === "email" ? "border-yellow-400" : "border-white"
                } rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white`}
              />
            </motion.div>

            {/* Mobile Number */}
            <motion.div
              animate={activeField === "mobile" ? waveAnimation : {}}
              onFocus={() => handleFocus("mobile")}
              onBlur={handleBlur}
            >
              <label className="block text-sm font-medium text-yellow-400">
                Mobile Number
              </label>
              <input
                placeholder="Enter Mobile Number"
                type="tel"
                className={`mt-1 block w-full px-3 py-2 border ${
                  activeField === "mobile"
                    ? "border-yellow-400"
                    : "border-white"
                } rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white`}
              />
            </motion.div>

            {/* Email Subject */}
            <motion.div
              animate={activeField === "subject" ? waveAnimation : {}}
              onFocus={() => handleFocus("subject")}
              onBlur={handleBlur}
            >
              <label className="block text-sm font-medium text-yellow-400">
                Email Subject
              </label>
              <input
                placeholder="Enter Email Subject"
                type="text"
                className={`mt-1 block w-full px-3 py-2 border ${
                  activeField === "subject"
                    ? "border-yellow-400"
                    : "border-white"
                } rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white`}
              />
            </motion.div>
          </div>

          {/* Message Textarea */}
          <motion.div
            animate={activeField === "message" ? waveAnimation : {}}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
          >
            <label className="block text-sm font-medium text-yellow-400">
              Your Message
            </label>
            <textarea
              placeholder="Write Your Message"
              className={`mt-1 block w-full px-3 py-2 border ${
                activeField === "message" ? "border-yellow-400" : "border-white"
              } rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white`}
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
