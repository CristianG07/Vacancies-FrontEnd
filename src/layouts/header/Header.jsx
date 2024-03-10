import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
// data
import { nav_icons, nav_links } from '../../utils/data'
// images
import { burgermenu, logo } from '../../utils/image'
import { Sidebar } from '../../components/header/Sidebar'
import OutsideClickHandler from 'react-outside-click-handler'

export const Header = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  return (
    <section className='absolute top-0 left-0 w-full'>
      <OutsideClickHandler onOutsideClick={() => setIsOpenSidebar(false)}>
        <nav className='container_sections py-0 h-[85px] flex justify-between items-center bg-transparent'>
          <button
            onClick={() => setIsOpenSidebar(true)}
            className='block lg:hidden w-7'
          >
            <img src={burgermenu} alt='bars' />
          </button>
          <Link to='/' className='w-28 mx-auto lg:mx-0 lg:w-fit'>
            <img src={logo} alt='logo' />
          </Link>
          <ul className='show_lg-flex text-nowrap gap-8 items-center font-montserrat font-medium text-dark_blue'>
            {nav_links.map((nav) => (
              <li key={nav.text}>
                <NavLink to={nav.link}
                  className={({ isActive }) =>
                  `${isActive && "text-green_primary"} text-dark_blue hover_links`
                }>
                  {nav.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='show_lg-flex gap-6 items-center'>
            {nav_icons.map((icon, i) => (
              <button key={i}>
                <img src={icon.icon} alt='icons' />
              </button>
            ))}
          </div>
        </nav>
        <Sidebar props={{ isOpenSidebar, setIsOpenSidebar }} />
      </OutsideClickHandler>
    </section>
  )
}
