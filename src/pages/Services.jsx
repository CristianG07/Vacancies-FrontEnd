import { useEffect } from "react"
import { CardServices } from "../components/services/CardServices"
import { ServicesContact } from "../components/services/ServicesContact"
import { WorkPlaces } from "../components/services/WorkPlaces"

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <CardServices />
      <WorkPlaces />
      <ServicesContact />
    </>
  )
}
export default Services