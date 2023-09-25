import { animated, useSpring } from '@react-spring/web'
/**
 * @param {string} mainStyles ul's CSS classes
 * @param {string} liStyles li's CSS Classes
 * @param {string} btnLiStyles button's CSS Classes
 * @description returns an HTML ul filled with the website's pages
 */
function LinksList(props) {

  return (
    <>
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
        <li className='flex-auto bg-green700'>
          <animated.a className='transition-all rounded-full text-sm hover:bg-black bg-green-700 p-2'
          href='/'>
            Get in Touch?
            <i className="pr-1 pl-2 fa-solid fa-phone-volume"></i>
          </animated.a>
        </li>
      </ul>
      <div>

      </div>
    </>
  )
}

export default LinksList;