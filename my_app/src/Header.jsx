// Include Font Awesome
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import Images
import avatarLogo from "./assests/avatar.jpg";


const Header = () => {
    return (
        <header className="bg-slate-50 p-5 grid grid-cols-5
        shadow-[0_-1px_6px_rgba(0,0,0,0.3)]">
            <div className="logo lg:col-span-1 lg:block md:block hidden">
                <p className="text-2xl font-bold text-sky-500">NoteMind</p>
            </div>
            <div className="search flex col-span-4 lg:col-span-3 md:col-span-3 justify-center items-center bg-slate-50">
                <input className="w-4/5 h-full pl-2 b2-slate-50 outline-none" type="text" placeholder="Search"/>
                <button className='w-1/5 transition-all h-full font-semibold rounded-sm bg-sky-500 text-white hover:bg-sky-700'>Search</button>
            </div>
            <div className="account lg:col-span-1 text-right flex justify-end">
                <img className="w-10 rounded-3xl border-2 border-sky-500" src={avatarLogo} alt="" />
            </div>
        </header>
    );
}

export default Header;



