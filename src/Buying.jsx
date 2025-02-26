import React, { useState } from "react";

export default function OnePackCard() {
  const [selectedTime, setSelectedTime] = useState("AM");
  const [selectedPack, setSelectedPack] = useState("1 Pack");

  const timeDescriptions = {
    AM: "Morning essentials pack: Start your day right with our AM bundle featuring energizing supplements and vital nutrients.",
    PM: "Evening relaxation pack: Wind down effectively with our PM bundle containing calming herbs and sleep-supporting compounds.",
    Replenish:
      "designed to restore essential nutrients and support recovery, after physical activity or during times of stress and fatigue.",
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 lg:px-24 mb-16">
      {/* Image on the left */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end md:pr-8">
        <div className="relative w-full max-w-5xl h-[600px]">
          <img
            src="/textures/buyingImage.jpg"
            alt="OnePackCard Product"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Card on the right */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full max-w-[28rem] py-16 px-8 bg-[#D9D9D9] rounded-3xl flex flex-col items-center">
          <h1 className="text-4xl font-normal font-walbaum">ONEPACK</h1>
          <div className="flex space-x-4 mt-4">
            {["AM", "PM", "Replenish"].map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-4 py-2 text-lg font-normal border border-black rounded-lg transition-all
                  ${
                    selectedTime === time
                      ? "bg-[#D9D9D9] text-black border-2"
                      : "bg-transparent"
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
          <p className="font-walbaum text-lg text-center mt-4 px-4">
            {timeDescriptions[selectedTime]}
          </p>
          <div className="grid grid-cols-2 gap-2 mt-6 w-full">
            {["1 Pack", "2 Pack", "3 Pack", "4 Pack"].map((pack) => (
              <button
                key={pack}
                onClick={() => setSelectedPack(pack)}
                className={`w-full h-12 rounded-xl border-2 text-lg transition-all
                  ${
                    selectedPack === pack
                      ? "bg-[#808080] text-white border-[#808080]"
                      : "bg-transparent text-black border-black hover:bg-[#D9D9D9]"
                  }`}
              >
                {pack}
              </button>
            ))}
          </div>
          <button
            className="font-walbaum w-full h-14 mt-6 rounded-2xl border-2 border-black text-lg transition-all 
            hover:bg-black hover:text-white"
          >
            ADD TO CART
          </button>
          <p className="font-walbaum text-center text-lg mt-4">
            Enjoy 50% off shipping on ordering 3 Packs
            <br />
            And shipping is on us for ordering 4 Packs!
          </p>
        </div>
      </div>
    </div>
  );
}
