import { Routes, Route } from 'react-router-dom'
// componets
import Layout from './layouts/Layout'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Vacancies from './pages/Vacancies'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vacancies' element={<Vacancies />} />
      </Route>
    </Routes>
  )
}

export default App
