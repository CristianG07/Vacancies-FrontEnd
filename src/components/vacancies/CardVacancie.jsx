import { useState } from 'react'
import { CardVacancies } from '../home/CardVacancies'
import { Button_Primary } from '../ui/Button_Primary'
import { Title } from '../ui/Title'
import { useSelector } from 'react-redux'

export const CardVacancie = () => {
  const [numToShow, setNumToShow] = useState(8)
  const { data: vacancies } = useSelector((state) => state.vacancy)

  const handleShowMoreAll = () => {
    setNumToShow(numToShow + 4)
  }

  return (
    <section className='container_sections w-full pb-0'>
      <div className='text-center mb-12'>
        <Title className='text-2xl md:text-3xl'>Вакансии</Title>
      </div>
      <div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8'>
          {vacancies.slice(0, numToShow).map((vacancy) => (
            <CardVacancies key={vacancy.id} {...vacancy} />
          ))}
        </div>
        <div className='w-fit mx-auto my-10 lg:mt-16'>
          <Button_Primary onClick={handleShowMoreAll} className='text-white px-14 py-3'>Больше</Button_Primary>
        </div>
      </div>
    </section>
  )
}
