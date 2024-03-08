import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { setSelectedOptions, toggle } from "../redux/dropDownOptionSlice";
import { setItemInfosPrice } from "../redux/itemInfoSlice";



const SellingOptions = () => {

    const dispatch = useDispatch()

    const button = useSelector(state => state.dropDownOptions.customShippingBool)
    const dropDownOptions = useSelector(state => state.dropDownOptions)

    const getOptionValue = (option) => option.i;

    const shippingChargeInputRef = useRef(null);

    const handleTextClick = (inputRef) => {
  
      if (inputRef.current) {
        inputRef.current.focus();
      }      
  
    };

    const handlePriceInput = (event , field) => {
  
        const filteredValue = event.target.value.replace(/[^0-9,.]/g, "");
        let parsedValue = parseFloat(filteredValue.replace(",", "."));
    
        if(isNaN(parsedValue)){
          parsedValue = 0
        }
    
        dispatch(setItemInfosPrice({parsedValue , field}))

      }







    const customStyles = { //=> for dropdown menu customize
        
        option: (provided, state) => ({
          ...provided, 
          color: state.isSelected ? 'white' : 'black',
          background: state.isSelected ? '#0285c7' : state.isFocused ? '#38bdf8' : 'white',
          fontSize : '12px',
        }),
        control: (provided) => ({
          ...provided,
          width: '100%',
          minHeight: "32.5px",
          height : '32.5px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          fontSize : "12px",
          maxHeight: '12px',
        }),
        menu: (provided, state) => ({
            ...provided,
            borderRadius: '8px',
            overflowY: 'auto',
            
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          menuList: (provided, state) => ({
            ...provided,
            padding: 0,
            fontSize: '12px', 
            backgroundColor: state.isFocused ? '#e6f7ff' : 'white', // 
            borderRadius: '8px',
            
        }),
          dropdownIndicator: (provided, state) => ({
            alignItems: 'items-center',
            justifyContent: 'center',
            marginRight : "5px",
            marginTop : "1px"
          }),
      };

    return (
        <div className="bg-gray-200 rounded-md m-2 p-2 flex flex-col sm:flex-row">
            <div className="m-0 sm:m-1 w-full flex flex-col">
              <div className="text-xs font-bold flex mb-1 ml-1 items-center">Select Seller Type</div>
              <div>
                <Select
                    options={dropDownOptions.sellerType}
                    styles={customStyles}
                    isSearchable
                    getOptionValue={getOptionValue}
                    value={dropDownOptions.selectedSellerType}
                    onChange={(value) => dispatch(setSelectedOptions({value, field : "selectedSellerType"}))}
                />
              </div>

              <div className={`transition-all duration-[500ms] ease-in-out flex justify-center items-center ${(dropDownOptions.selectedSellerType.value === "businessSeller" || dropDownOptions.selectedItemCategory[dropDownOptions.selectedShippingMethod.value] === "not available") ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="w-full flex justify-between items-center p-1">
                    <div className="text-xs flex justify-center items-center">Custom Shipping Charge</div>
                    <div className="flex justify-center items-center">
                        <button
                        onClick={(e) => dispatch(toggle())}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            (button || dropDownOptions.selectedItemCategory[dropDownOptions.selectedShippingMethod.value] === "not available") ? 'bg-sky-600 ' : 'bg-gray-400'
                        } text-white px-1 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            (button || dropDownOptions.selectedItemCategory[dropDownOptions.selectedShippingMethod.value] === "not available") ? 'translate-x-full text-sky-600' : 'translate-x-0 text-gray-500'
                            } inline-block w-5 h-5 bg-white rounded-full transform duration-300 transition-transform text-[8px]  flex justify-center items-center font-bold ease-in-out`}
                        >{(button || dropDownOptions.selectedItemCategory[dropDownOptions.selectedShippingMethod.value] === "not available") ? "YES" : "NO"}</span>
                        </button>
                    </div>
                </div>
                </div>
            

          <div className={`transition-all duration-[500ms] ease-in-out flex justify-center items-center ${((button && dropDownOptions.selectedSellerType.value === "businessSeller") || dropDownOptions.selectedItemCategory[dropDownOptions.selectedShippingMethod.value] === "not available")  ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            
            <div className="flex justify-between items-center w-full mt-1 mr-1 ml-1">


                  <div className="text-xs flex justify-center items-center cursor-pointer"
                  onClick={() => handleTextClick(shippingChargeInputRef)}>Shipping Charge</div>

                  <div>
                      <input
                      ref={shippingChargeInputRef}
                      className="p-2 w-28 h-9 rounded-md text-xs font-semibold"
                      onChange={(e) => handlePriceInput(e , "shippingCharge")}
                      />
                  </div>
                
              </div>

          </div>

              <div className={`transition-all duration-[500ms] ease-in-out ${(button===false || dropDownOptions.selectedSellerType.value ==="individualSeller" || dropDownOptions.selectedItemCategory[dropDownOptions.selectedShippingMethod.value] === "not available") ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="text-xs font-bold flex ml-1 mb-1">Shipping Method</div>
                <div className="">
                  <Select
                        options={dropDownOptions.shippingMethod}
                        styles={customStyles}
                        isSearchable
                        getOptionValue={getOptionValue}
                        value={dropDownOptions.selectedShippingMethod}
                        onChange={(value) => dispatch(setSelectedOptions({value, field : "selectedShippingMethod"}))}
                  />
                </div>
              </div>



            </div>
            <div className='border-gray-400 border mt-3 sm:mt-1 ml-1 mr-1 mb-1'></div>
            <div className="m-0 sm:m-1 w-full flex flex-col">

              <div className="mb-1 flex flex-col">
              <div className="text-xs font-bold flex ml-1 mt-1 mb-1">Select Item Category</div>
                <Select
                    options={dropDownOptions.itemOptions}
                    styles={customStyles}
                    isSearchable
                    getOptionValue={getOptionValue}
                    value={dropDownOptions.selectedItemCategory}
                    onChange={(value) => dispatch(setSelectedOptions({value, field : "selectedItemCategory"}))}
                />
              </div>



            </div>
        </div>
    )
} 

export default SellingOptions