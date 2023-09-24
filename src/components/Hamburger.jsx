import { useSpring, a } from "@react-spring/web";
import { useState } from "react";

function Hamburger(props) {
    const [isPressed, setPressed] = useState(false);
    const [springs, api] = useSpring(() => {})

    function handleClick() {

        if (isPressed == true) {
            api.start(
                {
                    from: {opacity: 0.5},
                    to: {opacity: 1}
                }
            )
        } else {
            api.start({
                from: { opacity: 1 },
                to: { opacity: 0.5 }
            });
        }

        setPressed((prevState) => {
            return !prevState
        })
    }
    return (
        <a.button
            onClick={handleClick}
            className={props.cName}
            style={springs}
        >
            <i className="fa-solid fa-bars" />
        </a.button>
    )
}

export default Hamburger;