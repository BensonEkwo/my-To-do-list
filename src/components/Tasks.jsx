import React from "react";
import { useContext, useEffect } from "react";
import { myContext } from "../main";

function Tasks() {
  const { value1, value2 } = useContext(myContext);
  const [selectedDay] = value2;
  const [days, setDay] = value1;
  const handleChange = (e, index) => {
    const { value } = e.target;
    setDay((prev) => {
      const newTask = prev[selectedDay].tasks.map((task, i) =>
      index === i ? value : task  );
    const newState =  {
        ...prev,
        [selectedDay]: {
          ...prev[selectedDay],
          tasks: newTask
        },
      }
      localStorage.setItem(
        `tasks_${selectedDay}`,
        JSON.stringify(newTask)
      );
      return newState;
    });
  };
  useEffect(() => {
    const savedTasks = localStorage.getItem(`tasks_${selectedDay}`);
      setDay((prev) => ({
        ...prev,
        [selectedDay]: { ...prev[selectedDay], tasks: JSON.parse(savedTasks) },
    
      }));
  }, [selectedDay, setDay]);

  // useEffect(() => {
  //   if (days[selectedDay]?.tasks) {
     
  //   }
  // }, [days, selectedDay, setDay]);

  return (
    <div className="max-w-1/2 relative bottom-28 right-4 max-h-30 max-w-40 p-2 ">
      <form className="bg-amber-100 p-5 rounded-md rounded-t-xl ">
        <h2>TASKS :</h2>
        <div className="">
          {days[selectedDay].tasks.map((task, index) => (
            <div className=" space-x-4 ">
              <span className="font-extrabold text-3xl">.</span>
              <input
                type="text"
                value={task}
                onChange={(e) => handleChange(e, index)}
                className="w-3/4 bg-transparent outline-none border-b text-sm"
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Tasks;
