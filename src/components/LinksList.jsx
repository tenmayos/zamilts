import { animated, useSpring } from '@react-spring/web'
/**
 * @param {string} mainStyles ul's CSS classes
 * @param {string} liStyles li's CSS Classes
 * @param {string} btnLiStyles button's CSS Classes
 * @description returns an HTML ul filled with the website's pages
 */
function LinksList(props) {

  return (
    <ul className={props.mainStyles}>
      <li className={props.liStyles}>
        <a href="/">Home</a>
      </li>
      <li className={props.liStyles}>
        <a href="/">About Us</a>
      </li>
      <li className={props.liStyles}>
        <a href="/">Business Divisions</a>
      </li>
      <li className={props.liStyles}>
        <a href="/">Our Clients</a>
      </li>
      <li className={props.liStyles}>
        <a href="/">Careers</a>
      </li>
      <li className={props.liStyles}>
        <a href="/">العربية</a>
      </li>
      <li className={props.btnLiStyles}>
        <animated.button className='transition-all rounded-md hover:bg-green-600'>
          <span className='p-1 text-center'>Get in Touch</span>
          <i className="p-1 fa-solid fa-phone-volume"></i>
        </animated.button>
      </li>
    </ul>
  )
}

export default LinksList;