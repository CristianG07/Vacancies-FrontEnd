import { award_image } from "../../utils/image"
import { Title } from "../ui/Title"
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'

export const Award = () => {
  const awards = [
    {img: award_image},
    {img: award_image},
    {img: award_image},
    {img: award_image},
  ]
  return (
    <section className="bg-green_footer space-y-10 pb-10 pt-7">
      <div className='text-center'>
        <Title>Наши награды</Title>
      </div>
      <Swiper
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={20}
        centerInsufficientSlides={true}
        loop={true}
      >
        {awards.map((award, i) => (
          <SwiperSlide key={i}>
            <div>
              <img className="aspect-[401/224]" src={award.img} alt="awards_images" loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}