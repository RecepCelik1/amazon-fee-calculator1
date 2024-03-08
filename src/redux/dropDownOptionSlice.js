import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
  itemOptions : [
    {value : {rates: 45, minFee:0.30, otherCost : 0} , label : "Amazon Device Accessories" , i :"0", DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 30, minFee:2, otherCost : 0} , label : "Amazon Explore" , i :"1",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available" },

    {value : {rates: 12, minFee:0.30, otherCost : 0} , label : "Automotive and Powersports" , i :"2", DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [10], rates: [8,15], minFee:0.30, afterwards:false, otherCost : 0} , label : "Baby Products" , i :"3",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Backpacks, Handbags and Luggage" , i :"4",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 12, minFee:0.30, otherCost : 0} , label : "Base Equipment Power Tools" , i :"5",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [10], rates: [8,15], minFee:0.30, afterwards:false, otherCost : 0} , label : "Beauty, Health and Personal Care" , i :"6",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 12, minFee:0.30, otherCost : 0} , label : "Business, Industrial and Scientific Supplies" , i :"7",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [15, 20], rates: [5,10,17], minFee:0.30, afterwards:false, otherCost : 0} , label : "Clothing and Acessories" , i :"8",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {peaks: [0,300], rates: [15,8], minFee:0.30, afterwards:true, otherCost : 0} , label : "Compact Appliances" , i :"9",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 8, minFee:0.30, otherCost : 0} , label : "Computers" , i :"10",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 8, minFee:0.30, otherCost : 0} , label : "Consumer Electronics" , i :"11",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [0,100], rates: [15,8], minFee:0.30, afterwards:true, otherCost : 0} , label : "Electronics Accessories" , i :"12",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Everything Else in Electronic Categories" , i :"13",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Eyewear" , i :"14",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [0,100, 1000, 5000], rates: [20, 15, 10, 5], minFee:0, afterwards:true, otherCost : 0} , label : "Fine Art" , i :"15",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Footwear" , i :"16",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 8, minFee:0.30, otherCost : 0} , label : "Full-Size Appliances" , i :"17",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [0,200], rates: [15,10], minFee:0.30, afterwards:true, otherCost : 0} , label : "Furniture" , i :"18",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 20, minFee:0, otherCost : 0} , label : "Gift Cards" , i :"19",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [15], rates: [8,15], minFee:0, afterwards:false, otherCost : 0} , label : "Grocery and Gourmet" , i :"20",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Home and Kitchen" , i :"21",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [0,250], rates: [20,5], minFee:0.30, afterwards:true, otherCost : 0} , label : "Jewelery" , i :"22",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Lawn and Garden" , i :"23",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {peaks: [500], rates: [15,8], minFee:0.30, afterwards:false, otherCost : 0} , label : "Lawn Mowers and Snow Throwers" , i :"24",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Mattresses" , i :"25",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0, otherCost : 1.80} , label : "Media-Books, DVD, Music, Software, Video" , i :"26", DStandard : {constant: 3.99, fixed:0} , DExpedited : {constant: 6.99, fixed:0}, DTwoDays : {constant: 14.95, fixed:0}, IStandard : {constant: 14.95, fixed:0}, IExpedited : {constant: 46.50, fixed:0}},

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Musical Instruments and AV Production" , i :"27",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Office Products" , i :"28",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Pet Products" , i :"29",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Sports and Outdoors" , i :"30",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 10, minFee:0.30, otherCost : 0} , label : "Tires" , i :"31",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Tools and Home Improvement" , i :"32",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0.30, otherCost : 0} , label : "Toys and Games" , i :"33",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 8, minFee:0, otherCost : 1.80} , label : "Video Game Consoles" , i :"34",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},

    {value : {rates: 15, minFee:0, otherCost : 1.80} , label : "Video Games and Gaming Accessories" , i :"35", DStandard : 3.99 , DExpedited : 6.99},

    {value : {peaks: [1500], rates: [16,3], minFee:0.30, afterwards:false, otherCost : 0} , label : "Watches" , i :"36",DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},///

  ],

  sellerType : [
    {value:"businessSeller" , label:"Business Seller", i:"0"},
    {value:"individualSeller" , label:"Individual Seller", i:"1"}
  ],

  shippingMethod : [
    {value:"DStandard" , label : "Domestic Standard", i : "0"},
    {value:"DExpedited" , label : "Domestic Expedited", i : "1"},
    {value:"DTwoDays" , label : "Domestic Two Day", i : "2"},
    {value:"IStandard" , label : "International Standard", i : "3"},
    {value:"IExpedited" , label : "International Expedited", i : "4"},
  ],

  selectedItemCategory : {value : {rates: 45, minFee:0.30, otherCost : 0} , label : "Amazon Device Accessories" , i :"0", DStandard : {constant: 4.49, fixed:50} , DExpedited : {constant: 6.49, fixed:99}, DTwoDays : "not available", IStandard : "not available", IExpedited : "not available"},


  selectedSellerType : {value:"individualSeller" , label:"Individual Seller", i:"1"},

  selectedShippingMethod : {value:"DStandard" , label : "Domestic Standard", i : "0"},

  customShippingBool : false

}

export const dropDownOptionSlice = createSlice({
  name: 'dropdowns',
  initialState,
  reducers: {

    setSelectedOptions: (state, action) => {
      state[action.payload.field] = action.payload.value
    },

    toggle: (state, action) => {
      state.customShippingBool = !state.customShippingBool
    },

  },
})


export const { setSelectedOptions , toggle } = dropDownOptionSlice.actions

export default dropDownOptionSlice.reducer