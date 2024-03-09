import { STATUS } from '../../utils/status'
import { wait } from '../../utils/wait'
import { createSlice } from '@reduxjs/toolkit'
import { card_vacancies } from '../../utils/data'

const initialState = {
  data: card_vacancies,
  searchTitle: '',
  searchLocation: '',
  
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
    clearSearchData: (state) => {
      state.searchTitle = ''
      state.searchLocation = ''
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setSearch, setSearchTitle, setSearchLocation, setStatus, clearSearchData } =
  searchSlice.actions
export default searchSlice.reducer

export const fetchVacanciesBySearch =
  (priceRange) => async (dispatch, getState) => {
    dispatch(setStatus(STATUS.LOADING))

    try {
      const { searchTitle, searchLocation } = getState().search
      console.log(searchTitle, searchLocation)
      const filteredVacanciesMap = {}

      if (searchTitle && searchLocation) {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.title.includes(searchTitle) &&
            vacancy.location.text.includes(searchLocation) &&
            vacancy.dollar.min <= priceRange.min &&
            vacancy.dollar.max >= priceRange.max
          ) {
            filteredVacanciesMap[vacancy.id] = vacancy
          }
        })
      } else if (searchTitle) {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.title.includes(searchTitle) &&
            vacancy.dollar.min <= priceRange.min &&
            vacancy.dollar.max >= priceRange.max
          ) {
            filteredVacanciesMap[vacancy.id] = vacancy
          }
        })
      } else if (searchLocation) {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.location.text.includes(searchLocation) &&
            vacancy.dollar.min <= priceRange.min &&
            vacancy.dollar.max >= priceRange.max
          ) {
            filteredVacanciesMap[vacancy.id] = vacancy
          }
        })
      } else {
        card_vacancies.forEach((vacancy) => {
          if (
            vacancy.dollar.min <= priceRange.min &&
            vacancy.dollar.max >= priceRange.max
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
      wait(1500).then(() => dispatch(clearSearchData()))
    } catch (error) {
      wait(1000).then(() => dispatch(setStatus(STATUS.ERROR)))
    }
  }
