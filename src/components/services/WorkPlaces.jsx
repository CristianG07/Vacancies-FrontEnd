import {
  services_img01,
  services_img02,
  services_img03,
  services_img_mobile01,
  services_img_mobile02,
  services_img_mobile03
} from '../../utils/image'
import { Button_Primary } from '../ui/Button_Primary'

export const WorkPlaces = () => {
  const services = [
    {
      title: 'Работа в Польше',
      price: '400$',
      desc: 'Наши специалисты всегда готовы предоставить качественную помощь в подборе вакансий. Для вас доступнен большой выбор вакансий, и подробные консультации по всем вопросам.',
      textBtn: 'Заказать',
      img: services_img01,
      img_mobile: services_img_mobile01
    },
    {
      title: 'Работа в Германии',
      price: '400$',
      desc: 'Наши специалисты всегда готовы предоставить качественную помощь в подборе вакансий. Для вас доступнен большой выбор вакансий, и подробные консультации по всем вопросам.',
      textBtn: 'Заказать',
      img: services_img02,
      img_mobile: services_img_mobile02
    },
    {
      title: 'Работа в Нидерландах',
      price: '400$',
      desc: 'Наши специалисты всегда готовы предоставить качественную помощь в подборе вакансий. Для вас доступнен большой выбор вакансий, и подробные консультации по всем вопросам.',
      textBtn: 'Заказать',
      img: services_img03,
      img_mobile: services_img_mobile03
    }
  ]
  return (
    <section className='container_sections'>
      <div className='responsive_cols lg:grid-cols-none'>
        {services.map((service, i) => (
          <div key={service.title} className='flex justify-center'>
            <div className='w-[98%] md:max-w-sm lg:max-w-full flex flex-col lg:flex-row items-center text-dark_blue lg:gap-7'>
              <div className='w-full lg:w-[50%]'>
                <div className='hidden lg:block'>
                  <img src={service.img} alt={service.title} />
                </div>
                <div className='block lg:hidden'>
                  <img src={service.img_mobile} alt={service.title} />
                </div>
              </div>
              <div
                className={`lg:w-[50%] bg-card lg:bg-white px-5 rounded-b-[2.5rem] lg:rounded-[2.5rem] lg:flex lg:flex-col justify-between pb-5 pt-3 lg:pt-8 h-full lg:border border-green_secondary ${
                  i === 1 ? 'lg:-order-1' : 'order-none'
                }`}
              >
                <div className='font-semibold'>
                  <h5 className='text-xl'>{service.title}</h5>
                  <span className='text-lg text-green_secondary font-montserrat'>
                    {service.price}
                  </span>
                </div>
                <p className='font-montserrat max-w-full lg:max-w-[90%] mb-6 mt-3'>
                  {service.desc}
                </p>
                <div className='w-fit mx-auto'>
                  <Button_Primary className='font-bold px-7 lg:px-10 text-white'>
                    {service.textBtn}
                  </Button_Primary>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
