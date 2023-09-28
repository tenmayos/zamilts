import Hamburger from "./Hamburger.jsx";
import LinksList from './LinksList.jsx';
import logo from "../assets/png/logo.png";


function NavBar() {
  const ulStyles = 'inline-flex space-x-6 ul-allignment p-4 text-white';
  const liStyles = "transition-all hover:text-green-400";
  const btnLiStyles = 'transition-all bg-green-600 rounded-full hover:bg-black hover:text-green-600';

  // will need a state to know when the hamburger has been clicked
  return (
    <header
      className="fixed top-0 z-10 w-full flex border-black bg-gradient-to-b from-green-700 transition-all overflow-hidden">
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
  );
}

export default NavBar;
