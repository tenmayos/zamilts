import AboutUsSubmenu from "./AboutUsSubmenu";
import BusinessDivisSubmenu from "./BusinessDivisSubmenu";
import { useState } from 'react';

function MobileNavMenu() {

    const [isAboutClicked, setAboutClicked] = useState(false);
    const [isBDivisClicked, setBDivisClicked] = useState(false);

    {/* Figure out what animation u want to add before starting */}
    
    function pathFinder(path) {
        console.log('going to ' + path)
    }

    function handleAboutClick() {
        setAboutClicked(prevState => {
            return !prevState;
        })
    }

    function handleBusinessDivClicked() {
        setBDivisClicked(prevState => {
            return !prevState;
        })
    }

    return (
        <ul className="text-lg bg-white">
            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                Home
            </li>
            {/* About us submenu end */}
            <li className="flex border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors"
                style={isAboutClicked ? { backgroundColor: 'rgb(16 185 129)', color: 'white' } : null}
                onClick={handleAboutClick}>
                <div className="mr-auto">
                    <h2>About us</h2>
                </div>
                <div className="text-green-600" style={isAboutClicked ? { color: 'white' } : null}>
                    <strong>{isAboutClicked ? '-' : '+'}</strong>
                </div>
            </li>
            <li className="bg-slate-600">
                {isAboutClicked && <AboutUsSubmenu />}
            </li>

            {/* Business divisions submenu start */}
            <li className="flex border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors"
                style={isBDivisClicked ? { backgroundColor: 'rgb(16 185 129)', color: 'white' } : null}
                onClick={handleBusinessDivClicked}>
                <div className="mr-auto">
                    <h2>Business Divisions</h2>
                </div>
                <div className="text-green-600" style={isBDivisClicked ? { color: 'white' } : null}>
                    <strong>{isBDivisClicked ? '-' : '+'}</strong>
                </div>
            </li>
            <li className="bg-slate-600">
                {isBDivisClicked && <BusinessDivisSubmenu />}
            </li>
            {/* Business divisions submenu start */}

            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                <a href="/">Our Clients</a>
            </li>
            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                <a href="/">Careers</a>
            </li>
            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                العربية
            </li>
            <li className="p-3 text-white bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"
                onClick={() => pathFinder('/getin')}>
                Get in Touch
            </li>
        </ul>
    )
}

export default MobileNavMenu;