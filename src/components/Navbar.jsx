import Hamburger from "./Hamburger.jsx";
import LinksList from './LinksList.jsx';
import logo from "../assets/png/logo.png";
import { useState } from "react";
import AboutUsSubmenu from "./micro components/AboutUsSubmenu.jsx";

function NavBar() {
  const ulStyles = 'inline-flex space-x-6 ul-allignment p-4 text-white';
  const liStyles = "transition-all hover:text-green-400";
  const btnLiStyles = 'transition-all bg-green-600 rounded-full hover:bg-black hover:text-green-600';

  const [isAboutClicked, setAboutClicked] = useState(false);
  const [isBDivisClicked, setBDivisClicked] = useState(false);

  function handleAboutClick() {
    setAboutClicked(prevState => {
      const currentState = prevState ? false : true
      return currentState;
    })
  }

  function handleBusinessDivClicked() {
    setBDivisClicked(prevState => {
      return prevState ? false : true
    })
  }

  // will need a state to know when the hamburger has been clicked
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
          <Hamburger cName="mr-6 mt-3 text-3xl lg:hidden md:text-5xl p-1 text-white" />
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
        <ul className="bg-white">
          <li className="border-b border-green-600 p-3 text-lg">
            <a className="hover:text-green-600" href="/">
              Home
            </a>
          </li>
          {/* About us submenu end */}
          <li className="flex border-b border-green-600 p-3 text-lg cursor-pointer hover:text-green-600 transition-colors"
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
          {/* About us submenu end */}
          <li className="flex border-b border-green-600 p-3 text-lg cursor-pointer hover:text-green-600 transition-colors"
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
          </li>
          <li>PLACEHOLDER</li>
          <li>PLACEHOLDER</li>
          <li>PLACEHOLDER</li>
          <li>PLACEHOLDER</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
