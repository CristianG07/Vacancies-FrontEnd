import { useEffect } from 'react'
import { ContentCard } from '../components/singleVacancy/ContentCard'
import { Description } from '../components/singleVacancy/Description'
import { Reviews } from '../components/singleVacancy/Reviews'
import { useParams } from 'react-router-dom'

const SingleVacancy = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ContentCard />
      <Description />
      <Reviews />
    </>
  )
}
export default SingleVacancy
