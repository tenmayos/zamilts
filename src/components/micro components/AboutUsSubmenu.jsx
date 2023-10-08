import { animated } from '@react-spring/web';
import visionIcon from '../../assets/png/vision.png';
import companyIcon from '../../assets/png/company.png';

/**
 * 
 * @param {string} type to return a PC view li or not (default null for mobile)
 * @returns 
 */
function AboutUsSubmenu(props) {

    if (props.type === 'pc') {
        return (
            <animated.li style={props.springs} onMouseLeave={props.exitFunc} className='absolute top-full bg-white rounded-md border border-green-600'>
                <ul className='flex text-black p-4 space-x-8'>
                    <li className='text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={companyIcon} alt="" />
                            <span className='block'>Company Profile</span>
                        </div>
                    </li>
                    <li className='text-center p-2 hover:text-green-600 cursor-pointer'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={visionIcon} alt="" />
                            <span className='block'>Vision and Mission</span>
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
                    Company Profile
                </li>
                <li className="p-3 border-green-600">
                    Our Vision
                </li>
            </animated.ul>
        )
    }
}

export default AboutUsSubmenu;