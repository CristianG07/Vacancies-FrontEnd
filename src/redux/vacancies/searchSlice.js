import { STATUS } from '../../utils/status'
import { wait } from '../../utils/wait'
import { createSlice } from '@reduxjs/toolkit'
import { card_vacancies } from '../../utils/data'

const initialState = {
  data: card_vacancies,
  searchTitle: '',
  searchLocation: '',
  priceRange: { min: 0, max: 5000 },
  status: STATUS.IDLE
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.data = action.payload
    },
    setSearchTitle: (state, action) => {
      state.searchTitle = action.payload
    },
    setSearchLocation: (state, action) => {
      state.searchLocation = action.payload
    },
    setPriceRange: (state, action) => { // Agrega una acción para actualizar el rango de precios
      state.priceRange = action.payload;
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setSearch, setSearchTitle, setSearchLocation, setPriceRange, setStatus } =
  searchSlice.actions
export default searchSlice.reducer

export const fetchVacanciesBySearch =
  () => async (dispatch, getState) => {
    dispatch(setStatus(STATUS.LOADING))

    try {
      const { searchTitle, searchLocation, priceRange } = getState().search
      console.log(searchTitle, searchLocation, priceRange )
      const filteredVacanciesMap = {}

      if (searchTitle && searchLocation) {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            vacancy.location.text.toLowerCase().includes(searchLocation.toLowerCase()) &&
            vacancy.dollar.min <= priceRange.min
          ) {
            filteredVacanciesMap[vacancy.id] = vacancy
          }
        })
      } else if (searchTitle) {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
            vacancy.dollar.min <= priceRange.min
          ) {
            filteredVacanciesMap[vacancy.id] = vacancy
          }
        })
      } else if (searchLocation) {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.location.text.toLowerCase().includes(searchLocation.toLowerCase()) &&
            vacancy.dollar.min <= priceRange.min
          ) {
            filteredVacanciesMap[vacancy.id] = vacancy
          }
        })
      } else {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.dollar.min <= priceRange.min
          ) {
            filteredVacanciesMap[vacancy.id] = vacancy
          }
        })
      }

      const filteredVacancies = Object.values(filteredVacanciesMap)

      if (filteredVacancies.length === 0) {
        dispatch(setSearch([]))
        dispatch(setStatus(STATUS.IDLE))
        return
      }

      dispatch(setSearch(filteredVacancies))
      wait(1000).then(() => dispatch(setStatus(STATUS.IDLE)))
    } catch (error) {
      wait(1000).then(() => dispatch(setStatus(STATUS.ERROR)))
    }
  }
