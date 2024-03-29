import { Routes, Route } from 'react-router-dom'
// componets
import Layout from './layouts/Layout'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Vacancies from './pages/Vacancies'
import Services from './pages/Services'
import Contact from './pages/Contact'
import SingleVacancy from './pages/SingleVacancy'

function App() {
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/vacancy/:vacancyId' element={<SingleVacancy />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
