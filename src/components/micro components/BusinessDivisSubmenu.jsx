import { animated } from '@react-spring/web';
import chemIcon from '../../assets/png/department icons/chemical.png';
import gasIcon from '../../assets/png/department icons/gas.png';
import construcIcon from '../../assets/png/department icons/construction.png';
import mechIcon from '../../assets/png/department icons/mechanical.png';
import oilIcon from '../../assets/png/department icons/oil.png';
import { businessDivisSubmenuLanguages } from '../../data/navbarData';
import { useLocation } from 'react-router-dom';

function BusinessDivisSubmenu(props) {
    const languagePack = useLocation().pathname.includes('/ar') ? businessDivisSubmenuLanguages.ar : businessDivisSubmenuLanguages.en;

    if (props.type === 'pc') {
        return (
            <animated.li style={props.springStyles}
                onMouseLeave={props.exitFunc}
                className='absolute top-full bg-white rounded-md border border-green-600 left-auto right-2'>
                <ul className='flex text-black p-4 space-x-4'>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-10 mx-auto' src={oilIcon} alt="" />
                            <span className='block text-sm'>{languagePack[0]}</span>
                        </div>
                    </li>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-10 mx-auto' src={chemIcon} alt="" />
                            <span className='block text-sm'>{languagePack[1]}</span>
                        </div>
                    </li>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-10 mx-auto' src={mechIcon} alt="" />
                            <span className='block text-sm'>{languagePack[2]}</span>
                        </div>
                    </li>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-10 mx-auto' src={construcIcon} alt="" />
                            <span className='block text-sm'>{languagePack[3]}</span>
                        </div>
                    </li>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-10 mx-auto' src={gasIcon} alt="" />
                            <span className='block text-sm'>{languagePack[4]}</span>
                        </div>
                    </li>
                    <li className='transition-colors text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-10 mx-auto' src={gasIcon} alt="" />
                            <span className='block text-sm'>{languagePack[5]}</span>
                        </div>
                    </li>
                </ul>
            </animated.li>
        )
    } else {
        return (
            <animated.ul style={props.springStyles} className="p-2 text-white">
                <li className="p-3 border-b border-green-600">
                    {languagePack[0]}
                </li>
                <li className="p-3 border-b border-green-600">
                    {languagePack[1]}
                </li>
                <li className="p-3 border-b border-green-600">
                    {languagePack[2]}
                </li>
                <li className="p-3 border-b border-green-600">
                    {languagePack[3]}
                </li>
                <li className="p-3 border-b border-green-600">
                    {languagePack[4]}
                </li>
                <li className="p-3 border-green-600">
                    {languagePack[5]}
                </li>
            </animated.ul>
        )
    }
}
export default BusinessDivisSubmenu;