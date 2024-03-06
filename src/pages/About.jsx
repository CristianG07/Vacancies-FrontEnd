import { useEffect } from "react"
import { CardAbout } from "../components/about/CardAbout"
import { Employment } from "../components/about/Employment"
import { GaleryAbout } from "../components/about/GaleryAbout"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <GaleryAbout />
      <Employment />
      <CardAbout />
    </>
  )
}
export default About