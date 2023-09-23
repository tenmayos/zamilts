import Hamburger from "./Hamburger.jsx";
import LinksList from './LinksList.jsx';
import logo from "../assets/png/logo.png";


function NavBar() {
  const ulStyles = 'flex space-x-4 text-center navbarAllignment text-white';
  const liStyles = "transition-all hover:text-green-400 p-1";

  // will need a state to know when the hamburger has been clicked
  return (
    <header className="flex border-black bg-gradient-to-b from-green-700 transition-all overflow-hidden">
      <div
        id="logo"
        className="w-44 p-4 ml-4 shrink-0 md:w-56 lg:w-64 lg:ml-2"
      >
        <a href="/">
          <img src={logo} alt="zamil logo" />
        </a>
      </div>
      <div className="ml-auto inline-block content-center">
        <Hamburger className="mr-6 mt-3 text-3xl lg:hidden md:text-5xl p-1 focus:ring text-white" />
      </div>
      <nav
        className="m-auto mr-8 text-white text-xl space-x-7 hidden lg:flex bg-black p-4 rounded-md border border-green-400">
        <LinksList mainStyles={ulStyles} liStyles={liStyles} />
      </nav>
    </header>
  );
}

export default NavBar;
