import React from "react";
import { useContext, useEffect } from "react";
import { myContext } from "../main";

function TopPriorities() {
  const { value1, value2 } = useContext(myContext);
  const [selectedDay] = value2;
  const [days, setDay] = value1;
  const handleChange = (e, index) => {
    const { value } = e.target;
    setDay((prev) => {
      const newPriority = prev[selectedDay].topPriority.map((priority, i) =>
        index === i ? value : priority
      );
      const newState = {
        ...prev,
        [selectedDay]: {
          ...prev[selectedDay],
          topPriority: newPriority,
        },
      };
      localStorage.setItem(
        `priorities_${selectedDay}`,
        JSON.stringify(newPriority)
      );
      return newState;
    });
  };

  useEffect(() => {
    const savedPriority = localStorage.getItem(`priorities_${selectedDay}`);
    setDay((prev) => ({
      ...prev,
      [selectedDay]: {
        ...prev[selectedDay],
        topPriority: JSON.parse(savedPriority),
      },
    }));
  }, [selectedDay, setDay]);
  // useEffect(()=>{
  //   if(days[selectedDay]?.topPriority){

  // },[days,selectedDay])
  return (
    <div className="mt-8 mx-2">
      <form className="bg-amber-100 p-5 rounded-md rounded-t-xl ">
        <h2>TOP PRIORITIES :</h2>
        <div className="grid grid-cols-2 gap-2 bg-white max-h-36 p-2 shadow-inner rounded-sm">
          {days[selectedDay].topPriority.map((priority, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 mx-2 relative"
            >
              <span className="text-6xl absolute bottom-0 text-amber-950">
                .
              </span>
              <input
                type="text"
                value={priority}
                onChange={(e) => handleChange(e, index)}
                className="w-4/5 outline-none text-sm border-b bg-transparent "
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default TopPriorities;
