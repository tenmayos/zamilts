import subLogo from '../assets/png/logo-dr.png'
import MicroFooter from './MicroFooter';
import { useLocation } from 'react-router-dom';
import { footerLanguages } from '../data/footerData';

function Footer() {
    // will will implement hovering with CSS instead of JS.
    const anchorClasses = 'transition-colors hover:text-green-600';

    const isArabic = useLocation().pathname.includes('/ar');
    const languagePack = isArabic ? footerLanguages.ar : footerLanguages.en;

    return (
        <>
            <hr className='border border-gray-200 my-4 w-2/3 lg:w-10/12 m-auto' />
            <footer
                className="grid grid-rows-[max-content_1fr] md:grid-rows-[max-content_1fr] lg:grid-cols-4 lg:grid-rows-none
             px-4 text-left md:grid-cols-3 md:px-12 lg:w-10/12 lg:mx-auto">
                <div className="row-start-1 my-auto md:col-span-2 lg:col-start-1 lg:row-start-2 lg:row-end-2 pb-4 lg:my-0 lg:mx-auto lg:col-span-1">
                    <a href="/">
                        <img className='ml-2 mb-2 w-44 md:w-52 lg:w-60' src={subLogo} alt="Darker Zamil Trade & Services Logo" />
                    </a>
                    <p className='pt-4 pl-2 pr-16 lg:px-2'>
                        {languagePack[0]}
                    </p>
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
                <div id='zts' className='row-start-2 lg:col-start-2 px-2 md:col-start-1 pb-4'>
                    <ul className='space-y-3'>
                        <h1 className='text-green-600 mb-2'>
                            <strong>
                                {languagePack[1]}
                            </strong>
                        </h1>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[2]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[3]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[4]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[5]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[6]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[7]}</a>
                        </li>
                    </ul>
                </div>
                <div id='regions' className='row-start-3 px-2 mt-2 md:col-start-2 md:row-start-2 lg:col-start-3 pb-4 md:mt-0'>
                    <ul className='space-y-3'>
                        <h1 className='text-green-600 mb-2'>
                            <strong>
                                {languagePack[8]}
                            </strong>
                        </h1>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[9]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[10]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[11]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[12]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[13]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[14]}</a>
                        </li>
                    </ul>
                </div>
                <div id='offerings' className='row-start-4 px-2 mt-2 md:row-start-2 md:col-start-3 md:mt-0 lg:col-start-4'>
                    <ul className='space-y-3'>
                        <h1 className='text-green-600 mb-2'>
                            <strong>
                                {languagePack[15]}
                            </strong>
                        </h1>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[16]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[17]}</a>
                        </li>
                        <li>
                            <a className={anchorClasses} href="/">{languagePack[18]}</a>
                        </li>
                    </ul>
                </div>
            </footer>
            <hr className='border border-gray-200 my-4 w-2/3 lg:w-10/12 m-auto' />
            <MicroFooter />
        </>
    )
}

export default Footer;