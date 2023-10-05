import AboutUsSubmenu from "./AboutUsSubmenu";
import BusinessDivisSubmenu from "./BusinessDivisSubmenu";
import { useState } from 'react';
import { animated, useTransition } from "@react-spring/web";

function MobileNavMenu(props) {

    const [isAboutClicked, setAboutClicked] = useState(false);
    const [isBDivisClicked, setBDivisClicked] = useState(false);

    {/* Figure out what animation u want to add before starting */ }

    function pathFinder(path) {
        console.log('going to ' + path)
    }

    const transition = useTransition(isBDivisClicked, {
        from: { x: '50%', opacity: 0.5 },
        enter: { x: '0%', opacity: 1 },
        leave: { x: '100%', opacity: 0 }
    })

    const aboutTransition = useTransition(isAboutClicked, {
        from: { x: '50%', opacity: 0.5 },
        enter: { x: '0%', opacity: 1 },
        leave: { x: '100%', opacity: 0 }
    })

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
                    <h2>Business Divisions</h2>
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
        </animated.ul>
    )
}

export default MobileNavMenu;