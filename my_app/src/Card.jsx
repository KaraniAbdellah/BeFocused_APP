import React, { useEffect } from "react";

export default function Card({ idOfTask, darkMode, taskName, description, status, priority,
    setTasks, tasks, taskStarted, setTaskStarted, classNameOdTaskStarted, setTimeLeft}) {
    const handleStart = (event) => {
        setTimeLeft(1500);
        localStorage.setItem("timeLeft", 1500);
        if (Number(localStorage.getItem("idOfTaskStarted")) === -1) {
            setTaskStarted(idOfTask);
            let TaskStartedEle = event.target.parentElement.parentElement;
            localStorage.setItem("idOfTaskStarted", idOfTask);
            if (!taskStarted) {
                TaskStartedEle.classList.add("taskStarted");
            }
        }
    };
    const handleDelete = (event) => {
        console.log("task will be deleted");
        let taskName =
        event.target.parentElement.parentElement.firstElementChild
            .firstElementChild.textContent;
        if (event.target.parentElement.parentElement.classList.contains("taskStarted")) {
            setTaskStarted(-1);
            localStorage.setItem("idOfTaskStarted", -1);

        }
        let Storedtasks = JSON.parse(localStorage.getItem("tasks"));
        if (Storedtasks) {
            Storedtasks = Storedtasks.filter((task) => task.taskName !== taskName);
            localStorage.setItem("tasks", JSON.stringify(Storedtasks));
            setTasks(Storedtasks);
        }
    };
    const handleDone = (event) => {
        console.log("task will be in Done State");
        if (event.target.parentElement.parentElement.classList.contains("taskStarted")) {
            setTaskStarted(-1);
            localStorage.setItem("idOfTaskStarted", -1);
            setTimeLeft(1500);

            let taskName =
            event.target.parentElement.parentElement.firstElementChild
                .firstElementChild.textContent
            let Storedtasks = JSON.parse(localStorage.getItem("tasks"));
            if (Storedtasks) {
                Storedtasks = Storedtasks.filter((task) => task.taskName !== taskName);
                localStorage.setItem("tasks", JSON.stringify(Storedtasks));
                setTasks(Storedtasks);
            }
        }
    };
    return (
        <div
        className={`${
                darkMode ? "dark bg-zinc-800" : ""
            } ${classNameOdTaskStarted} card bg-gray-100 p-2 rounded-sm lg:col-span-3
            md:col-span-3 sm:col-span-6 col-span-6`
        }
        id={idOfTask}>
        <div
            className={`${
            darkMode ? "dark" : ""
            } task_info flex justify-between`}
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
        <div className="pro_status flex gap-2 mb-1">
            <button className="rounded text-rose-600 italic underline font-semibold text-sm">{status}</button>
            <button className="rounded text-rose-600 italic underline font-semibold text-sm">{priority}</button>
        </div>
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
