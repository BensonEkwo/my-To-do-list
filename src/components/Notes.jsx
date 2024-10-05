import React from "react";
import { useContext, useEffect } from "react";
import { myContext } from "../main";

function Notes() {
  const { value1, value2 } = useContext(myContext);
  const [selectedDay, setSelectedDay] = value2;
  const [days, setDay] = value1;
  const handleChange = (e) => {
    const { value } = e.target;
    setDay((prev) => {
      
      const newState = {
        ...prev,
        [selectedDay]: { ...prev[selectedDay], notes: value },
      };
      localStorage.setItem(`notes_${selectedDay}`, JSON.stringify(value));
      return newState;
    });
  };
  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes_${selectedDay}`);
    if(savedNotes){
      setDay((prev) => ({
        ...prev,
        [selectedDay]: {
          ...prev[selectedDay],
          notes: JSON.parse(savedNotes),
        },
      }));
    }
  }, [selectedDay, setDay]);
  // useEffect(() => {
  //   if (days[selectedDay]?.notes) {
  //     localStorage.setItem(
  //       `notes_${selectedDay}`,
  //       JSON.stringify(days[selectedDay].notes)
  //     );
  //   }
  // }, [days, selectedDay]);

  return (
    <div className="max-w-1/2  mx-2 max-h-32 relative top-80 left-40 max-w-40 ">
      <form className="bg-orange-200  rounded-md rounded-t-xl p-0">
        <h2>NOTES:</h2>

        <div className="">
          
            <div  className=" space-x-4 ">
              <textarea
                type="text"
                value={days[selectedDay]?.notes || ''}
                rows='9'
                onChange={(e) => handleChange(e)}
                className="w-full  outline-none border-b text-xs overflow-auto resize-none min-h-[10rem] bg-repeating-stripes "
                style={{backgroundColor: 'repeating-linear-gradient(red 0 20px, blue 20px px)'}}
              />
            </div>
       
        </div>
      </form>
    </div>
  );
}

export default Notes;
