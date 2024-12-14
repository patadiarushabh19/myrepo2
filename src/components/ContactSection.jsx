import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-[#090918] text-white py-16 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <form className="w-1/2 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded bg-secondary text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded bg-secondary text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-4 rounded bg-secondary text-white"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-highlight text-primary rounded-lg font-medium"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
