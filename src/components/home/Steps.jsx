import { Title } from '../ui/Title'
import { StepsMobile } from './StepsMobile'

export const Steps = () => {
  return (
    <section className='container_sections pt-0'>
      <div className='text-center mb-16'>
        <Title>Стадии подбора вакансий</Title>
      </div>
      <div className='space-y-4 hidden lg:block'>
        <div className="relative w-[90%] mx-auto flex items-center py-3 after:content-[''] after:absolute after:-z-10 after:w-full after:bg-green_secondary after:h-[2px]">
          <div className='flex justify-between w-full'>
            <div className=''>
              <p className='steps steps_start'>1</p>
            </div>
            <div className=''>
              <p className='steps steps_middle'>2</p>
            </div>
            <div className=''>
              <p className='steps steps_middle'>3</p>
            </div>
            <div className=''>
              <p className='steps steps_middle'>4</p>
            </div>
            <div className=''>
              <p className='steps steps_end'>5</p>
            </div>
          </div>
        </div>
        <div className='w-[98%] mx-auto flex justify-between text-center font-medium font-montserrat text-balance'>
          <div className='max-w-36'>
            <p className=''>Поиск вакансий за вашими критериями</p>
          </div>
          <div className='max-w-36'>
            <p className=''>Присылаем вам варианты</p>
          </div>
          <div className='max-w-36'>
            <p className=''>Выбор подходящей вакансии</p>
          </div>
          <div className='max-w-36'>
            <p className=''>Связь с работодателем</p>
          </div>
          <div className='max-w-36'>
            <p className=''>Заключение договора</p>
          </div>
        </div>
      </div>
      <StepsMobile />
    </section>
  )
}
