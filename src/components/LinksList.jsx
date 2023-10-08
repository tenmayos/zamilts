import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import { useTransition } from '@react-spring/web';
import AboutUsSubmenu from './micro components/AboutUsSubmenu';
import BusinessDivisSubmenu from './micro components/BusinessDivisSubmenu';
/**
 * @param {string} mainStyles ul's CSS classes
 * @param {string} liStyles li's CSS Classes
 * @param {string} btnLiStyles button's CSS Classes
 * @description returns an HTML ul filled with the website's pages
 */
function LinksList(props) {
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);
  const [getInHovered, setGetInHover] = useState(false);
  const [aboutUsHovered, setAboutUsHovered] = useState(false);
  const [bdivisHovered, setBdivisHovered] = useState(false);

  const aboutSubmenuTransition = useTransition(aboutUsHovered, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const bDivisSubmenuTransition = useTransition(bdivisHovered, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
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
        <li className={props.liStyles}
          onMouseEnter={() => {
            setAboutUsHovered(true);
          }}>
          <a href="/">About Us</a>
        </li>
        {
          aboutSubmenuTransition(
            (style, state) =>
              state
              &&
              <AboutUsSubmenu
                springs={style} type='pc'
                exitFunc={() => {
                  setAboutUsHovered(false)
                }} />
          )}
        <li className={props.liStyles}
          onMouseEnter={() => {
            setBdivisHovered(true);
          }}>
          <a href="/">Business Divisions</a>
        </li>
        {
          bDivisSubmenuTransition(
            (style, state) =>
              state &&
              <BusinessDivisSubmenu
                springStyles={style} type='pc'
                exitFunc={() => {
                  setBdivisHovered(false)
                }}
              />
          )
        }
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