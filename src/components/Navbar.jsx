import logo from '../assets/png/logo.png'

function NavBar() {

    return (


        <header className="bg-slate-500 h-16 md:h-24 sticky container z-10 top-0 flex justify-self-center justify-between items-center">
            <div className="w-36 md:w-56 top-0">
                <a href='/home'>
                    <img src={logo} alt='Zamil Trade & Services Logo' />
                </a>
            </div>
            <div className='text-emerald-300 text-lg bg-slate-900 py-2 mr-4'>
                <button className='hidden text-3xl focus:outline-none'>
                    &#9776;
                </button>
                <ul className='space-x-6 flex items-center flex-wrap'>
                    <li>
                        <a href="#partners" className='hover:opacity-90'>PLACEHOLDER</a>
                    </li>
                    <li>
                        <a href="#partners" className='hover:opacity-90'>PLACEHOLDER</a>
                    </li>
                    <li>
                        <a href="#partners" className='hover:opacity-90'>PLACEHOLDER</a>
                    </li>
                </ul>
            </div>
        </header>
    )

}

export default NavBar;