import { about_img01, about_img02, about_img03, logo } from '../../utils/image'

export const GaleryAbout = () => {
  const galery_about = [
    { text: 'Простота процедуры трудоустройства', img: about_img01 },
    { text: 'Высокие заработные платы', img: about_img02 },
    { text: 'Официальное трудоустройство', img: about_img03 }
  ]
  return (
    <section className='container_sections'>
      <div className=' max-w-[20.9375rem] md:max-w-[31.25rem] mx-auto text-center font-montserrat font-medium'>
        <h4 className='mt-6 mb-10 lg:mt-10 ld:mb-20 text-lg md:text-wrap'>
          <span className='w-11 inline-block'>
            <img src={logo} alt='logo' />
          </span>{' '}
          - это одна из лучших компаний по помощи в трудоустройстве за границей
        </h4>
      </div>
      <div className='responsive_cols text-white font-semibold'>
        {galery_about.map((galery) => (
          <div key={galery.text} className='galery'>
            <img className='galery_img' src={galery.img} alt={galery.text} loading='lazy' />
            <div className='galery_content pr-10 md:pr-20 justify-end'>
              <p className='h-[3.125rem] md:h-auto lg:h-[3.125rem]'>{galery.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
