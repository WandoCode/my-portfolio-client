import { configureStore } from '@reduxjs/toolkit'
import formReducer from './Form/form.reducers'
import languageReducer from './Language/language.reducers'
import navReducer from './Navigation/nav.reducers'

const store = configureStore({
  reducer: {
    form: formReducer,
    language: languageReducer,
    nav: navReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
