import { AiTwotonePlusCircle } from "react-icons/ai";
import { AiTwotoneCloseCircle } from "react-icons/ai";

import { useState } from "react";
const Navbar = () => {
  const [openAddTask, setOpenAddTask] = useState(false);
  const handleOpenTask = () => {
    setOpenAddTask(!openAddTask);
  };
  const handleSubmit = () => {
    console.log("first");
  };
  return (
    <div className="flex p-4 justify-between items-center relative max-w-screen">
      <span>Task manager</span>
      <button onClick={handleOpenTask} className="z-10">
        {openAddTask ? (
          <AiTwotoneCloseCircle size={20} className="z-10" />
        ) : (
          <AiTwotonePlusCircle size={20} className="z-10" />
        )}
      </button>
      <div
        className={`bg-[#FFFFFF] border fixed top-0 right-0 h-screen w-[80%] min-w-[150px] max-w-[300px] flex flex-col justify-start items-start overflow-hidden transition-transform duration-300 ease-in-out transform z-5 shadow-xl ${
          openAddTask ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span className="p-2">Add task here</span>
        <form action="POST" onSubmit={handleSubmit}></form>
      </div>
    </div>
  );
};

export default Navbar;
