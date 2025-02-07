// import useEffect
import React, { useEffect } from "react";

// Include Font Awesome
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faDatabase, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Images
import avatarLogo from "./assests/avatar.jpg";

const Header = () => {
    return (
        <header className="bg-slate-50 p-5 grid grid-cols-5
        shadow-[0_-1px_6px_rgba(0,0,0,0.3)] light_mode">
            <div className="logo lg:col-span-1 lg:block md:block hidden">
                <a href="#">
                    <p className="text-2xl font-bold text-sky-500">NoteMind</p>
                </a>
            </div>
            <div className="search flex col-span-3 lg:col-span-3 md:col-span-3 justify-center items-center">
                <input className="w-4/5 border-sky-500 rounded-l-sm border-2 border-solid rounded-none h-full pl-2 b2-slate-50 outline-none" type="text" placeholder="Search"/>
                <button className='w-1/5 transition-all h-full font-semibold rounded-r-sm bg-sky-500 text-white hover:bg-sky-600'>Search</button>
            </div>
            <div className="account lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-2 text-right flex justify-end">
                <button className="mr-5 w-10 rounded-3xl dark_mode border-2 border-sky-500 hover:bg-gray-100">
                    <FontAwesomeIcon className="font-semibold text-sky-500" icon={faMoon} />
                </button>
                <img className="w-10 cursor-pointer rounded-3xl border-2 border-sky-500" src={avatarLogo} alt="" />
            </div>
        </header>
    );
}

export default Header;



