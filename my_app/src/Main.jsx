import React, { useState } from 'react';
import Card from "./Card";


export default function Main({darkMode, tasks, setTasks}) {
    const [taskStarted, setTaskStarted] = useState(false);

    return (
        <main className={`${darkMode ? "dark bg-zinc-700": ""} bg-white inset-shadow-2xs py-4 px-5 
        rounded w-[100%] sm:w-[100%] md:w-[100%] lg:w-[68%]`}>
            <div className="flex justify-between items-center mb-5">
                <h2 className={`${darkMode ? "dark text-white" : ""} font-semibold text-lg mb-5`}>Today tasks</h2>
                {taskStarted ? <p className="bg-green-500 p-2 rounded-sm font-semibold">Timer: 25:00 min</p> : ""}
            </div>
            <div className="cards grid grid-cols-6 gap-3">
            {tasks.length === 0 ? 
            <p className={`${darkMode ? "dark text-white": ""} text-center mt-10 col-span-6 font-semibold`}>No Task Yet</p> : 
            tasks.map((task, index) => 
                <Card key={index} taskStarted={taskStarted} setTaskStarted={setTaskStarted} tasks={tasks} setTasks={setTasks} darkMode={darkMode} taskName={task.taskName} description={task.description}></Card>)}
            </div>
        </main>
    );
}



{/* <ul className="grid grid-cols-6 w-[100%] py-1 navigation mb-5 rounded-lg">
<button className="col-span-2 text-center font-semibold
rounded-sm py-2 px-4 text-sm bg-sky-500 hover:bg-sky-600 transition-all text-white">To Do</button>
<button className={`${darkMode ? "dark hover:bg-zinc-600" : ""} col-span-2 ml-2 text-center font-semibold 
hover:bg-gray-200 rounded-sm text-sky-600 py-2 px-4 text-sm transition-all`}
>Doing</button>
<button className={`${darkMode ? "dark hover:bg-zinc-600" : ""} col-span-2 ml-2 text-center font-semibold 
hover:bg-gray-200 rounded-sm text-sky-600 py-2 px-4 text-sm transition-all`}
>Done</button>
</ul> */}
