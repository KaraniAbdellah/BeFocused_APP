// Import React
import React, { useState } from 'react'

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faGauge, faTag, faX } from "@fortawesome/free-solid-svg-icons";

// Import Aside Component
import Main from "./Main";

function Aside({setDarkMode, darkMode}) {
    const AddTask = () => {
        console.log("Hello World");
    }
    
    const [title, setTitle] = useState("Default");
    const HandleTitle = (e) => {
        setTitle(e.target.value);
    }

    const [description, setDescription] = useState("Default");
    const HandleDescription = (e) => {
        setDescription(e.target.value);
    }

    const [status, setStatus] = useState("Default");
    const HandleStatus = (e) => {
        setStatus(e.target.value);
    }

    const [priority, setPriority] = useState("Default");
    const HandlePriority = (e) => {
        setPriority(e.target.value);
    }

    return (
        <aside className={`${darkMode ? "dark bg-zinc-700" : ""} bg-white inset-shadow-2xs
        lg:mb-0 md:mb-4 py-4 px-5 rounded w-[100%] lg:w-[30%] md:w-[100%]
        sm:w-[100%]`}>
            <h3 className={`${darkMode ? "dark text-white": ""} font-semibold mb-3 text-lg`}>Create new Task</h3>
            <div className="mb-2 name">
                <h3 className={`${darkMode ? "dark text-white": ""} mb-1 font-semibold`}>task name</h3>
                <input onInput={(e) => HandleTitle(e)} type="text" placeholder='task name...' 
                className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
                p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid 
                border-x-2 border-y-2
                `}/>
            </div>
            <div className="mb-2 description">
                <h3 className={`${darkMode ? "dark text-white" : ""} mb-1 font-semibold`}>description</h3>
                <textarea onInput={(e) => HandleDescription(e)} type="text" placeholder='description here...'
                className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
               p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400
                border-solid border-x-2 border-y-2
                `}
                />
            </div>
            <div className="mb-2 status">
                <label htmlFor="status" className={`${darkMode ? "dark text-white": ""}
                block mb-2 font-semibold`}>status</label>
                <select onChange={(e) => HandleStatus(e)} id="status"
                    className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
                    p-1 rounded-sm w-[100%] task_name outline-sky-500 
                    border-sky-400 border-solid border-x-2 border-y-2 bg-white`}>
                    <option disabled value={""}>Choose A Status</option>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className="mb-2 priority">
                <label htmlFor="status" className={`${darkMode ? "dark text-white": ""}
                block mb-2 font-semibold`}>priority</label>
                    <select onChange={(e) => HandlePriority(e)} id="priority" 
                    className={`${darkMode ? "dark bg-zinc-700 text-white" : ""}
                    p-1 rounded-sm w-[100%] task_name outline-sky-500 
                    border-sky-400 border-solid border-x-2 border-y-2 bg-white`}>
                    <option disabled value={""}>Choose A Status</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <div className="create mt-3">
                <button onClick={AddTask} className="create_task bg-sky-500 hover:bg-sky-600 w-[100%] text-white font-semibold rounded-sm p-2">Create</button>
            </div>
        </aside>
    );
}

export default Aside;

