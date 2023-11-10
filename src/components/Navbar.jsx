import { useState } from "react";
import logo from "../assets/png/logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function HandleMenuClick() {

        const menuClasses = document.getElementById('menu-button').classList;
        const cssOpacityClass = 'opacity-50';

        if (menuOpen) {
            menuClasses.remove(cssOpacityClass);
            setMenuOpen(false);
            return;
        }

        setMenuOpen(true);
        menuClasses.add(cssOpacityClass);
    }

    return (
        <div className="fixed top-0 left-0 w-full z-20 bg-gradient-to-b from-green-700">

            <div className="flex justify-between">

                <Link className="ml-6 mt-6" to={useLocation().pathname.includes('ar') ? '/ar' : '/'} >
                    <img className="w-44" src={logo} alt="Zamil Trade & Services Logo" />
                </Link>
                <div>
                    <button id='menu-button' className="inline-block h-fit text-white text-4xl mr-6 mt-6 transition-opacity lg:hidden" onClick={HandleMenuClick}>
                        <i className="fa-solid fa-bars" />
                    </button>

                    <div id='large-menu'>
                        {/* add large screen menu here*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;