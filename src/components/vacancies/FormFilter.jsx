import { useEffect, useState } from 'react'
import { CustomSelect } from '../ui/CustomSelect'
import { PriceRange } from './PriceRange'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchVacanciesBySearch,
  setSearchLocation,
  setSearchTitle
} from '../../redux/vacancies/searchSlice'
import { card_vacancies } from '../../utils/data'

export const FormFilter = () => {
  const dispatch = useDispatch()
  const countries = new Set(card_vacancies.map((vacancy) => vacancy.location.text))
  const vacancies = new Set(card_vacancies.map((vacancy) => vacancy.title))
  const { searchTitle, searchLocation } = useSelector((state) => state.search)
  const [selectedLocation, setSelectedLocation] = useState(searchLocation)
  const [selectedTitle, setSelectedTitle] = useState(searchTitle)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 })
  
  const options1 = ['всички страни', ...Array.from(countries)]; // Agrega la opción "todos los países" al principio
  const options2 = ['всички свободни позиции', ...Array.from(vacancies)]; // Agrega la opción "todas las profesiones" al principio

  
  useEffect(() => {
    dispatch(setSearchLocation(selectedLocation))
    dispatch(setSearchTitle(selectedTitle))
    dispatch(fetchVacanciesBySearch(priceRange))
  }, [dispatch, selectedLocation, selectedTitle, priceRange])

  const handleJobTitleChange = (value) => {
    setSelectedTitle(value === 'всички свободни позиции' ? '' : value); // Si se selecciona "todas las profesiones", establece el valor en blanco
  };

  const handleLocationChange = (value) => {
    setSelectedLocation(value === 'всички страни' ? '' : value); // Si se selecciona "todos los países", establece el valor en blanco
  };

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
          <div className='text-center mb-3 md:mb-1 select-none'>
            <p>Зарплата</p>
          </div>
          <PriceRange min={0} max={5000} onChange={handlePriceRangeChange} />
        </div>
      </div>
    </section>
  )
}
