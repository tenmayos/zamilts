import { animated } from "@react-spring/web";

function BusinessDivisSubmenu(props) {

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
export default BusinessDivisSubmenu;