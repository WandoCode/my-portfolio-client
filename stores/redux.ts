import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../components/Form/form.reducers'

const store = configureStore({
  reducer: {
    form: formReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
