function Hamburger(props) {

    return (
        <button
            id='mobile-open-btn'
            className={props.className}>
            <i class="fa-solid fa-bars" />
            {/*&#9776;*/}
            {/*<img src={strawberry} />*/}
        </button>
    )
}

export default Hamburger;