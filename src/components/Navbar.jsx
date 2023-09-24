import Hamburger from "./Hamburger.jsx";
import LinksList from './LinksList.jsx';
import { animated, useSpring } from '@react-spring/web';
import logo from "../assets/png/logo.png";


function NavBar() {
  const ulStyles = 'flex space-x-4 text-center ul-allignment text-white';
  const liStyles = "transition-all hover:text-green-400 p-1";
  const btnLiStyles = 'transition-all p-1';
  // Remove fade effect. looks bad.
  const [styleSprings, api] = useSpring(() => {
    return {
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 }
    }
  });

  // will need a state to know when the hamburger has been clicked
  return (
    <animated.header
      className="flex border-black bg-gradient-to-b from-green-700 transition-all overflow-hidden"
      style={styleSprings}
    >
      <div
        id="logo"
        className="w-44 p-4 ml-4 shrink-0 md:w-56 lg:w-64 lg:ml-2"
      >
        <a href="/">
          <img src={logo} alt="zamil logo" />
        </a>
      </div>
      <div className="ml-auto inline-block content-center">
        <Hamburger cName="mr-6 mt-3 text-3xl lg:hidden md:text-5xl p-1 text-white" />
      </div>
      <nav
        className="m-auto mr-8 text-base hidden lg:flex bg-black p-4 rounded-2xl border border-green-700">
        <LinksList mainStyles={ulStyles} liStyles={liStyles} btnLiStyles={btnLiStyles} />
      </nav>
    </animated.header>
  );
}

export default NavBar;
