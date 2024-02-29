import { Title } from '../ui/Title'
import { flows, monobank, varus, visa } from '../../utils/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

export const Brands = () => {
  const brads = [
    { img: monobank },
    { img: flows },
    { img: varus },
    { img: visa },
    { img: monobank },
    { img: varus },
    { img: visa },
    { img: flows },
  ]

  return (
    <section className='mb-16'>
      <div className='text-center mb-16'>
        <Title>Наши партнеры</Title>
      </div>
      <Swiper
        loop={true}
        centeredSlides={true}
        centerInsufficientSlides={true}
        slidesPerView={2}
        spaceBetween={25}
        breakpoints={{
          480: {
            slidesPerView: 4,
          },
          960: {
            slidesPerView: 4,
          },
        }}
      >
        {brads.map((brand, i) => (
          <SwiperSlide key={i}>
            <div className='brands'>
              <div>
                <img src={brand.img} alt='brands_images' loading="lazy" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
