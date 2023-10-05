import LinksList from './LinksList.jsx';
import logo from "../assets/png/logo.png";
import { useState } from "react";
import { animated, useSpring, useTransition } from '@react-spring/web';
import MobileNavMenu from './micro components/MobileNavMenu.jsx';

function NavBar() {
  const ulStyles = 'inline-flex space-x-6 ul-allignment p-4 text-white';
  const liStyles = "transition-all hover:text-green-400";
  const btnLiStyles = 'transition-all bg-green-600 rounded-full hover:bg-black hover:text-green-600';
  const [burgerSprings, api] = useSpring(() => { })

  const [isMenuPressed, setMenuPressed] = useState(false);
  const transition = useTransition(isMenuPressed,
    {
      from: { x: '100%' },
      enter: { x: '0%' },
      leave: { x: '100%' }
    })

  function handleBurgerClick() {

    if (isMenuPressed == true) {
      api.start(
        {
          from: { opacity: 0.5 },
          to: { opacity: 1 }
        }
      )
    } else {
      api.start({
        from: { opacity: 1 },
        to: { opacity: 0.5 }
      });
    }

    setMenuPressed((prevState) => {
      return !prevState
    })
  }

  return (
    <div className="fixed top-0 z-20 w-full">
      <header
        className="border-black bg-gradient-to-b from-green-700 transition-all flex">
        <div
          id="logo"
          className="w-44 p-4 ml-4 shrink-0 md:w-56 lg:w-52 lg:mt-2 lg:ml-8"
        >
          <a href="/">
            <img src={logo} alt="zamil logo" />
          </a>
        </div>
        <div className="ml-auto inline-block content-center">
          <animated.button
            onClick={handleBurgerClick}
            className='mr-6 mt-3 text-3xl lg:hidden md:text-5xl p-1 text-white'
            style={burgerSprings}>
            <i className="fa-solid fa-bars" />
          </animated.button>
        </div>
        <nav
          className="ml-auto mr-12 mt-6 hidden lg:block">
          <div className="bg-black bg-opacity-50 text-base hidden lg:flex rounded-2xl border border-green-700">
            <LinksList mainStyles={ulStyles} liStyles={liStyles} btnLiStyles={btnLiStyles} />
          </div>
        </nav>
      </header>
      {/* mobile Navmenu start */}
      <div className="relative rounded-sm lg:hidden">
        {
          transition(
            (style, isMenuPressed) =>
              isMenuPressed ? <MobileNavMenu usedSprings={style} /> : null
          )
        }
      </div>
    </div>
  );
}

export default NavBar;
