import { img01, img02, img03, img04, img05 } from '../../utils/image'

export const Galery = () => {
  return (
    <section className='container_sections pt-0 text-white font-semibold'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white font-semibold'>
        <div className='bg-green_secondary h-44 lg:h-72 flex justify-center items-center text-2xl rounded-[2.5rem]'>
          <p>Наши преимущества</p>
        </div>
        <div className='galery'>
          <img className='galery_img' src={img01} alt='' />
          <div className='galery_content'>
            <span className='text-2xl font-montserrat'>01</span>
            <p>Лучшие специалисты</p>
          </div>
        </div>
        <div className='galery'>
          <img className='galery_img' src={img02} alt='' />
          <div className='galery_content'>
            <span className='text-2xl font-montserrat'>02</span>
            <p>Известные компании</p>
          </div>
        </div>
        <div className='galery'>
          <img className='galery_img' src={img03} alt='' />
          <div className='galery_content'>
            <span className='text-2xl font-montserrat'>03</span>
            <p>Проверенные работодатели</p>
          </div>
        </div>
        <div className='galery'>
          <img className='galery_img' src={img04} alt='' />
          <div className='galery_content'>
            <span className='text-2xl font-montserrat'>04</span>
            <p>Большой выбор вакансий</p>
          </div>
        </div>
        <div className='galery'>
          <img className='absolute -z-10 aspect-[157/144]' src={img05} alt='' />
          <div className='galery_content'>
            <span className='text-2xl font-montserrat'>05</span>
            <p>Работа по всему миру</p>
          </div>
        </div>
      </div>
    </section>
  )
}
