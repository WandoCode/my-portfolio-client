import { createReducer } from '@reduxjs/toolkit'
import { changeCurrentSection } from './nav.actions'

const initSection: Record<string, string | undefined> = {
  currentSection: undefined,
}

const navReducer = createReducer(initSection, (builder) => {
  builder.addCase(changeCurrentSection, (state, action) => {
    state.currentSection = action.payload.newSection
  })
})

export default navReducer
