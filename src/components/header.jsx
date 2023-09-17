import '../styles/bootstrap.css'
import '../styles/adox-layout.css'
import MenuItem from './menu-item'
import ztsLogo from '../assets/png/logo.png'
import companyPNG from '../assets/png/company.png'
import visionPNG from '../assets/png/vision.png'
import oilPNG from '../assets/png/oil.png'
import chemicalPNG from '../assets/png/chemical.png'
import mechanicalPNG from '../assets/png/mechanical.png'
import constructionPNG from '../assets/png/construction.png'
import gasPNG from '../assets/png/gas.png'

export default function Header() {
    return (
        <>
            <header id='header' style={{ background: 'red' }}>
                <div className='container-fluid'>
                    <div className='row align d-flex'>
                        <div className='col-lg-2 col-sm-6 col-xs-6'>
                            <div className='logo'>
                                <a href='www.google.com'>
                                    <img src={ztsLogo} alt='zamil logo' />
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-10 col-sm-6 col-xs-6'>
                            <div className='header-main'>
                                <nav id='cssmenu'>
                                    <div id='head-mobile'></div>
                                    <div className='button'></div>
                                    <ul className='mb-0'>
                                        <li>
                                            <a href='google.com'>Home</a>
                                        </li>
                                        <li>
                                            <a href='google.com'>About us</a>

                                            <div className='mega-menu animated fadeIn lap'>
                                                <div className='menu'>
                                                    <a href='google.com'>
                                                        <img src={companyPNG} alt='company picture' />
                                                        <a href="google.com">Company Profile</a>
                                                    </a>
                                                </div>
                                                <div className="menu">
                                                    <a href="www.google.com">
                                                        <img src={visionPNG} />
                                                        <a href="www.google.com">Vision and Mission</a>
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="pl-0">
                                                <li>
                                                    <a href="about-us.php">Company Profile</a>
                                                </li>
                                                <li>
                                                    <a href="about-us.php#vision">Vision and Mission</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            {/* MENUS START */}
                                            <a href="#">Business Divisions</a>
                                            <div className="mega-menu animated fadeIn lap">
                                                <MenuItem text='Oil and Gas Department' symbol={oilPNG} />
                                                <MenuItem text='Chemical Department' symbol={chemicalPNG} />
                                                <MenuItem text='Mechanical Department' symbol={mechanicalPNG} />
                                                <MenuItem text="Construction Department" symbol={constructionPNG} />
                                                <MenuItem text="Oil & Gas Division" symbol={gasPNG} />
                                                <MenuItem text="Telecomms and Security" symbol={gasPNG} />
                                            </div>
                                            {/* Continue from line 79 */}
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}