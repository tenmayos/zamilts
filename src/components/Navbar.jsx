import { list } from 'postcss';
import logo from '../assets/png/logo.png'
import letterIcon from '../assets/svg/letter.svg'

function NavBar() {
    const liStyle = "transition-all hover:rounded-xl hover:text-green-400 p-1"
    // will need a state to know when the hamburger has been clicked.
    return (
        <header className='flex rounded-b-xl border-black bg-gradient-to-b from-green-700 transition-all overflow-hidden'>
            <div className='w-80 p-8 ml-8 shrink-0'>
                <a href='/'>
                    <img src={logo} alt='zamil logo' />
                </a>
            </div>
            <nav className='ml-auto mt-11 text-white mr-8 text-2xl flex space-x-7'>
                <ul className='flex space-x-7 text-center navbarAllignment'>
                    <li className={liStyle}>
                        <a href='/'>Home</a>
                    </li>
                    <li className={liStyle}>
                        <a href='/'>About Us</a>
                    </li>
                    <li className={liStyle}>
                        <a href='/'>Business Divisions</a>
                    </li>
                    <li className={liStyle}>
                        <a href='/'>Our Clients</a>
                    </li>
                    <li className={liStyle}>
                        <a href='/'>Careers</a>
                    </li>
                    <li className={liStyle}>
                        <a href='/'>العربية</a>
                    </li>
                    <li className={liStyle + 'items-center'}>
                        <button className='transition-all w-16 hover:bg-green-400 p-2 hover:opacity-90 text-sm text-center'>
                        <span>
                        <img className='flex' src={letterIcon} />
                        Contact us
                        </span>
                            
                            
                        </button>
                    </li>
                </ul>


            </nav>
        </header>
    )

}

export default NavBar;