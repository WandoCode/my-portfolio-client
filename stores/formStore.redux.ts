import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../components/Form/form.reducers'

const formStore = configureStore({
  reducer: {
    form: formReducer,
  },
})

export default formStore

export type FormRootState = ReturnType<typeof formStore.getState>
export type AppDispatch = typeof formStore.dispatch
