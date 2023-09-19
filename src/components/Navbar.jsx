import logo from '../assets/png/logo.png'

function NavBar() {
    // will need a state to know when the hamburger has been clicked.
    return (
        <nav className='bg-slate-800'>
            <div className='inline-flex py-2'>
                <a href='/'>
                    <img src={logo} alt='zamilts logo' />
                </a>
            </div>
            <div className='inline-flex text-white'>
                <ul className='flex space-x-8 flex-row'>
                    <li>
                        <a href='/'>PLACEHOLDER</a>
                    </li>
                    <li>
                        <a href='/'>PLACEHOLDER</a>
                    </li>
                    <li>
                        <a href='/'>PLACEHOLDER</a>
                    </li>
                    <li>
                        <a href='/'>PLACEHOLDER</a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;