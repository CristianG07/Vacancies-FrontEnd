import { Link } from 'react-router-dom'
import { arrow_left } from '../../utils/image'
import { CardContact } from '../contact/CardContact'
import { Button_Primary } from '../ui/Button_Primary'
import { Input } from '../ui/Input'
import { Title } from '../ui/Title'

export const ContentCard = ({ img, title, location, dollar, time }) => {

  return (
    <section className='container_sections pb-0'>
      <Link
        to='/'
        className='flex items-center gap-2 text-lg font-bold lg:ml-6 my-10 mt-12 group'
      >
        <div className='group-hover:-translate-x-2 transition-transform duration-500'>
          <img src={arrow_left} alt='arrow_left' />
        </div>
        <span>Вернуться к вакансиям</span>
      </Link>
      <div className='flex flex-col md:flex-row justify-around gap-4'>
        <div className='flex flex-col justify-center lg:w-[55%] rounded-[2.5rem] overflow-hidden'>
          <div>
            <div className='h-56'>
              <img className='object-center' src={img} alt='' />
            </div>
          </div>
          <div className='grid h-full px-4 text-text_card bg-ligth_gray'>
            <div className='flex flex-col lg:flex-row lg:items-center w-full gap-4 lg:space-x-4 font-montserrat text-xs sm:text-sm px-4 pt-4 pb-7'>
              <div>
                <Title className='text-base sm:text-lg'>{title}</Title>
              </div>
              <div className='hidden md:block h-[2px] w-full lg:w-[1.5px] lg:h-[95%] bg-gradient-to-r lg:bg-gradient-to-b to-transparent via-[#575757] from-transparent' />
              <div className='space-y-2 lg:pl-4'>
                <div className='flex items-center gap-2'>
                  <div>
                    <img src={location.icon} alt={location.text} />
                  </div>
                  <p>{location.text}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <div>
                    <img src={dollar.icon} alt={dollar.text} />
                  </div>
                  <p>{dollar.text}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <div>
                    <img src={time.icon} alt={time.text} />
                  </div>
                  <p>{time.text}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CardContact className='hidden md:block'>
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
        <div className='block md:hidden'>
          <Button_Primary className='py-3 w-full text-white'>
            Оставить заявку
          </Button_Primary>
        </div>
      </div>
    </section>
  )
}
