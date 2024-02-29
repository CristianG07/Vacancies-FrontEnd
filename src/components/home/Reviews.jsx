// components
import { Title } from '../ui/Title'
import { CardReviews } from './CardReviews'
// icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { review01, review02, review03 } from '../../utils/image'
// swiper
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Reviews = () => {
  const reviews = [
    {
      title: 'Анастасия',
      subtitle: 'HR-manager, Google',
      desc: 'Благодаря  качественной помощи специалистов, я сейчас работаю в компании своей мечты.',
      img: review01,
      date: '10.02.2024',
      btntext: 'Просмотр вакансии'
    },
    {
      title: 'Валерий',
      subtitle: 'Строитель',
      desc: 'Благодаря  качественной помощи специалистов, я сейчас работаю в компании своей мечты.',
      img: review02,
      date: '10.02.2024',
      btntext: 'Просмотр вакансии'
    },
    {
      title: 'Ирина',
      subtitle: 'Парикмахер',
      desc: 'Благодаря  качественной помощи специалистов, я сейчас работаю в компании своей мечты.',
      img: review03,
      date: '10.02.2024',
      btntext: 'Просмотр вакансии'
    },
    {
      title: 'Анастасия',
      subtitle: 'HR-manager, Google',
      desc: 'Благодаря  качественной помощи специалистов, я сейчас работаю в компании своей мечты.',
      img: review01,
      date: '10.02.2024',
      btntext: 'Просмотр вакансии'
    },
    {
      title: 'Валерий',
      subtitle: 'Строитель',
      desc: 'Благодаря  качественной помощи специалистов, я сейчас работаю в компании своей мечты.',
      img: review02,
      date: '10.02.2024',
      btntext: 'Просмотр вакансии'
    },
    {
      title: 'Ирина',
      subtitle: 'Парикмахер',
      desc: 'Благодаря  качественной помощи специалистов, я сейчас работаю в компании своей мечты.',
      img: review03,
      date: '10.02.2024',
      btntext: 'Просмотр вакансии'
    }
  ]
  return (
    <section className='pb-16 lg:pt-16 w-full max-w-[83rem] mx-auto'>
      <div className='text-center my-12'>
        <Title className='text-2xl md:text-3xl'>Популярные вакансии</Title>
      </div>
      <div className='relative px-0 lg:px-12'>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          pagination={true}
          spaceBetween={25}
          loop={true}
          navigation={{
            nextEl: '.button-next-review',
            prevEl: '.button-prev-review'
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            960: {
              slidesPerView: 3,
              pagination: false
            }
          }}
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className='mb-11 px-5 md:px-3 lg:px-0'>
              <CardReviews {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='hidden absolute top-0 left-0 w-full h-full lg:flex justify-between items-center'>
          <button className='button-prev-review ml-0.5'>
            <GrFormPrevious size={35} className='sliceBtn' />
          </button>
          <button className='button-next-review mr-0.5'>
            <GrFormNext size={35} className='sliceBtn' />
          </button>
        </div>
      </div>
    </section>
  )
}
