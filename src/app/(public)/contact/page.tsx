"use client";
import { motion } from "framer-motion";

export default function Contact() {
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
          {/* Grid for the first 4 input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Full Name
              </label>
              <input
                placeholder="Enter Full Name"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Email Address
              </label>
              <input
                placeholder="Enter Your Email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Mobile Number
              </label>
              <input
                placeholder="Enter Mobile Number"
                type="tel"
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Email Subject
              </label>
              <input
                placeholder="Enter Email Subject"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label className="block text-sm font-medium text-yellow-400">
              Your Message
            </label>
            <textarea
              placeholder="Write Your Message"
              className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
            ></textarea>
          </div>

          {/* Submit button */}
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
