// Import Essentiel Component
import React, {useEffect, useState} from "react";
import Main  from './Main';
import Aside  from './Aside';


export default function Section({setDarkMode, darkMode}) {
  const [tasks, setTasks] = useState([]);
  return (
    <section className={`${darkMode ? "dark bg-zinc-800": "light"} justify-between flex flex-col md:flex-col 
    lg:flex-row sm:flex-col light:bg-gray-200 p-5 gap-5`}>
        <Aside setDarkMode={setDarkMode} darkMode={darkMode} tasks={tasks} setTasks={setTasks}></Aside>
        <Main setDarkMode={setDarkMode} darkMode={darkMode} tasks={tasks} setTasks={setTasks}></Main>
    </section>
  );
}


