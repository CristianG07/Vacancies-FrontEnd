import { STATUS } from '../../utils/status'
import { wait } from '../../utils/wait'
import { createSlice } from '@reduxjs/toolkit'
import { card_vacancies } from '../../utils/data'

const initialState = {
  data: card_vacancies,
  status: STATUS.IDLE
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.data = action.payload
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setSearch, setStatus } = searchSlice.actions
export default searchSlice.reducer

export const fetchVacanciesBySearch =
  (searchTitle, searchLocation) => async (dispatch) => {
    dispatch(setStatus(STATUS.LOADING))

    try {
      let filteredVacancies = card_vacancies

      if (searchTitle && searchLocation) {
        let title = card_vacancies.filter((vacancy) =>
          vacancy.title.includes(searchTitle)
        )
        let location = card_vacancies.filter((vacancy) =>
          vacancy.location.text.includes(searchLocation)
        )

        filteredVacancies = [...title, ...location]
      } else if (searchTitle) {
        filteredVacancies = card_vacancies.filter((vacancy) =>
          vacancy.title.includes(searchTitle)
        )
      } else if (searchLocation) {
        filteredVacancies = card_vacancies.filter((vacancy) =>
          vacancy.location.text.includes(searchLocation)
        )
      }

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
