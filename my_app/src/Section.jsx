// Import Essentiel Component
import Main  from './Main';
import Aside  from './Aside';
import React from 'react';


export default function Section({setDarkMode, darkMode}) {
  return (
    <section className={`${darkMode ? "dark bg-zinc-800": ""} justify-between flex flex-col md:flex-col 
    lg:flex-row sm:flex-col mx-5 my-5 rounded-md bg-gray-50 p-5`}>
        <Aside setDarkMode={setDarkMode} darkMode={darkMode}></Aside>
        <Main setDarkMode={setDarkMode} darkMode={darkMode}></Main>
    </section>
  );
}



