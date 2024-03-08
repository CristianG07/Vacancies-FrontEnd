import { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
// components
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Loader } from '../components/loader/Loader'
// data
import { STATUS } from '../utils/status'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchVacancies } from '../redux/vacancies/vacancySlice'

const Layout = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { status: productStatus } = useSelector((state) => state.vacancy)

  useEffect(() => {
    dispatch(fetchVacancies())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, dispatch])

  const isLoading = productStatus === STATUS.LOADING
  // const isError = productStatus === STATUS.ERROR || categoryStatus === STATUS.ERROR

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  )
}
export default Layout
