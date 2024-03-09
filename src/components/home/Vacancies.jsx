import { useSelector } from 'react-redux'
// components
import { Title } from '../ui/Title'
import { CardVacancies } from './CardVacancies'
// icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
// swiper
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Vacancies = () => {
  const { data: vacancies } = useSelector((state) => state.vacancy)

  return (
    <section className='pb-16 lg:pt-16 w-full max-w-[83rem] mx-auto'>
      <div className='text-center mb-12'>
        <Title className='text-2xl md:text-3xl'>Популярные вакансии</Title>
      </div>
      <div className='relative px-0 lg:px-12'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={2}
          pagination={true}
          loop={true}
          navigation={{
            nextEl: '.button-next-vacancies',
            prevEl: '.button-prev-vacancies'
          }}
          breakpoints={{
            768: {
              slidesPerView: 3
            },
            960: {
              slidesPerView: 4,
              pagination: false
            }
          }}
        >
          {vacancies.map((vacancy) => (
            <SwiperSlide key={vacancy.id} className='mb-11'>
              <CardVacancies {...vacancy} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='hidden absolute top-0 left-0 w-full h-full lg:flex justify-between items-center'>
          <button className='button-prev-vacancies ml-2'>
            <GrFormPrevious size={35} className='sliceBtn' />
          </button>
          <button className='button-next-vacancies mr-2'>
            <GrFormNext size={35} className='sliceBtn' />
          </button>
        </div>
      </div>
    </section>
  )
}
