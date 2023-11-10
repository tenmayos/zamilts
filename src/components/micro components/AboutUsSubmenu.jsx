import { animated } from '@react-spring/web';
import visionIcon from '../../assets/png/vision.png';
import companyIcon from '../../assets/png/company.png';
import { useLocation } from 'react-router-dom';
import { aboutUsSubmenuLanguages } from '../../data/navbarData';

/**
 * 
 * @param {string} type to return a PC view li or not (default null for mobile)
 * @returns 
 */
function AboutUsSubmenu(props) {

    const languagePack = useLocation().pathname.includes('/ar') ? aboutUsSubmenuLanguages.ar : aboutUsSubmenuLanguages.en;

    if (props.type === 'pc') {
        return (
            <animated.li style={props.springs} onMouseLeave={props.exitFunc} className='absolute top-full bg-white rounded-md border border-green-600'>
                <ul className='flex text-black p-4 space-x-8'>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={companyIcon} alt="" />
                            <span className='block'>{languagePack[0]}</span>
                        </div>
                    </li>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={visionIcon} alt="" />
                            <span className='block'>{languagePack[1]}</span>
                        </div>
                    </li>
                </ul>
            </animated.li>
        )
    }
    else {
        return (
            <animated.ul style={props.springStyles} className="p-2 text-white">
                <li className="p-3 border-b border-green-600">
                    {languagePack[0]}
                </li>
                <li className="p-3 border-green-600">
                    {languagePack[1]}
                </li>
            </animated.ul>
        )
    }
}

export default AboutUsSubmenu;