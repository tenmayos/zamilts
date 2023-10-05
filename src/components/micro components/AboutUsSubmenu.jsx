import { animated} from '@react-spring/web';

function AboutUsSubmenu(props) {

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

export default AboutUsSubmenu;