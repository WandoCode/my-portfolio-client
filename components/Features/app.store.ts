import { configureStore } from '@reduxjs/toolkit'
import formReducer from './Form/form.reducers'
import languageReducer from './Language/language.reducers'

const store = configureStore({
  reducer: {
    form: formReducer,
    language: languageReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
