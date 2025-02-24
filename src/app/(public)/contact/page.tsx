"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md border border-white">
        <h1 className="text-2xl font-bold mb-6 text-center text-yellow-400">
          Contact Me!
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Grid for the first 4 input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Full Name
              </label>
              <input
                name="fullName"
                placeholder="Enter Full Name"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Email Address
              </label>
              <input
                name="email"
                placeholder="Enter Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Mobile Number
              </label>
              <input
                name="mobile"
                placeholder="Enter Mobile Number"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>

            {/* Email Subject */}
            <div>
              <label className="block text-sm font-medium text-yellow-400">
                Email Subject
              </label>
              <input
                name="subject"
                placeholder="Enter Email Subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-sm font-medium text-yellow-400">
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Write Your Message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 bg-black text-white"
            ></textarea>
          </div>

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
    </div>
  );
}
