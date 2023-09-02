'use client'

import React, {useEffect, useState} from "react";

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [isValidColor, setIsValidColor] = useState<boolean>(true);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Check if the input is empty
    if (inputValue === "") {
      setIsValidColor(true); // Reset validation if the input is empty
      setBackgroundColor(""); // Reset background color if the input is empty
    } else {
      const hexColor = "#" + inputValue;
      setBackgroundColor(hexColor);

      // Check if the input is a valid color
      const validHexColorRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
      setIsValidColor(validHexColorRegex.test(hexColor));
    }
  };

  // Apply background color when the backgroundColor state changes
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[33.33%] p-4 bg-white rounded-lg shadow-md relative">
        {!isValidColor && (
          <div
            className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full"
            style={{ transform: "translate(50%, -50%)" }}
          >
            !
          </div>
        )}
        <input
          type="text"
          placeholder="Enter a hex color code"
          className={`font-roboto text-black w-full p-2 border border-gray-300 rounded-md focus:outline-none ${
            !isValidColor ? "border-red-500" : ""
          }`}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}