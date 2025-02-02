import React, { useState } from "react";

export default function OnePackCard() {
  const [selectedTime, setSelectedTime] = useState("AM");
  const [selectedPack, setSelectedPack] = useState("1 Pack");

  const timeDescriptions = {
    AM: "Morning essentials pack: Start your day right with our AM bundle featuring energizing supplements and vital nutrients.",
    PM: "Evening relaxation pack: Wind down effectively with our PM bundle containing calming herbs and sleep-supporting compounds.",
    Replenish:
      "Auto-refill package: Never run out of essentials with our smart replenishment system delivering products when you need them.",
  };

  return (
    <div className="flex justify-center md:justify-end px-4 md:px-16 lg:px-24 mb-16">
      <div className="w-full max-w-[28rem] py-16 px-8 bg-[#D9D9D9] rounded-3xl flex flex-col items-center">
        <h1 className="text-4xl font-normal font-walbaum">ONEPACK</h1>
        <div className="flex space-x-4 mt-4">
          {["AM", "PM", "Replenish"].map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 text-2xl font-normal border border-black rounded-lg transition-all
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
        <p className="font-walbaum text-xl text-center mt-4 px-4">
          {timeDescriptions[selectedTime]}
        </p>
        <div className="font-walbaum flex justify-center space-x-4 mt-6">
          {["1 Pack", "2 Pack", "3 Pack"].map((pack) => (
            <button
              key={pack}
              onClick={() => setSelectedPack(pack)}
              className={`w-28 h-14 rounded-2xl border-2 text-xl transition-all
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
          className="font-walbaum w-full h-14 mt-6 rounded-2xl border-2 border-black text-xl transition-all 
          hover:bg-black hover:text-white"
        >
          ADD TO CART
        </button>
        <p className="font-walbaum text-center text-xl mt-4">
          Enjoy 15% off orders $50+ with code AARYAN
          <br />
          Free shipping on orders $30+
        </p>
      </div>
    </div>
  );
}
