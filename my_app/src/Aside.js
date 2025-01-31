// Import React
import React from 'react'

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faGauge, faTag, faX } from "@fortawesome/free-solid-svg-icons";


function Aside() {
  return (
    <aside className="bg-white inset-shadow-2xs py-4 px-5 rounded w-[30%]">
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
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
            <select id="countries" class="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2">
                <option selected>Choose a country</option>
                <option value="To Do">To Do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </div>
        <div className="mb-2 priority">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <select id="countries" class="p-1 rounded-sm w-[100%] task_name outline-sky-500 border-sky-400 border-solid border-x-2 border-y-2">
                <option selected>Choose a status</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
        <div className="create mt-3">
            <button className="create_task bg-sky-500 hover:bg-sky-600 w-[100%] text-white font-semibold rounded-sm p-2">Create</button>
        </div>
    </aside>
  )
}

export default Aside;
