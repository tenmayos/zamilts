import { animated, useSpring } from "@react-spring/web";

function BusinessDivisSubmenu() {
    const spring = useSpring({
        from: { x: '50%' },
        to: { x: '0%' }
    })

    return (
        <animated.ul style={spring} className="p-2 text-white">
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
export default BusinessDivisSubmenu;