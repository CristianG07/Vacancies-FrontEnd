import { configureStore } from '@reduxjs/toolkit'
// reducers
import vacancyReducer from './vacancies/vacancySlice'
import searchReducer from './vacancies/searchSlice'

export const store = configureStore({
  reducer: {
    vacancy: vacancyReducer,
    search: searchReducer,
  }
})
