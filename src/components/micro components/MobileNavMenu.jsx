import AboutUsSubmenu from "./AboutUsSubmenu";
import BusinessDivisSubmenu from "./BusinessDivisSubmenu";
import { linksListLanguages } from "../../data/navbarData";
import { useState } from 'react';
import { animated, useTransition } from "@react-spring/web";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function MobileNavMenu(props) {
    const inArabic = useLocation().pathname.includes('/ar');
    const languagePack = inArabic ? linksListLanguages.ar : linksListLanguages.en;

    const [isAboutClicked, setAboutClicked] = useState(false);
    const [isBDivisClicked, setBDivisClicked] = useState(false);
    const [transitionObj, setTransitionObj] = useState(
        {
            from: { x: '50%', opacity: 0.5 },
            enter: { x: '0%', opacity: 1 },
            leave: { x: '100%', opacity: 0 }
        }
    )

    {/* Figure out what animation u want to add before starting */ }

    function pathFinder(path) {
        console.log('going to ' + path)
    }

    const transition = useTransition(isBDivisClicked, transitionObj)

    const aboutTransition = useTransition(isAboutClicked, transitionObj)

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
        <animated.ul style={props.usedSprings} className="text-lg bg-white">
            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                {languagePack[0]}
            </li>
            {/* About us submenu end */}
            <li className="flex border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors"
                style={isAboutClicked ? { backgroundColor: 'rgb(16 185 129)', color: 'white' } : null}
                onClick={handleAboutClick}>
                <div className="mr-auto">
                    <h2>{languagePack[1]}</h2>
                </div>
                <div className="text-green-600" style={isAboutClicked ? { color: 'white' } : null}>
                    <strong>{isAboutClicked ? '-' : '+'}</strong>
                </div>
            </li>
            <li className="bg-slate-600">
                {
                    aboutTransition(
                        (styles, TisAboutClicked) => TisAboutClicked ? <AboutUsSubmenu springStyles={styles} /> : null
                    )
                }
            </li>

            {/* Business divisions submenu start */}
            <li className="flex border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors"
                style={isBDivisClicked ? { backgroundColor: 'rgb(16 185 129)', color: 'white' } : null}
                onClick={handleBusinessDivClicked}>
                <div className="mr-auto">
                    <h2>{languagePack[2]}</h2>
                </div>
                <div className="text-green-600" style={isBDivisClicked ? { color: 'white' } : null}>
                    <strong>{isBDivisClicked ? '-' : '+'}</strong>
                </div>
            </li>
            <li className="bg-slate-600">
                {
                    transition(
                        (styles, TisBDivisClicked) => TisBDivisClicked && <BusinessDivisSubmenu springStyles={styles} />
                    )
                }
            </li>
            {/* Business divisions submenu start */}

            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                <a href="/">{languagePack[3]}</a>
            </li>
            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                <a href="/">{languagePack[4]}</a>
            </li>
            <li className="border-b border-green-600 p-3 cursor-pointer hover:text-green-600 transition-colors">
                {inArabic ? <Link to='/'>{languagePack[5]}</Link> : <Link to='/ar'>{languagePack[5]}</Link>}
            </li>
            <li className="p-3 text-white bg-green-500 hover:bg-green-600 transition-colors cursor-pointer">
                {languagePack[6]}
            </li>
        </animated.ul>
    )
}

export default MobileNavMenu;