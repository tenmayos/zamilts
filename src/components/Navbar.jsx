import logo from "../assets/png/logo.png";
import Hamburger from "./Hamburger.jsx";

function NavBar() {
  const liStyle = "transition-all hover:text-green-400 p-1";

  // will need a state to know when the hamburger has been clicked.
  return (
    <header className="flex border-black bg-gradient-to-b from-green-700 transition-all overflow-hidden">
      <div
        id="logo"
        className="w-44 mt-auto p-4 ml-4 shrink-0 md:w-56 lg:w-64 lg:ml-2"
      >
        <a href="/">
          <img src={logo} alt="zamil logo" />
        </a>
      </div>
      <div className="ml-auto mt-4 mr-6 focus:outline-none">
        <Hamburger className="text-3xl block lg:hidden focus:ring border rounded-md md:text-5xl p-1 border-green-500" />
      </div>
      <nav className="m-auto mr-8 text-white text-xl space-x-7 hidden lg:flex">
        <ul className="flex space-x-4 text-center navbarAllignment text-white focus:">
          <li className={liStyle}>
            <a href="/">Home</a>
          </li>
          <li className={liStyle}>
            <a href="/">About Us</a>
          </li>
          <li className={liStyle}>
            <a href="/">Business Divisions</a>
          </li>
          <li className={liStyle}>
            <a href="/">Our Clients</a>
          </li>
          <li className={liStyle}>
            <a href="/">Careers</a>
          </li>
          <li className={liStyle}>
            <a href="/">العربية</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
