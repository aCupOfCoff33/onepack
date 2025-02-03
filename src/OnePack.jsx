import React from "react";

const OnePack = () => {
  return (
    // 1) Fill the window and center everything
    <div className=" w-screen h-screen flex items-center justify-center">
      {/* 2) Our bounding box to hold the text/bars in a known area */}
      <div className="relative w-[700px] h-[300px] bg-[#f7f7f7]">
        {/* "ONE" text in top-left corner */}
        <div
          className=" first-hero absolute left-0 top-0 text-black text-[144px] 
                        font-normal font-walbaum leading-[100px]"
        >
          ONE
        </div>

        {/* "PACK" text with original offset */}
        <div
          className="absolute left-[350px] top-[70px] text-black 
                        text-[144px] font-normal font-walbaum leading-[100px]"
        >
          PACK
        </div>
      </div>
    </div>
  );
};

export default OnePack;
