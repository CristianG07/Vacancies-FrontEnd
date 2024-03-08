import { useEffect } from 'react'
import { ContentCard } from '../components/singleVacancy/ContentCard'
import { Description } from '../components/singleVacancy/Description'
import { Reviews } from '../components/singleVacancy/Reviews'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SingleVacancy = () => {
  const { vacancyId } = useParams()
  const { data: vacancies } = useSelector((state) => state.vacancy)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section>
      {vacancies.filter((vancancy) => vancancy.id === vacancyId)
      .map((vancancy) => (
        <ContentCard key={vancancy.id} {...vancancy} />
      ))}
      <Description />
      <Reviews />
    </section>
  )
}
export default SingleVacancy
