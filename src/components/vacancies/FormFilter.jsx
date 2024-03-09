import { useEffect, useState } from 'react'
import { CustomSelect } from '../ui/CustomSelect'
import { PriceRange } from './PriceRange'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchVacanciesBySearch,
  setSearchLocation,
  setSearchTitle
} from '../../redux/vacancies/searchSlice'

export const FormFilter = () => {
  const options1 = ['Польша', 'Германия', 'Нидерланды']
  const options2 = ['Повар', 'Строитель', 'Водитель']
  const dispatch = useDispatch()
  const { searchTitle, searchLocation } = useSelector((state) => state.search)
  const [selectedLocation, setSelectedLocation] = useState(searchLocation)
  const [selectedTitle, setSelectedTitle] = useState(searchTitle)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 })

  useEffect(() => {
    dispatch(setSearchLocation(selectedLocation))
    dispatch(setSearchTitle(selectedTitle))
    dispatch(fetchVacanciesBySearch(priceRange))
  }, [dispatch, selectedLocation, selectedTitle, priceRange])

  const handleJobTitleChange = (value) => {
    setSelectedTitle(value)
  }

  const handleLocationChange = (value) => {
    setSelectedLocation(value)
  }

  const handlePriceRangeChange = ({ min, max }) => {
    setPriceRange({ min, max })
  }

  return (
    <section className='container_sections lg:w-[70%] pb-0 pt-32 font-montserrat'>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5'>
        <div className='md:col-span-2 w-full'>
          <div className='grid grid-cols-2 justify-center space-x-5'>
            <CustomSelect
              onSelectChange={handleLocationChange}
              options={options1}
              defaulValue={'Страна'}
            />
            <CustomSelect
              onSelectChange={handleJobTitleChange}
              options={options2}
              defaulValue={'Професии'}
            />
          </div>
        </div>
        <div className='md:h-14'>
          <div className='text-center mb-3 md:mb-2 lg:mb-1 select-none'>
            <p>Зарплата</p>
          </div>
          <PriceRange min={0} max={5000} onChange={handlePriceRangeChange} />
        </div>
      </div>
    </section>
  )
}
