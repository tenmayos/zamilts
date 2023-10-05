import { animated, useSpring } from '@react-spring/web';

function AboutUsSubmenu() {

    const spring = useSpring({
        from: { x: '50%' },
        to: { x: '0%' }
    })

    return (
        <animated.ul style={spring} className="p-2 text-white">
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