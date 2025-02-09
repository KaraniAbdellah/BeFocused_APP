import React from "react";

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarOn } from "@fortawesome/free-solid-svg-icons";

export default function Card({darkMode, taskName, description, setTasks, tasks}) {
  const handleStart = (event) => {
    console.log("task will be started");
  }
  const handleDelete = (event) => {
    console.log("task will be deleted");
    console.log(event.target.parentElement.parentElement.remove());

  }
  const handleDone = (event) => {
    console.log("task will be in Done State");
  }
  return (
    <div className={`${darkMode ? "dark bg-zinc-800": ""} card bg-gray-100 p-2 rounded-sm lg:col-span-3
       md:col-span-3 sm:col-span-6 col-span-6`}>
        <div className={`${darkMode ? "dark": ""} task_info flex justify-between mb-2`}>
          <h3 className={`${darkMode ? "dark text-white": ""} font-semibold`}>{taskName}</h3>
        </div>
        <p className={`${darkMode ? "dark text-white" : ""} description mb-2 text-sm`}>
          {description}
        </p>
        <hr />
        <div className="btns mt-3">
        <button onClick={(e) => handleStart(e)} className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-bold py-1 px-2 rounded">
            Start
          </button>
          <button onClick={(e) => handleDelete(e)} className="bg-red-600 hover:bg-red-700 mx-2 text-white text-sm font-bold py-1 px-2 rounded">
            Delete
          </button>
          <button onClick={(e) => handleDone(e)} className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-1 px-2 rounded">
            Done
          </button>
        </div>
    </div>
  );
}


