import { configureStore } from '@reduxjs/toolkit'
import dropDownOptionSlice from './dropDownOptionSlice'
import itemInfoSlice from './itemInfoSlice'

export const store = configureStore({
  reducer: {
    dropDownOptions : dropDownOptionSlice,
    itemInfos : itemInfoSlice,
  },
})