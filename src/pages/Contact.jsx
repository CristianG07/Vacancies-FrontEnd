import { useEffect } from 'react'
import { CardContact } from '../components/contact/CardContact'
import { Button_Primary } from '../components/ui/Button_Primary'
import { Input } from '../components/ui/Input'
import { footer_social } from '../utils/data'
import { map_img, phone } from '../utils/image'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className='container_sections mt-6 lg:mt-20 space-y-12'>
      <div className='contect-about'>
        <div className='space-y-8 text-lg '>
          <div className='flex flex-col-reverse lg:flex-col gap-3'>
            <h5 className='title-about'>
              <div className='w-10'>
                <img src={phone} alt='phone' />
              </div>
              <p>+0000000000</p>
            </h5>
            <p className='text-about'>Позвонить на гарячую линию</p>
          </div>
          <div className='space-y-5 lg:ml-14'>
            <p className='text-about lg:ml-0'>Найти нас в социальных сетях:</p>
            <div className='flex gap-6'>
              {footer_social.map((social, i) => (
                <a
                  key={i}
                  className='bg-green_secondary hover:bg-green_primary rounded-full w-10 p-1.5 transition-colors duration-500'
                  href={social.link}
                >
                  <img
                    src={social.icon}
                    className='aspect-square'
                    alt='social_icons'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <CardContact className={''}>
          <div className='flex flex-col py-6 px-7 justify-center gap-6 text-center'>
            <div className='z-10'>
              <h6 className='font-semibold text-2xl lg:text-3xl'>
                Остались вопросы?
              </h6>
              <p className='text-lg leading-5 mt-3'>
                Пожалуйста, оставьте заявку и мы с вами свяжемся
              </p>
            </div>
            <div className='space-y-4 z-10'>
              <Input type='text' placeholder='Имя' />
              <Input type='text' placeholder='Телефон' />
              <Input type='email' placeholder='Почта' />
            </div>
            <div className='mt-4 z-10'>
              <Button_Primary className='px-9'>Связаться</Button_Primary>
            </div>
          </div>
        </CardContact>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-5'>
        <CardContact>
          <div className='flex flex-col py-6 pb-20 md:pb-28 px-7 lg:text-lg justify-center gap-8 font-semibold'>
            <div className='z-10'>
              <h6 className='text-2xl lg:text-3xl text-center'>
                Контакты главного офиса
              </h6>
            </div>
            <div className='space-y-2 z-10'>
              <h6>Телефон:</h6>
              <p>+ 000 000 0000</p>
              <p>+ 000 000 0000</p>
            </div>
            <div className='space-y-4 z-10'>
              <h6>Адрес:</h6>
              <p>г. Киев, ул. Сечевых стрельцов</p>
            </div>
          </div>
        </CardContact>
        <div className='w-full md:max-w-[38rem]'>
          <img src={map_img} alt='map_img' />
        </div>
      </div>
    </section>
  )
}
export default Contact
