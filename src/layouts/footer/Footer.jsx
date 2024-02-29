// data
import { Links_footer } from '../../components/footer/Links_footer'
import {
  footer_contact,
  footer_contens,
  footer_contens2,
  footer_contens3,
  footer_contens4,
  footer_social
} from '../../utils/data'
// images
import { logo } from '../../utils/image'

export const Footer = () => {
  return (
    <footer className='bg-green_footer font-montserrat text-sm font-medium text-dark_blue'>
      <div className='flex flex-col lg:flex-row container_sections gap-5 py-5 lg:py-20'>
        <div className='grid grid-cols-2 items-center lg:items-start lg:flex lg:flex-col mb-3 gap-7'>
          <div className='w-28'>
            <img src={logo} alt='logo' />
          </div>
          <div className='flex gap-5 lg:gap-7'>
            {footer_social.map((social, i) => (
              <a
                key={i}
                className='bg-green_secondary hover:bg-green_primary rounded-full w-10 p-1.5 transition-colors duration-500'
                href={social.link}
              >
                <img src={social.icon} className='aspect-square' alt='social_icons' />
              </a>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 lg:justify-items-center w-full order-1 lg:order-none gap-8'>
          <div className='space-y-2.5'>
            <h5 className='mb-6'>Главная</h5>
            {footer_contens.map((content) => (
              <Links_footer key={content.text} {...content} />
            ))}
          </div>
          <div className='space-y-2.5 order-3 lg:order-none'>
            <h5 className='mb-6'>О компании</h5>
            {footer_contens2.map((content) => (
              <Links_footer key={content.text} {...content} />
            ))}
          </div>
          <div className='space-y-2.5 order-2 lg:order-none'>
            <h5 className='mb-6'>Вакансии</h5>
            {footer_contens3.map((content) => (
              <Links_footer key={content.text} {...content} />
            ))}
          </div>
          <div className='space-y-2.5 order-4 lg:order-none'>
            <h5 className='mb-6'>Услуги</h5>
            {footer_contens4.map((content) => (
              <Links_footer key={content.text} {...content} />
            ))}
          </div>
        </div>
        <div className='order-5 lg:order-none space-y-5 pt-4 lg:pt-0'>
          <h5 className=''>Контакты</h5>
          <div className='grid grid-cols-2 lg:flex lg:flex-col gap-8 lg:gap-3'>
            {footer_contact.map((contact) => (
              <div key={contact.text} className='flex gap-0.5'>
                <div className='w-5'>
                  <img className='aspect-square' src={contact.icon} alt={contact.text} />
                </div>
                <p>{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
