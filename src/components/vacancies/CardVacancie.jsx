import { card_vacancies } from '../../utils/data'
import { CardVacancies } from '../home/CardVacancies'
import { Button_Primary } from '../ui/Button_Primary'
import { Title } from '../ui/Title'

export const CardVacancie = () => {
  return (
    <section className='container_sections w-full pb-0'>
      <div className='text-center mb-12'>
        <Title className='text-2xl md:text-3xl'>Вакансии</Title>
      </div>
      <div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8'>
          {card_vacancies.map((vacancie, i) => (
            <CardVacancies key={i} {...vacancie} />
          ))}
        </div>
        <div className='w-fit mx-auto my-10 lg:mt-16'>
          <Button_Primary className='text-white px-14 py-3'>Больше</Button_Primary>
        </div>
      </div>
    </section>
  )
}
