import { selection_img } from '../../utils/image'
import { Button_Primary } from '../ui/Button_Primary'
import { Title } from '../ui/Title'

export const Selection = () => {
  return (
    <section className='container_sections pt-0'>
      <div className='grid lg:grid-cols-2 items-center justify-items-center gap-5 lg:gap-0'>
        <div className='order-1 lg:order-none space-y-11'>
          <div className='space-y-7'>
            <div className='text-center lg:text-left'>
              <Title>Подбор вакансий</Title>
            </div>
            <p className='font-montserrat max-w-xl'>
              Наши специалисты всегда готовы предоставить качественную помощь в
              подборе вакансий. Для вас доступнен большой выбор вакансий, и
              подробные консультации по всем вопросам.
            </p>
          </div>
          <div className='flex justify-between lg:justify-start gap-6'>
            <Button_Primary className='px-8 text-white'>Подробнее</Button_Primary>
            <Button_Primary className='bg-transparent hover:bg-green_primary hover:text-white border-2 border-green_primary text-green_primary px-4 md:px-5'>Связаться с нами</Button_Primary>
          </div>
        </div>
        <div>
          <div className='max-w-64 md:max-w-md'>
            <img src={selection_img} alt='selection_img' />
          </div>
        </div>
      </div>
    </section>
  )
}
