import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import visionIcon from '../assets/png/vision.png';
import companyIcon from '../assets/png/company.png';
/**
 * @param {string} mainStyles ul's CSS classes
 * @param {string} liStyles li's CSS Classes
 * @param {string} btnLiStyles button's CSS Classes
 * @description returns an HTML ul filled with the website's pages
 */
function LinksList(props) {
  const [getInHovered, setGetInHover] = useState(false);
  const [springs, api] = useSpring(() => {
    return {
      // text starts to show from right to left
    }
  })

  function handleGetIn() {

    setGetInHover(() => {
      return !getInHovered
    })

  }

  return (
    <>
      <ul className={props.mainStyles}>
        <li className={props.liStyles}>
          <a href="/">Home</a>
        </li>
        <li className={props.liStyles}>
          <a href="/">About Us</a>
        </li>
        <li className='absolute top-full bg-white rounded-md'>
        <ul className='flex text-black p-4 space-x-8'>
                <li className='text-center p-2'>
                    <div className='relative text-center'>
                        <img className='w-16 mx-auto' src={companyIcon} alt="" />
                        <span className='block'>Company Profile</span>
                    </div>
                </li>
                <li className='text-center p-2'>
                    <div className='relative text-center'>
                        <img className='w-16 mx-auto' src={visionIcon} alt="" />
                        <span className='block'>Vision and Mission</span>
                    </div>
                </li>
            </ul>
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
          <animated.a
            className='transition-all
            shadowed
             rounded-full hover:bg-green-600
              bg-green-700 p-2'
            onMouseEnter={handleGetIn}
            onMouseLeave={handleGetIn}
            style={springs}
            href='/'>
            {
              getInHovered &&
              <div className='inline-block pr-2 pl-1'>
                Get in Touch
              </div>
            }
            <i className="fa-solid fa-phone-volume"></i>
          </animated.a>
        </li>
      </ul>
      <div>
      </div>
    </>
  )
}

export default LinksList;