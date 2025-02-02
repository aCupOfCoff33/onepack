import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start px-4 md:px-16 py-8 bg-[black]">
      {/* Column 1: Shop */}
      <div className="w-full md:w-32 mb-4 md:mb-0">
        <h3 className="text-lg font-bold font-walbaum text-[#F7F7F7]">SHOP</h3>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Shop Products
        </a>
      </div>

      {/* Column 2: Learn */}
      <div className="w-full md:w-32 mb-4 md:mb-0">
        <h3 className="text-lg font-bold font-walbaum text-[#F7F7F7]">LEARN</h3>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Why OnePack
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Our Story
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Press
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Blog
        </a>
      </div>

      {/* Column 3: Contact */}
      <div className="w-full md:w-52 mb-4 md:mb-0">
        <h3 className="text-lg font-bold font-walbaum text-[#F7F7F7]">
          CONTACT
        </h3>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          FAQ
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Account
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Terms and Conditions
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="block text-sm font-walbaum mt-3 text-[#F7F7F7] hover:underline"
        >
          Return Policy
        </a>
      </div>

      {/* Column 4: GET UPDATES & EMAIL FORM */}
      <div className="w-full md:w-56 mb-4 md:mb-0">
        <h3 className="text-lg font-bold font-walbaum text-[#F7F7F7] whitespace-nowrap">
          GET UPDATES & MORE
        </h3>

        {/* Input & Submit Section (mimicking the original design) */}
        <div className="mt-4 flex items-center border-b border-white w-full">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[black] w-full text-[#F7F7F7] text-sm font-walbaum py-1 outline-none placeholder-gray-400"
          />
          <button className="text-[#F7F7F7] text-sm font-walbaum ml-2 hover:underline">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-3 mt-4 md:mt-0">
        {/* Facebook */}
        <a href="#" className="text-[#F7F7F7] hover:opacity-80">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" className="text-[#F7F7F7] hover:opacity-80">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>

        {/* TikTok */}
        <a href="#" className="text-[#F7F7F7] hover:opacity-80">
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
          </svg>
        </a>

        {/* X (Twitter) */}
        <a href="#" className="text-[#F7F7F7] hover:opacity-80">
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
      </div>
    </div>
  );
}
