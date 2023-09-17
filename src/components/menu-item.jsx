import '../styles/adox-layout.css'

/**
 * 
 * @param {{destination: null || string,
 *  symbol: picture,
 *  text: string,
 *  altText: null || string}} props
 * @description Returns a menu div for the main menu.
 */
export default function MenuItem(props) {

    var altText = props.alt
    if (altText == null || altText == '') {
        altText = 'empty'
    }

    var destination = props.destination
    if (props.destination == null) {
        destination = 'www.google.com'
    }

    return (
        <div className="menu">
            <a href={destination}>
                <img src={props.symbol} alt='empty' />
                <a href={props.link}>{props.text}</a>
            </a>
        </div>
    )
}