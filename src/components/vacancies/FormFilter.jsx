import { useEffect, useState } from 'react'
import { CustomSelect } from '../ui/CustomSelect'
import { PriceRange } from './PriceRange'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchVacanciesBySearch,
  setSearchLocation,
  setPriceRange,
  setSearchTitle
} from '../../redux/vacancies/searchSlice'
import { card_vacancies } from '../../utils/data'

export const FormFilter = () => {
  const dispatch = useDispatch()
  const countries = new Set(card_vacancies.map((vacancy) => vacancy.location.text))
  const vacancies = new Set(card_vacancies.map((vacancy) => vacancy.title))
  const { searchTitle, searchLocation, priceRange } = useSelector((state) => state.search)
  const [selectedLocation, setSelectedLocation] = useState(searchLocation)
  const [selectedTitle, setSelectedTitle] = useState(searchTitle)
  
  const options1 = ['всички страни', ...Array.from(countries)];
  const options2 = ['всички свободни позиции', ...Array.from(vacancies)]
  const [localPriceRange, setLocalPriceRange] = useState(priceRange)

  useEffect(() => {
    dispatch(setSearchLocation(selectedLocation))
    dispatch(setSearchTitle(selectedTitle))
    dispatch(fetchVacanciesBySearch(localPriceRange))
  }, [dispatch, selectedLocation, selectedTitle, localPriceRange])

  const handleJobTitleChange = (value) => {
    setSelectedTitle(value === 'всички свободни позиции' ? '' : value)
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value === 'всички страни' ? '' : value)
  };

  const handlePriceRangeChange = ({ min, max }) => {
    setLocalPriceRange({ min, max })
    dispatch(setPriceRange({ min, max }))
  };

  return (
    <section className='container_sections lg:w-[75%] pb-0 pt-32 font-montserrat'>
      <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-5'>
        <div className='md:col-span-2 w-full'>
          <div className='grid grid-cols-2 items-center justify-center space-x-5'>
            <CustomSelect
              onSelectChange={handleLocationChange}
              options={options1}
              defaulValue={`${selectedLocation === '' ? 'Страна': searchLocation}`}
              />
            <CustomSelect
              onSelectChange={handleJobTitleChange}
              options={options2}
              defaulValue={`${selectedTitle === '' ? 'Професии': selectedTitle}`}
            />
          </div>
        </div>
        <div className='md:h-14'>
          <div className='text-center mb-3 md:mb-1 select-none'>
            <p>Зарплата</p>
          </div>
          <PriceRange min={0} max={5000} onChange={handlePriceRangeChange} />
        </div>
      </div>
    </section>
  )
}
