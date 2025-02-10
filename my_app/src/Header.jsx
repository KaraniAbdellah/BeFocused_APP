// import useEffect
import React, { useEffect, useState } from "react";

// Include Font Awesome
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faDatabase, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Images
import avatarLogo from "./assests/avatar.png";

const Header = ({setDarkMode, darkMode}) => {
    const handleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("displayMode", newMode ? "dark" : "light");
            return newMode;
        });
    };
    useEffect(() => {
        const savedMode = localStorage.getItem("displayMode") || "light";
        setDarkMode(savedMode === "dark");
    }, []);

    return (
        <header className={`${darkMode ? "dark bg-zinc-700" : ""} p-5 flex justify-between h-[80px] w-[100%] items-center
        shadow-[0_-1px_6px_rgba(0,0,0,0.3)] bg-white`}>
            <div className="logo lg:block md:block d-flex justify-center items-center lg:w-[15%] md:w-[15%] hidden">
                <a href="#">
                    <p className="text-2xl font-bold text-sky-500">Pomodoro</p>
                </a>
            </div>
            <div className="search flex  justify-center items-center lg:w-[60%] w-[70%] h-[100%] md:w-[60%]">
                <input className={`${darkMode ? "dark text-white": ""}
                dark:bg-zinc-600 w-4/5 border-sky-500 rounded-l-sm border-2 border-solid 
                rounded-none h-full pl-2 b2-slate-50 outline-none
                `}
                type="text" placeholder="Filter By Status or Priority..."/>
                <button className={`${darkMode ? "dark": ""}
                w-1/5 transition-all h-full font-semibold
                rounded-r-sm bg-sky-500 text-white hover:bg-sky-600
                `}>Filter</button>
            </div>
            <div className="account text-right flex justify-end  lg:w-[15%] md:w-[15%] w-[30%]">
                <button onClick={handleDarkMode} className={`${darkMode ? "dark hover:bg-zinc-600" : ""} mr-2 w-10 rounded-3xl 
                dark_mode border-2 border-sky-500 hover:bg-gray-100`}>
                    {darkMode ? <FontAwesomeIcon className="font-semibold text-sky-500" icon={faSun} /> : 
                    <FontAwesomeIcon className="font-semibold text-sky-500" icon={faMoon} />}
                </button>
                <img className="w-10 cursor-pointer rounded-3xl border-2 border-sky-500" src={avatarLogo} alt="" />
            </div>
        </header>
    );
}

export default Header;



