import React, { useRef, useState } from "react";
import Select from "react-select";

const SellingOptions = () => {

    const [button , setButton] = useState(false)

    let bool = true

    const shippingChargeInputRef = useRef(null);

    const handlePriceInput = (event , field) => {
  
        const filteredValue = event.target.value.replace(/[^0-9,.]/g, "");
        let parsedValue = parseFloat(filteredValue.replace(",", "."));
    
        if(isNaN(parsedValue)){
          parsedValue = 0
        }
    
    
      }

      const handleTextClick = (inputRef) => {
  
        if (inputRef.current) {
          inputRef.current.focus();
        }      
    
      };


    const datas = [
        {value:"1" , label : "deneme" , i:1},
        {value:"2" , label : "deneme nolan", i:2}
    ]

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
        <div className="bg-gray-200 rounded-md m-2 p-2">
            <div className="mt-2">
                <Select
                    options={datas}
                    styles={customStyles}
                    isSearchable
                />
            </div>
            {bool === true && (
                <div className="w-full flex justify-between items-center p-2">
                    <div className="text-xs flex justify-center items-center">Custom Shipping Charge</div>
                    <div className="flex justify-center items-center">
                        <button
                        onClick={(e) => setButton(!button)}
                        className={`relative inline-flex items-center cursor-pointer focus:outline-none w-12 ${
                            button ? 'bg-sky-600 ' : 'bg-gray-400'
                        } text-white px-1 py-1 rounded-full`}
                        >
                        <span
                            className={`${
                            button ? 'translate-x-full text-sky-600' : 'translate-x-0 text-gray-500'
                            } inline-block w-5 h-5 bg-white rounded-full transform duration-300 transition-transform text-[8px]  flex justify-center items-center font-bold ease-in-out`}
                        >{button ? "YES" : "NO"}</span>
                        </button>
                    </div>
                </div>
            )}

<div className={`transition-all duration-[500ms] ease-in-out flex justify-center items-center ${button ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            
            <div className="flex justify-between items-center w-full pt-1 pl-2 pr-2 pb-1">


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
        </div>
    )
} 

export default SellingOptions