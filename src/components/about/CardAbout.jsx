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
  const about = [
    {
      title: 'Работа в Европе',
      desc: 'Наши специалисты всегда готовы предоставить качественную помощь вподборе вакансий. Для вас доступнен большой выбор вакансий, иподробные консультации по всем вопросам.',
      textBtn: 'Подробнее',
      iconBtn: arrow_right,
      img: img_card_about01,
      img_mobile: img_card_about_mobile01
    },
    {
      title: 'Стань частью нашей программы',
      desc: 'Наши специалисты всегда готовы предоставить качественную помощь вподборе вакансий. Для вас доступнен большой выбор вакансий, иподробные консультации по всем вопросам.',
      textBtn: 'Подробнее',
      iconBtn: arrow_right,
      img: img_card_about02,
      img_mobile: img_card_about_mobile02
    },
    {
      title: 'Процедуры трудоустройства',
      desc: 'Наши специалисты всегда готовы предоставить качественную помощь вподборе вакансий. Для вас доступнен большой выбор вакансий, иподробные консультации по всем вопросам.',
      textBtn: 'Подробнее',
      iconBtn: arrow_right,
      img: img_card_about03,
      img_mobile: img_card_about_mobile03
    }
  ]

  return (
    <section className='mb-10'>
      <div className='responsive_cols lg:grid-cols-none lg:gap-y-0 w-[90%] lg:w-full mx-auto'>
        {about.map((info, i) => (
          <div key={info.title} className={`flex ${i === 1 ? 'justify-start' : 'justify-end'}`}>
            <div className='w-[98%] md:max-w-sm lg:max-w-full flex flex-col lg:flex-row items-center mb-10 text-dark_blue'>
              <div className={`w-full lg:w-[50%] lg:bg-green_footer ${i === 1 ? 'lg:rounded-e-full' : 'lg:rounded-s-full'}`}>
                <div className='hidden lg:block'>
                  <img src={info.img} alt={info.title} />
                </div>
                <div className='block lg:hidden'>
                  <img src={info.img_mobile} alt={info.title} />
                </div>
              </div>
              <div
                className={`lg:w-[50%] bg-green_footer px-5 rounded-b-[2.5rem] lg:rounded-none md:flex md:flex-col justify-between pb-8 pt-3 lg:pt-8 h-full ${
                  i === 1 ? 'lg:-order-1' : 'order-none'
                }`}
              >
                <div className='font-semibold'>
                  <h5 className='text-xl'>{info.title}</h5>
                </div>
                <p className='font-montserrat max-w-full lg:max-w-[90%] mb-4 mt-4 lg:my-0'>
                  {info.desc}
                </p>
                <button className='font-bold w-fit flex items-center gap-2 group'>
                  {info.textBtn}
                  <div className='group-hover:translate-x-2 duration-500'>
                    <img src={arrow_right} alt='arrow_right' />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
