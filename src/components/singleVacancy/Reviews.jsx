import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { review_img } from '../../utils/image'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { ContentReviews } from './ContentReviews'
import { Title } from '../ui/Title'

export const Reviews = () => {
  const reviews = [
    {
      img: review_img,
      name: 'Anna Jo',
      desc: 'Я благодарна менеджеру за профессиональную консультацию. Проблем с трудоустройством не было. Условия работы соответствовали действительности. Советую!',
      link_facebook: '/'
    },
    {
      img: review_img,
      name: 'Anna Jo',
      desc: 'Я благодарна менеджеру за профессиональную консультацию. Проблем с трудоустройством не было. Условия работы соответствовали действительности. Советую!',
      link_facebook: '/'
    }
  ]
  return (
    <section className='container_sections pt-0'>
      <div className='text-center mb-5 lg:mb-12'>
        <Title className='text-xl md:text-2xl'>Отзывы о работе</Title>
      </div>
      <div className='relative px-0 lg:px-32'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          pagination={{clickable: true}}
          loop={true}
          speed={1000}
          navigation={{
            nextEl: '.button-next-vacancies',
            prevEl: '.button-prev-vacancies'
          }}
          breakpoints={{
            960: {
              pagination: false
            }
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <ContentReviews {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='hidden absolute top-0 left-0 w-full h-full lg:flex justify-between items-center'>
          <button className='button-prev-vacancies ml-20'>
            <GrFormPrevious size={35} className='sliceBtn' />
          </button>
          <button className='button-next-vacancies mr-20'>
            <GrFormNext size={35} className='sliceBtn' />
          </button>
        </div>
      </div>
    </section>
  )
}
