import React, { useState, useEffect } from 'react'
import { decoration_bg, decoration_bg2, logo } from '../../utils/image'
import CountUp from 'react-countup'

export const Employment = () => {
  const employment = [
    { number: 7, text: 'Лет работы' },
    { number: 6500, text: 'Довольных клиентов' },
    { number: 2400, text: 'Активных вакансий' },
    { number: 56, text: 'Доступных компаний' }
  ]

  const [shouldStartCount, setShouldStartCount] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('employmentSection')
      if (element) {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0
        if (isVisible) {
          setShouldStartCount(true)
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      id='employmentSection'
      className='relative'
    >
      <div className='container_sections pt-0'>
        <div className='flex items-center'>
          <div className='hidden lg:block h-px w-full bg-green_secondary' />
          <p className='text-center font-montserrat w-full lg:w-[137.5rem] font-medium'>
            Наши специалисты всегда готовы предоставить качественную помощь в
            подборе вакансий. Для вас доступнен большой выбор вакансий, и
            подробные консультации по всем вопросам.
          </p>
          <div className='hidden lg:block h-px w-full bg-green_secondary' />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-6 lg:gap-20 mt-12 lg:mt-24'>
          <div className='relative bg-green_secondary overflow-hidden h-[22.5rem] lg:h-[31.25rem] w-full max-w-[335px] md:max-w-[25rem] rounded-3xl mx-5 lg:mx-0 -z-20'>
            <div className='absolute left-0 top-0 -z-10'>
              <img src={decoration_bg} alt='decoration_bg' />
            </div>
            <div className='flex flex-col gap-40 justify-center items-center h-full'>
              <div className='w-40'>
                <img src={logo} alt='logo' />
              </div>
              <p className='max-w-[16.875rem] text-center text-white text-3xl font-semibold'>
                Компания по трудоустройству
              </p>
            </div>
          </div>
          <div className='grid w-full grid-cols-2 gap-10 lg:gap-20 lg:w-[50%] text-green_primary z-20'>
            {employment.map((info) => (
              <div key={info.text}>
                <div className='text-center'>
                  <div>
                    <span className='text-4xl lg:text-5xl font-bold font-montserrat '>
                      {shouldStartCount ? (
                        <CountUp end={info.number} duration={2} />
                      ) : (
                        info.number
                      )}
                    </span>
                    <p className='text-green_secondary text-lg font-medium'>
                      {info.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='hidden lg:block absolute -bottom-12 right-0 z-10'>
        <img src={decoration_bg2} alt='decoration_bg' />
      </div>
    </section>
  )
}
