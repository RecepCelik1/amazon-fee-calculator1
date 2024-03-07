import { useRef } from "react";

const ItemInfo = () => {

    const itemPriceInputRef = useRef(null);
    const itemCostInputRef = useRef(null);
    const shippingChargeInputRef = useRef(null);
    const shippingCostInputRef = useRef(null);
  
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
  
  
    }

    return (
        
        <div className="flex flex-col sm:flex-row justify-center">
        <div className='flex flex-col w-full sm:w-[50%]'>

          <div className="bg-gray-200 rounded-md m-2 p-2">
            <div className="flex justify-between m-2">
              <div 
                className="text-xs flex justify-center items-center cursor-pointer"
                onClick={() => handleTextClick(itemPriceInputRef)}
              >Item Sold Price</div>
              <div>
                <input
                ref={itemPriceInputRef}
                className="p-2 w-20 h-9 rounded-md text-xs font-semibold"
                onChange={(e) => handlePriceInput(e , "itemSoldPrice")}
                />
              </div>
            </div>
            <div className="flex justify-between m-2">
            <div className="text-xs flex justify-center items-center cursor-pointer"
                 onClick={() => handleTextClick(itemCostInputRef)}
            >Item Cost</div>
              <div>
                <input
                ref={itemCostInputRef}
                className="p-2 w-20 h-9 rounded-md text-xs font-semibold"
                onChange={(e) => handlePriceInput(e , "itemCost")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full sm:w-[50%]'>
          <div className="bg-gray-200 rounded-md m-2 p-2">

            <div className="flex justify-between m-2">
            <div className="text-xs flex justify-center items-center cursor-pointer"
                 onClick={() => handleTextClick(shippingChargeInputRef)}>Product Weight</div>
              <div>
                <input 
                  ref={shippingChargeInputRef}
                  className="p-2 w-20 h-9 rounded-md text-xs font-semibold"
                  onChange={(e) => handlePriceInput(e , "productWeight")}
                />
              </div>
            </div>

            <div className="flex justify-between m-2">
            <div className="text-xs flex justify-center items-center cursor-pointer"
                 onClick={() => handleTextClick(shippingCostInputRef)}>Shipping Cost</div>
              <div>
                <input 
                ref={shippingCostInputRef}
                className="p-2 w-20 h-9 rounded-md text-xs font-semibold"
                onChange={(e) => handlePriceInput(e , "shippingCost")}
                />
              </div>
            </div>

          </div>
        </div>
    </div>
    )

}

export default ItemInfo