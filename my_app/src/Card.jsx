import React from "react";

export default function Card({ darkMode, taskName, description, setTasks, tasks, taskStarted, setTaskStarted }) {
    const handleStart = (event) => {
        console.log("task will be started");
        setTaskStarted(true);
        let TaskStartedEle = event.target.parentElement.parentElement;
        if (!taskStarted) {
            TaskStartedEle.classList.add("taskStarted");
        } 
    };
    const handleDelete = (event) => {
        console.log("task will be deleted");
        let taskName =
        event.target.parentElement.parentElement.firstElementChild
            .firstElementChild.textContent;
        let Storedtasks = JSON.parse(localStorage.getItem("tasks"));
        if (Storedtasks) {
            Storedtasks = Storedtasks.filter((task) => task.taskName !== taskName);
            localStorage.setItem("tasks", JSON.stringify(Storedtasks));
            setTasks(Storedtasks);
        }
    };
    const handleDone = (event) => {
        console.log("task will be in Done State");
    };
    return (
        <div
        className={`${
                darkMode ? "dark bg-zinc-800" : ""
            } card bg-gray-100 p-2 rounded-sm lg:col-span-3
            md:col-span-3 sm:col-span-6 col-span-6`
        }
        >
        <div
            className={`${
            darkMode ? "dark" : ""
            } task_info flex justify-between mb-2`}
        >
            <h3 className={`${darkMode ? "dark text-white" : ""} font-semibold`}>
            {taskName}
            </h3>
        </div>
        <p
            className={`${
            darkMode ? "dark text-white" : ""
            } description mb-2 text-sm`}
        >
            {description}
        </p>
        <hr />
        <div className="btns mt-3">
            <button
            onClick={(e) => handleStart(e)}
            className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-bold py-1 px-2 rounded"
            >
            Start
            </button>
            <button
            onClick={(e) => handleDelete(e)}
            className="bg-red-600 hover:bg-red-700 mx-2 text-white text-sm font-bold py-1 px-2 rounded"
            >
            Delete
            </button>
            <button
            onClick={(e) => handleDone(e)}
            className="bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-1 px-2 rounded"
            >
            Done
            </button>
        </div>
        </div>
    );
}
