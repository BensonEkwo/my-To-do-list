import React from "react";
import { useContext, useEffect } from "react";
import { myContext } from "../main";

function Events() {
  const { value2 } = useContext(myContext);
  const { value1 } = useContext(myContext);
  const [days, setDay] = value1;
  const [selectedDay] = value2;

  const handleChange = (e, index) => {
    const { value } = e.target;
    setDay((prev) => {
      const newEvents = prev[selectedDay].events.map((event, i) =>
        index === i ? value : event
      );
      const newState = {
        ...prev,
        [selectedDay]: {
          ...prev[selectedDay],
          events: newEvents,
        },
      };
      localStorage.setItem(
        `event_${selectedDay}`,
        JSON.stringify(newEvents)
      );
      return newState;
    });
  };

  useEffect(() => {
    const savedEvents = localStorage.getItem(`event_${selectedDay}`);
    setDay((prev) => ({
      ...prev,
      [selectedDay]: { ...prev[selectedDay], events: JSON.parse(savedEvents) },
    }));
  }, [selectedDay, setDay]);

  // useEffect(() => {
  //   if (days[selectedDay]?.events) {
  //     localStorage.setItem(
  //       `event_${selectedDay}`,
  //       JSON.stringify(days[selectedDay].events)
  //     );
  //   }
  // }, [days, selectedDay]);
  return (
    <div className="max-w-1/2 absolute right-1 mt-5 mx-2 max-h-32 max-w-40">
      <form className="bg-amber-100 p-5 rounded-md rounded-t-xl ">
        <h2>EVENTS :</h2>
        {days[selectedDay].events.map((event, index) => (
          <div key={index} className="bg-white">
            <div className="space-x-4 ">
              <span className="font-extrabold">.</span>
              <input
                type="text"
                name="events"
                value={event}
                onChange={(e) => handleChange(e, index)}
                className="w-3/4 bg-transparent outline-none border-b text-xs overflow-hidden whitespace-nowrap text-ellipsis"
              />
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

export default Events;
