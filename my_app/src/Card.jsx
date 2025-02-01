import React from "react";

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarOn } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return (
    <div className="card bg-gray-100 p-2 rounded-sm lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6">
      <div className="task_info flex justify-between mb-2">
        <h3 className="font-semibold">Task Name</h3>
        <label htmlFor="" className="text-xl text-green-600 flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5 accent-green-600 cursor-pointer" name="" id="" />
        </label>
      </div>
      <p className="description mb-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sint?
      </p>
      <hr />
      <div className="btns mt-3">
        <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-1 px-2 rounded">
          Start
        </button>
        <button className="bg-red-600 hover:bg-red-700 mx-2 text-white text-sm font-bold py-1 px-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}
