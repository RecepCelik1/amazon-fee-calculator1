import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemPrice : 0,
  itemCost : 0,
  productWeight : 0,
  shippingCost : 0,
  shippingCharge : 0,
}

export const itemInfoSlice = createSlice({
  name: 'iteminfo',
  initialState,
  reducers: {

    setItemInfosPrice: (state, action) => {
      state[action.payload.field] = action.payload.parsedValue
    },
  },
})

// Action creators are generated for each case reducer function
export const { setItemInfosPrice } = itemInfoSlice.actions

export default itemInfoSlice.reducer