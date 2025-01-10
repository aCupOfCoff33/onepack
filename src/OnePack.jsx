import React from "react";

const OnePack = ({ scrollPosition }) => {
  // Dynamically calculate font size and top position
  const fontSize = Math.max(1.2, 12 - scrollPosition / 20); // Font size shrinks from 12rem to 1.2rem
  const topPosition = Math.max(1.5, 30 - scrollPosition / 10); // Moves from center (30vh) to top (1.5vh)

  return (
    <div
      className="fixed left-1/2 transform -translate-x-1/2 font-walbaum text-black z-50"
      style={{
        fontSize: `${fontSize}rem`,
        top: `${topPosition}vh`,
        transition: "top 0.5s ease, font-size 0.5s ease", // Increased duration to 0.5s
      }}
    >
      One Pack
    </div>
  );
};

export default OnePack;