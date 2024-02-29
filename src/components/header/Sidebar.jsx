import { NavLink } from 'react-router-dom'
// data
import { nav_icons, nav_links } from '../../utils/data'
// images
import { logo } from '../../utils/image'

export const Sidebar = ({ props }) => {
  const { isOpenSidebar, setIsOpenSidebar } = props

  return (
    <section
      className={` ${
        isOpenSidebar ? 'translate-y-0' : '-translate-y-full'
      } lg:hidden absolute bg-ligth_gray left-0 top-0 w-full py-8 transition-all duration-500 z-30`}
    >
      <nav className='w-[90%] mx-auto grid gap-4 items-center divide-y-[1px] divide-green_secondary'>
        <div className='h-full space-y-8'>
          <div className='w-28 mx-auto'>
            <img src={logo} alt='logo' />
          </div>
          <ul className='space-y-2 pb-2 text-nowrap font-montserrat font-medium text-dark_blue text-center'>
            {nav_links.map((nav) => (
              <li key={nav.text}>
                <NavLink onClick={() => setIsOpenSidebar(false)} to={nav.link} className='hover_links'>
                  {nav.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex gap-9 justify-center items-center pt-4 [&>*:nth-child(2)]:order-1 [&>*:nth-child(3)]:order-2 [&>*:nth-child(1)]:order-3'>
          {nav_icons.map((icon, i) => (
            <button key={i}>
              <img src={icon.icon} alt='icons' />
            </button>
          ))}
        </div>
      </nav>
    </section>
  )
}
