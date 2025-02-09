// Import React
import React, { useEffect, useState } from 'react'

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faGauge, faTag, faX } from "@fortawesome/free-solid-svg-icons";

// Import Aside Component
import Main from "./Main";

function Aside({setDarkMode, darkMode, tasks, setTasks}) {
    async function AddTask() {
        let taskName = document.querySelector(".task_name");
        let description = document.querySelector(".description");
        let status = document.querySelector("select.status");
        let priority = document.querySelector("select.priority");
        if (taskName.value === "" || description.value === "") {
            taskName.classList.add("wrongInputs");
            description.classList.add("wrongInputs");
        } else {
            taskName.classList.remove("wrongInputs");
            description.classList.remove("wrongInputs");
            
            await setTasks((prevTasks) => {
                const updatedTasks = [...prevTasks, {
                    taskName: taskName.value,
                    description: description.value,
                    status: status.value,
                    priority: priority.value
                }];
                localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Store updated state
                return updatedTasks;
            });

            taskName.value = description.value = "";
        }
    }

    useEffect(() => {
        let storedTasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(storedTasks);
        if (storedTasks) {
            setTasks((storedTasks));
        } else {
            localStorage.setItem("tasks", JSON.stringify([]));
        }
    }, []);

    

    return (
        <aside className={`${darkMode ? "dark bg-zinc-700" : ""} bg-white inset-shadow-2xs
        lg:mb-0 md:mb-4 py-4 px-5 rounded w-[100%] lg:w-[30%] md:w-[100%]
        sm:w-[100%]`}>
            <h3 className={`${darkMode ? "dark text-white": ""} font-semibold mb-3 text-lg`}>Create new Task</h3>
            <div className="mb-2 name">
                <h3 className={`${darkMode ? "dark text-white": ""} mb-1 font-semibold`}>task name</h3>
                <input type="text" placeholder='task name...' 
                className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
                p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid 
                border-x-2 border-y-2 focus:outline-none
                `}/>
            </div>
            <div className="mb-2">
                <h3 className={`${darkMode ? "dark text-white" : ""} mb-1 font-semibold`}>description</h3>
                <textarea type="text" placeholder='description here...'
                className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
               p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400
                border-solid border-x-2 border-y-2 focus:outline-none description
                `}
            />
            </div>
            <div className="mb-2">
                <label htmlFor="status" className={`${darkMode ? "dark text-white": ""}
                block mb-2 font-semibold`}>status</label>
                <select id="status"
                    className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
                    p-1 rounded-sm w-[100%] task_name outline-sky-500 status
                    border-sky-400 border-solid border-x-2 border-y-2 bg-white`}>
                    <option disabled value={""}>Choose A Status</option>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="status" className={`${darkMode ? "dark text-white": ""}
                block mb-2 font-semibold`}>priority</label>
                    <select id="priority" 
                    className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
                    p-1 rounded-sm w-[100%] task_name outline-sky-500 priority
                    border-sky-400 border-solid border-x-2 border-y-2 bg-white`}>
                    <option value={""} disabled className='text-gray-600'>Choose A Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div className="create mt-3">
                <button onClick={() => AddTask()} className="create_task bg-sky-500 hover:bg-sky-600 w-[100%] text-white font-semibold rounded-sm p-2">Create</button>
            </div>
        </aside>
    );
}

export default Aside;

