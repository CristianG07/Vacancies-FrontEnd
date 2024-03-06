import { services_img } from '../../utils/image'
import { Button_Primary } from '../ui/Button_Primary'
import { Input } from '../ui/Input'
import { Title } from '../ui/Title'

export const ServicesContact = () => {
  return (
    <section className='container_sections pt-0'>
        <div className='text-center'>
          <Title >Связаться с нами</Title>
        </div>
      <form className='grid lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0'>
        <div className='w-full space-y-10 pt-10 md:pt-20'>
          <div className='space-y-5'>
            <div className='flex flex-col md:flex-row gap-6'>
              <Input type='text' placeholder='Имя' required />
              <Input type='text' placeholder='Телефон' required />
            </div>
            <div>
              <Input type='email' placeholder='Почта' required />
            </div>
          </div>
          <div className='w-fit mx-auto'>
            <Button_Primary className='text-white px-11 py-2.5'>Связаться</Button_Primary>
          </div>
        </div>
        <div className='hidden lg:block'>
          <div className='max-w-64 md:max-w-md'>
            <img src={services_img} alt='services_img' />
          </div>
        </div>
      </form>
    </section>
  )
}
