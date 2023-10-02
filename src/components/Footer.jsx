import subLogo from '../assets/png/logo-dr.png'

function Footer() {
    // will will implement hovering with CSS instead of JS.
    const anchorClasses = 'transition-colors hover:text-green-600';
    return (
        <footer className="grid grid-rows-4 px-4">
            <div className="row-start-1 m-auto">
                <a href="/">
                    <img className='ml-2 mb-2 w-44' src={subLogo} alt="Darker Zamil Trade & Services Logo" />
                </a>
                <p className='pt-4 pl-2 pr-16'>Their symmetry and bright colors boost the aesthetics of places you occupy...</p>
                <div className='pl-2 pt-2'>
                    <div>
                        <ul className='text-xl flex space-x-7 text-gray-600'>
                            <li>
                                <a className={anchorClasses} href="/">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className={anchorClasses} href="/">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a className={anchorClasses} href="/">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a className={anchorClasses} href="/">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id='zts' className='row-start-2 px-2'>
                <ul className='space-y-3'>
                    <h1 className='text-green-600 mb-2'>
                        <strong>
                            Zamil Trade & Services
                        </strong>
                    </h1>
                    <li>
                        <a className={anchorClasses} href="/">About us</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Our Clients</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Business Units</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Careers</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Certifications</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div id='regions' className='row-start-3 px-2 mt-2 mb-4'>
                <ul className='space-y-3'>
                    <h1 className='text-green-600 mb-2'>
                        <strong>
                            Our Regions
                        </strong>
                    </h1>
                    <li>
                        <a className={anchorClasses} href="/">Dammam</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Riyadh</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Jeddah</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Bahrain</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">UAE</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Turkey</a>
                    </li>
                </ul>
            </div>
            <div id='offerings' className='row-start-4 px-2 mt-2'>
                <ul className='space-y-3'>
                    <h1 className='text-green-600 mb-2'>
                        <strong>
                            Offerings
                        </strong>
                    </h1>
                    <li>
                        <a className={anchorClasses} href="/">Residential</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Commercial</a>
                    </li>
                    <li>
                        <a className={anchorClasses} href="/">Investments</a>
                    </li>
                </ul>
                <hr className='text-black m-6' />
                <span className='text-sm text-center'>
                    © 2022 Zamil Trade & Services All rights reserved
                </span>
            </div>

        </footer>
    )
}

export default Footer;