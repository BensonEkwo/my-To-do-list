import { React, useContext, useState } from "react";
import { myContext } from "../main";

function Header() {
 
  const { value1 } = useContext(myContext);
  const { value2 } = useContext(myContext);
  const [selectedDay, setSelectedDay] = value2;
  const [days] = value1;
  const handleClick = (day) => {
    setSelectedDay(day);
    
  };
  return (
    <ul className="flex flex-row space-x-3 justify-center">
      {Object.keys(days).map((day) => (
        <button
          key={day}
          className={`p-2 text-sm rounded-2xl cursor-pointer ${
            selectedDay==day ? "bg-pink-700" : "bg-pink-600"
          }`}
          onClick={() => handleClick(day)}
        >
          {day}
        </button>
      ))}
    </ul>
  );
}

export default Header;
