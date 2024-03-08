import { useState } from 'react'
import { Title } from '../ui/Title'
// icons
import { IoSearch } from 'react-icons/io5'
import { GrLocation } from 'react-icons/gr'
import { Button_Primary } from '../ui/Button_Primary'
// redux
import { useDispatch } from 'react-redux'
import { fetchVacanciesBySearch } from '../../redux/vacancies/searchSlice'

export const Hero = () => {
  const dispatch = useDispatch()
  const [searchTitle, setSearchTitle] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  
  const handleJobTitleChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(fetchVacanciesBySearch(searchTitle, searchLocation))
    setSearchTitle('')
    setSearchLocation('')
  };

  return (
    <section className='bg-transparent bg-white lg:bg_hero bg-cover bg-no-repeat bg-center h-[35vh] lg:h-[43vh] font-montserrat'>
      <div className='flex justify-center items-center h-full'>
        <div className='w-[90%] lg:w-[60%]'>
          <div className='py-8 hidden lg:block text-center'>
            <Title>Поиск вакансий</Title>
          </div>
          <form onSubmit={handleSearch}>
            <div className='relative grid grid-cols-1 md:grid-cols-2 bg-blue-300 rounded-full max-w-4xl mx-auto mt-10 lg:mt-0'>
              <div className='text-dark_blue'>
                <div className='absolute h-full left-3.5 flex items-center pointer-events-none'>
                  <IoSearch size={20} />
                </div>
                <input
                  type='text'
                  name='title'
                  placeholder='Должность'
                  value={searchTitle}
                  onChange={handleJobTitleChange}
                  className='block w-full border border-green_secondary py-2 rounded-full bg-ligth_gray pl-12 pr-40 md:pr-24 focus:outline-none placeholder:text-dark_blue font-montserrat'
                />
              </div>
              <div className='hidden md:block relative -left-20'>
                <div className='absolute h-full left-3.5 flex items-center pointer-events-none'>
                  <GrLocation size={20} />
                </div>
                <input
                  type='text'
                  name='location'
                  placeholder='Страна'
                  value={searchLocation}
                  onChange={handleLocationChange}
                  className='block w-full border border-green_secondary py-2 rounded-full bg-ligth_gray pl-11 md:pr-[7.5rem] focus:outline-none placeholder:text-dark_blue font-montserrat'
                />
              </div>
              <div className='absolute h-full right-0 flex items-center'>
                <Button_Primary type='submit' className='h-full px-11 md:px-16 text-white rounded-full'>
                  Поиск
                </Button_Primary>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
