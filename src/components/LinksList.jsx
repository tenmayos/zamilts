import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import { useTransition } from '@react-spring/web';
import { useLocation } from 'react-router-dom';
import { linksListLanguages } from '../data/navbarData';
import AboutUsSubmenu from './micro components/AboutUsSubmenu';
import BusinessDivisSubmenu from './micro components/BusinessDivisSubmenu';
import { Link } from 'react-router-dom';
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
  const isArabic = useLocation().pathname.includes('/ar');
  const languagePack = isArabic ? linksListLanguages.ar : linksListLanguages.en;

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
          <a href="/">{languagePack[0]}</a>
        </li>
        <li className={props.liStyles}
          onMouseEnter={() => {
            setAboutUsHovered(true);
          }}>
          <a href="/">{languagePack[1]}</a>
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
          <a href="/">{languagePack[2]}</a>
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
          <a href="/">{languagePack[3]}</a>
        </li>
        <li className={props.liStyles}>
          <a href="/">{languagePack[4]}</a>
        </li>
        <li className={props.liStyles}>
          {isArabic ? <Link to="/">{languagePack[5]}</Link> : <Link to='/ar'>{languagePack[5]}</Link>}
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
                {languagePack[6]}
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