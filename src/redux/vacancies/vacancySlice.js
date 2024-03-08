import { createSlice } from '@reduxjs/toolkit'
// utils
import { STATUS } from '../../utils/status'
import { wait } from '../../utils/wait'
import { card_vacancies } from '../../utils/data'

const initialState = {
  data: [],
  status: STATUS.IDLE
}

export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {
    setVacancies: (state, { payload }) => {
      state.data = payload
    },
    setStatus: (state, { payload }) => {
      state.status = payload
    }
  }
})

export const { setVacancies, setStatus } = vacancySlice.actions
export default vacancySlice.reducer

export const fetchVacancies = () => {
  return async function fetchVacancies(dispatch) {
    dispatch(setStatus(STATUS.LOADING))
    try {
      dispatch(setVacancies(card_vacancies))
      wait(1000).then(() => dispatch(setStatus(STATUS.IDLE)))
    } catch (error) {
      wait(1000).then(() => dispatch(setStatus(STATUS.ERROR)))
    }
  }
}