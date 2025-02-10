import React, { useEffect, useState } from 'react';
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinimize, faRotate } from '@fortawesome/free-solid-svg-icons';
import pomodoroVoice from "./assests/pomodoro_voice.mp3";


export default function Main({darkMode, tasks, setTasks}) {
    const [taskStarted, setTaskStarted] = useState(-1);
    const [timeLeft, setTimeLeft] = useState(1500);
    useEffect(() => {
        const storedTask = localStorage.getItem("idOfTaskStarted");
        if (storedTask) {
            setTaskStarted(Number(storedTask));
            setTimeLeft(localStorage.getItem("timeLeft") || 1500);
        }
    }, []);

    useEffect(() => {
        let timer;
        if (Number(taskStarted) !== -1) {
            timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 0) {
                        clearInterval(timer);
                        return 0;
                    }
                    localStorage.setItem("timeLeft", prev - 1);
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [taskStarted]);
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;

        if (minutes === 0 && secs === 0) {
            return `🎉 Congrats 🎉`;
        } else {
            return `Timer: ${minutes}:${secs.toString().padStart(2, "0")}`;
        }
    };
    

    const handlRefrech = () => {
        console.log("task has been finished");
        // // Directly accessing events on the document object
        // const audio = new Audio(pomodoroVoice);
        // // Check if the user has interacted before playing
        // audio.play();
        setTimeLeft(1500);
        localStorage.setItem("timeLeft", 1500);
        let timer;
        timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                localStorage.setItem("timeLeft", prev - 1);
                return prev - 1;
            });
        }, 1000);
    }


    
    const handleAllTasks = () => {
        setFilteredTasks(tasks);
    };
    
    const handleToDo = () => {
        setFilteredTasks(tasks.filter(task => task.status === "To Do"));
    };

    const handleDoning = () => {
        setFilteredTasks(tasks.filter(task => task.status === "Doing"));
    };
    
    // Dans le composant Main, ajoutez un état pour stocker les tâches filtrées
    const [filteredTasks, setFilteredTasks] = useState(tasks);
    
    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    useEffect(() => {
        let allBtns = document.querySelectorAll(".main_btn");
        allBtns.forEach((btn) => {
            btn.addEventListener("click", function() {
                allBtns.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");

            });
        });
    }, []);

    return (
        <main className={`${darkMode ? "dark bg-zinc-700": ""} bg-white inset-shadow-2xs py-4 px-5 
        rounded w-[100%] sm:w-[100%] md:w-[100%] lg:w-[68%]`}>
            <div className="flex justify-between items-center mb-2">
                <h2 className={`${darkMode ? "dark text-white" : ""} font-semibold text-2xl mb-5`}>Today tasks</h2>
                {Number(taskStarted) !== -1 ? (
                    <p data-aos="fade-left" className="bg-green-500 py-1 px-1.5 rounded-sm font-semibold text-zinc-800">
                        {formatTime(timeLeft)}
                        <button onClick={() => handlRefrech()} className="bg-white text-zinc-700 ml-2 py-1 px-2 rounded-sm">
                        <FontAwesomeIcon icon={faRotate}/>
                        </button>
                    </p>
                ) : ""}
            </div>
            <ul className="grid grid-cols-6 w-[100%] py-1 navigation mb-5 rounded-lg">
                <button onClick={() => handleAllTasks()}  className={`$${darkMode ? "dark hover:bg-zinc-600" : ""} main_btn active col-span-2 text-center font-semibold active
                rounded-sm py-2 px-4 text-sm transition-all text-sky-600 hover:bg-gray-200`}>All tasks</button>

                <button onClick={() => handleToDo()} className={`${darkMode ? "dark hover:bg-zinc-600" : ""} main_btn col-span-2 ml-2 text-center font-semibold 
                hover:bg-gray-200 rounded-sm text-sky-600 py-2 px-4 text-sm transition-all`}
                >To Do</button>
                <button onClick={() => handleDoning()} className={`${darkMode ? "dark hover:bg-zinc-600" : ""} main_btn col-span-2 ml-2 text-center font-semibold 
                hover:bg-gray-200 rounded-sm text-sky-600 py-2 px-4 text-sm transition-all`}
                >Doing</button>
            </ul>
            <div className="cards grid grid-cols-6 gap-3">
    {filteredTasks.length === 0 ? (
        <p className={`${darkMode ? "dark text-white" : ""} text-center my-10 col-span-6 font-semibold`}>
            No Task Yet
        </p>
    ) : (
        filteredTasks.map((task, index) => (
            <Card
                key={index}
                idOfTask={index}
                taskStarted={taskStarted}
                setTaskStarted={setTaskStarted}
                tasks={tasks}
                setTasks={setTasks}
                darkMode={darkMode}
                taskName={task.taskName}
                description={task.description}
                status={task.status}
                priority={task.priority}
                classNameOdTaskStarted={index === Number(localStorage.getItem("idOfTaskStarted")) ? "taskStarted" : ""}
                setTimeLeft={setTimeLeft}
            />
        ))
    )}
</div>
        </main>
    );
}






