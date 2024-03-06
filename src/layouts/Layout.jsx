import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// components
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Loader } from '../components/loader/Loader'

const Layout = () => {
  // const location = useLocation()
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)

  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [location.pathname])

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
        <Footer />
      </Suspense>
    </>
  )
}
export default Layout
