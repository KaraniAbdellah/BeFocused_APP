// Import React
import React, { useState } from 'react'

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faGauge, faTag, faX } from "@fortawesome/free-solid-svg-icons";

// Import Aside Component
import Main from "./Main";

function Aside() {
    const addTask = () => {
        let main = document.querySelector("main");
        console.log("Add Element" + main);
    }
    // const submit = ( ) => {
    //     console.log(status);
    // }
    // let [status, setStatus] = useState("");

    return (
        <aside className="bg-white inset-shadow-2xs lg:mb-0 md:mb-4 py-4 px-5 rounded w-[100%] lg:w-[30%] md:w-[100%] sm:w-[100%]">
            <h3 className="font-semibold mb-3 text-lg">Create new Task</h3>
            <div className="mb-2 name">
                <h3 className="mb-1 font-semibold">task name</h3>
                <input type="text" placeholder='task name...' className="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2"/>
            </div>
            <div className="mb-2 description">
                <h3 className="mb-1 font-semibold">description</h3>
                <textarea type="text" placeholder='description here...' className="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2"/>
            </div>
            <div className="mb-2 status">
                <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select id="status" className="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2">
                    <option disabled value={""}>Choose A Status</option>
                    <option value="To Do">To Do</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <div className="mb-2 priority">
                <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                <select id="status" className="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2">
                    <option disabled value={""}>Choose A Status</option>
                    <option value="To Do">High</option>
                    <option value="Doing">Medium</option>
                    <option value="Done">Low</option>
                </select>
            </div>
            <div className="create mt-3">
                <button onClick={addTask} className="create_task bg-sky-500 hover:bg-sky-600 w-[100%] text-white font-semibold rounded-sm p-2">Create</button>
            </div>
        </aside>
    )
}

export default Aside;


{/* <div className="mb-2 status">
<label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
<select multiple={false} value={status} onChange={(newVal) => {setStatus(newVal.target.value)}} id="status" className="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2">
    <option disabled value={""}>Choose A Status</option>
    <option value="To Do">To Do</option>
    <option value="Doing">Doing</option>
    <option value="Done">Done</option>
</select>
</div>
<div className="mb-2 priority">
<label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
<select multiple={false} value={status} onChange={(newVal) => {setStatus(newVal.target.value)}} id="status" className="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2">
    <option disabled value={""}>Choose A Status</option>
    <option value="To Do">High</option>
    <option value="Doing">Medium</option>
    <option value="Done">Low</option>
</select>
</div>
<div className="create mt-3">
<button onClick={submit} className="create_task bg-sky-500 hover:bg-sky-600 w-[100%] text-white font-semibold rounded-sm p-2">Create</button>
</div> */}