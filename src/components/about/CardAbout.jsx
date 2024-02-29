import {
  arrow_right,
  img_card_about01,
  img_card_about02,
  img_card_about03,
  img_card_about_mobile01,
  img_card_about_mobile02,
  img_card_about_mobile03
} from '../../utils/image'

export const CardAbout = () => {
  return (
    <section className='mb-10'>
      <div className='flex justify-center lg:justify-end'>
        <div className='w-[95%] max-w-md lg:max-w-7xl mx-5 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 items-center mb-10 text-dark_blue '>
          <div className='hidden lg:block bg-green_footer rounded-s-full'>
            <img src={img_card_about01} alt='' />
          </div>
          <div className='block lg:hidden '>
            <img src={img_card_about_mobile01} alt='' />
          </div>
          <div className='px-5 md:px-8 pb-7 md:pb-8 pt-2 rounded-b-[2.5rem] lg:rounded-b-none lg:flex lg:flex-col justify-center h-full bg-green_footer'>
            <h5 className='font-semibold text-lg'>Работа в Европе</h5>
            <p className='font-montserrat max-w-full lg:max-w-[90%] mt-7 mb-10'>
              Наши специалисты всегда готовы предоставить качественную помощь в
              подборе вакансий. Для вас доступнен большой выбор вакансий, и
              подробные консультации по всем вопросам.
            </p>
            <button className='font-bold w-fit flex items-center gap-2 group'>
              Подробнее
              <div className='group-hover:translate-x-2 duration-500'>
                <img src={arrow_right} alt='arrow_right' />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center lg:justify-start'>
        <div className='w-[95%] max-w-md lg:max-w-7xl mx-5 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 items-center mb-10 text-dark_blue '>
          <div className='hidden lg:block bg-green_footer rounded-e-full'>
            <img src={img_card_about02} alt='' />
          </div>
          <div className='block lg:hidden '>
            <img src={img_card_about_mobile02} alt='' />
          </div>
          <div className='px-5 md:px-8 pb-7 md:pb-8 pt-2 rounded-b-[2.5rem] lg:rounded-b-none lg:flex lg:flex-col justify-center h-full bg-green_footer order-1 lg:-order-1'>
            <h5 className='font-semibold text-lg'>Работа в Европе</h5>
            <p className='font-montserrat max-w-full lg:max-w-[90%] mt-7 mb-10'>
              Наши специалисты всегда готовы предоставить качественную помощь в
              подборе вакансий. Для вас доступнен большой выбор вакансий, и
              подробные консультации по всем вопросам.
            </p>
            <button className='font-bold w-fit flex items-center gap-2 group'>
              Подробнее
              <div className='group-hover:translate-x-2 duration-500'>
                <img src={arrow_right} alt='arrow_right' />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center lg:justify-end'>
        <div className='w-[95%] max-w-md lg:max-w-7xl mx-5 lg:mx-0 grid grid-cols-1 lg:grid-cols-2 items-center mb-10 text-dark_blue '>
          <div className='hidden lg:block bg-green_footer rounded-s-full'>
            <img src={img_card_about03} alt='' />
          </div>
          <div className='block lg:hidden '>
            <img src={img_card_about_mobile03} alt='' />
          </div>
          <div className='px-5 md:px-8 pb-7 md:pb-8 pt-2 rounded-b-[2.5rem] lg:rounded-b-none lg:flex lg:flex-col justify-center h-full bg-green_footer'>
            <h5 className='font-semibold text-lg'>Работа в Европе</h5>
            <p className='font-montserrat max-w-full lg:max-w-[90%] mt-7 mb-10'>
              Наши специалисты всегда готовы предоставить качественную помощь в
              подборе вакансий. Для вас доступнен большой выбор вакансий, и
              подробные консультации по всем вопросам.
            </p>
            <button className='font-bold w-fit flex items-center gap-2 group'>
              Подробнее
              <div className='group-hover:translate-x-2 duration-500'>
                <img src={arrow_right} alt='arrow_right' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
