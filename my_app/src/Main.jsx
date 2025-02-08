import React from 'react';
import Card from "./Card";


export default function Main({darkMode}) {
  return (
    <main className={`${darkMode ? "dark bg-zinc-700": ""} bg-white inset-shadow-2xs py-4 px-5 
      rounded w-[100%] sm:w-[100%] md:w-[100%] lg:w-[68%]`}>
        <h2 className={`${darkMode ? "dark text-white" : ""} font-semibold text-lg mb-5`}>Today tasks</h2>
        <ul className="grid grid-cols-6 w-[100%] py-1 navigation mb-5 rounded-lg">
            <button className="col-span-2 text-center font-semibold
            rounded-sm py-2 px-4 text-sm bg-sky-500 hover:bg-sky-600 transition-all text-white">To Do</button>
            <button className={`${darkMode ? "dark hover:bg-zinc-600" : ""} col-span-2 ml-2 text-center font-semibold 
            hover:bg-gray-200 rounded-sm text-sky-600 py-2 px-4 text-sm transition-all`}
            >Doing</button>
            <button className={`${darkMode ? "dark hover:bg-zinc-600" : ""} col-span-2 ml-2 text-center font-semibold 
            hover:bg-gray-200 rounded-sm text-sky-600 py-2 px-4 text-sm transition-all`}
            >Done</button>
        </ul>
        <div className="cards grid grid-cols-6 gap-3">
            <Card darkMode={darkMode}></Card>
            <Card darkMode={darkMode}></Card>
            <Card darkMode={darkMode}></Card>
        </div>
    </main>
  )
}
