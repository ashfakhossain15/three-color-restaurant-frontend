import React, { useState } from "react";

const ContactUs = () => {
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
  };
  return (
    <div>
      <div className="min-h-screen bg-amber-200 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-lg border-sky-200 border-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black">
            Contact Us!
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Grid for the first 4 input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-black">
                  Full Name
                </label>
                <input
                  name="fullName"
                  placeholder="Enter Full Name"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-field mt-1 block w-full px-3 py-2 border border-amber-200 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-200 text-black"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field mt-1 block w-full px-3 py-2 border border-amber-200 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-200 text-black"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-black">
                  Mobile Number
                </label>
                <input
                  name="mobile"
                  placeholder="Enter Mobile Number"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="input-field mt-1 block w-full px-3 py-2 border border-amber-200 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-200 text-black"
                />
              </div>

              {/* Email Subject */}
              <div>
                <label className="block text-sm font-medium text-black">
                  Email Subject
                </label>
                <input
                  name="subject"
                  placeholder="Enter Email Subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field mt-1 block w-full px-3 py-2 border border-amber-200 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-200 text-black"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-sm font-medium text-black">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Write Your Message"
                value={formData.message}
                onChange={handleChange}
                className="input-field mt-1 block w-full px-3 py-2 border border-amber-200 rounded-md shadow-sm focus:outline-none focus:ring-teal-400 focus:border-teal-200 text-black"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
