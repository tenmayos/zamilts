/**
 * 
 * @param {string} innerText The text inside the button.
 * @param {Function} onClick Trigger clicked function.
 */
function PrimaryButton(props) {
    return (
        <button className=" transition-colors 
        inline-block bg-green-600 hover:bg-green-500 rounded-full p-4 shadowed text-white"
            onClick={props.onClick}>
            {props.innerText}
        </button>
    )
}

export default PrimaryButton;