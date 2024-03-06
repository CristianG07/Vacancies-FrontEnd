import { useEffect } from "react"
import { Reviews } from "../components/home"
import { CardVacancie } from "../components/vacancies/CardVacancie"
import { FormFilter } from "../components/vacancies/FormFilter"

const Vacancies = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <FormFilter />
      <CardVacancie />
      <Reviews />
    </>
  )
}
export default Vacancies