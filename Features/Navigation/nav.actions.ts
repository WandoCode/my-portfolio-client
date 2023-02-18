import { createAction } from '@reduxjs/toolkit'

export const changeCurrentSection = createAction(
  'nav/changeCurrentSection',
  (newSection: string | undefined) => ({ payload: { newSection } })
)
