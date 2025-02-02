"use client";

import React from "react";
export default function NewsletterSignup() {
  return (
    <div className="relative flex items-start justify-start bg-white px-16 mb-16 ">
      {/* Left Section - Text Content */}
      <div className="max-w-xl">
        <h1 className="text-black text-5xl font-normal font-walbaum leading-tight">
          Let’s fuel your day and calm your night.
        </h1>
        <p className="text-black text-lg font-normal font-walbaum mt-4">
          Sign up for our newsletter to get 10% off, wellness tips,
          energy-boosting AM routines, and PM relaxation guides. We love helping
          you thrive, naturally!
        </p>

        {/* Input & Submit Section */}
        <div className="mt-6 flex items-center border-b border-black w-full">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#F7F7F7] w-full text-black text-lg font-walbaum py-2 outline-none placeholder-gray-600"
          />
          <button className="text-black text-lg font-normal font-walbaum ml-4">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
