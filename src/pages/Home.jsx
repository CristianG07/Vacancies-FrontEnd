// components
import { useEffect } from "react"
import { Award, Brands, Galery, Hero, Reviews, Selection, Steps, Vacancies } from "../components/home"


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Hero />
      <Vacancies />
      <Selection />
      <Galery />
      <Steps />
      <Brands />
      <Award />
      <Reviews />
    </>
  )
}
export default Home