import { animated } from '@react-spring/web';
import chemIcon from '../../assets/png/department icons/chemical.png';
import gasIcon from '../../assets/png/department icons/gas.png';


function BusinessDivisSubmenu(props) {

    if (props.type === 'pc') {
        return (
            <animated.li style={props.springStyles}
                onMouseLeave={props.exitFunc}
                className='absolute top-full bg-white rounded-md border border-green-600 left-auto right-2'>
                <ul className='flex text-black p-4 space-x-8'>
                    <li className='text-center p-2'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={chemIcon} alt="" />
                            <span className='block'>Chemical Division</span>
                        </div>
                    </li>
                    <li className='text-center p-2'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={gasIcon} alt="" />
                            <span className='block'>Oil & Gas Division</span>
                        </div>
                    </li>
                    <li className='text-center p-2'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={gasIcon} alt="" />
                            <span className='block'>Oil & Gas Division</span>
                        </div>
                    </li>
                    <li className='text-center p-2'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={gasIcon} alt="" />
                            <span className='block'>Oil & Gas Division</span>
                        </div>
                    </li>
                    <li className='text-center p-2'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={gasIcon} alt="" />
                            <span className='block'>Oil & Gas Division</span>
                        </div>
                    </li>
                    <li className='text-center p-2'>
                        <div className='relative text-center'>
                            <img className='w-12 mx-auto' src={gasIcon} alt="" />
                            <span className='block'>Oil & Gas Division</span>
                        </div>
                    </li>
                </ul>
            </animated.li>
        )
    } else {
        return (
            <animated.ul style={props.springStyles} className="p-2 text-white">
                <li className="p-3 border-b border-green-600">
                    Oil and Gas
                </li>
                <li className="p-3 border-b border-green-600">
                    Chemicals
                </li>
                <li className="p-3 border-b border-green-600">
                    Mechanical
                </li>
                <li className="p-3 border-b border-green-600">
                    Construction
                </li>
                <li className="p-3 border-b border-green-600">
                    Oil & Gas Division
                </li>
                <li className="p-3 border-green-600">
                    Telecoms and Security
                </li>
            </animated.ul>
        )
    }
}
export default BusinessDivisSubmenu;