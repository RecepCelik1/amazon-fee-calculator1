import { 
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js';
  
  import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
  );

const Consequences = () => {

  const sellingOptions = useSelector(state => state.dropDownOptions)
  const itemInfos = useSelector(state => state.itemInfos)


  let selectedSellerType = sellingOptions.selectedSellerType
  let selectedItem = sellingOptions.selectedItemCategory
  let selectedShippingMethod = sellingOptions.selectedShippingMethod

  //for shipping charge
  let shippingCharge

  let shippingChargeFixedRate = selectedItem[selectedShippingMethod.value]?.fixed

  let itemWeight = itemInfos.productWeight

  isNaN(shippingChargeFixedRate) ? shippingChargeFixedRate = 0 : shippingChargeFixedRate = shippingChargeFixedRate + 0


  if((selectedSellerType.value === "businessSeller" && sellingOptions.customShippingBool === true) ||
  selectedItem[selectedShippingMethod.value] === "not available"
  ){
    shippingCharge = itemInfos.shippingCharge
  } else {

    shippingCharge = selectedItem[selectedShippingMethod.value]?.constant + shippingChargeFixedRate*itemWeight/100

  }

  let itemMarketSoldPrice = itemInfos.itemPrice + shippingCharge

  //Referral fee
  let peaks = sellingOptions.selectedItemCategory.value?.peaks
  let rates = sellingOptions.selectedItemCategory.value?.rates

  let minFee = sellingOptions.selectedItemCategory.value?.minFee
  isNaN(minFee) ? minFee = 0 : minFee = minFee + 0

  let otherCost  
  selectedSellerType.value === "businessSeller" ? otherCost = 0 : otherCost = sellingOptions.selectedItemCategory.value?.otherCost
  isNaN(otherCost) ? otherCost = 0 : otherCost = otherCost + 0

  let preSellingFee 
  selectedSellerType.value === "businessSeller" ? preSellingFee = 0 : preSellingFee = 0.99

  let mileStones = 0
  let ReferralFee 


  if(sellingOptions.selectedItemCategory.value?.afterwards === true){
    ReferralFee = 0
    mileStones = 0

    for(let i=0; i <= (peaks.length-1); i++){
      
      if(itemMarketSoldPrice >= peaks[i+1]){
        mileStones +=1
      }

    }



    if(mileStones === 0){
      ReferralFee = (itemMarketSoldPrice * rates[mileStones])/100

    } else {

      for (let i = 0; i <= mileStones; i++){

        if(i===mileStones){
          ReferralFee = ReferralFee + (itemMarketSoldPrice - peaks[i])*rates[i]/100
        } else {
          ReferralFee = ReferralFee + (peaks[i+1] - peaks[i])*rates[i]/100
        }

      }

    }


  } else if(sellingOptions.selectedItemCategory.value?.afterwards === false){

    ReferralFee = 0
    mileStones = 0

    for(let i=0; i <= (peaks.length-1); i++){
      
      if(itemMarketSoldPrice >= peaks[i]){
        mileStones +=1
      }

    }

    ReferralFee = ReferralFee + (itemMarketSoldPrice*rates[mileStones])/100

  } else if(sellingOptions.selectedItemCategory.value?.afterwards === undefined) {
    ReferralFee = 0
    ReferralFee = itemMarketSoldPrice*rates/100
  }

  (ReferralFee <= minFee) ? ReferralFee = minFee : ReferralFee = ReferralFee + 0


  let totalFees = ReferralFee + otherCost + preSellingFee
  totalFees = parseFloat(totalFees.toFixed(2))
  
  let itemCost = itemInfos.itemCost
  let shippingCost = itemInfos.shippingCost

  let totalProfitPerItem = itemMarketSoldPrice - itemCost - shippingCost - totalFees
  totalProfitPerItem = parseFloat(totalProfitPerItem.toFixed(2))

  let textColor
  if (totalProfitPerItem > 0) {
    textColor = "text-green-600"
  } else if (totalProfitPerItem < 0) {
    textColor = "text-red-500"
  } else {
    textColor = "text-black"
  }

  function calculatePercentage(numerator, denominator) {

    if (denominator === 0) {
        return 0;
    } else {
      return (numerator / denominator) * 100;
    }

}

  let profitMargin = calculatePercentage(totalProfitPerItem, itemMarketSoldPrice);
  let returnOnCost = calculatePercentage(totalProfitPerItem, itemCost);
  let averageFeeRate = calculatePercentage(totalFees, itemMarketSoldPrice);
  

  let profitPercentage;
  profitPercentage = (totalProfitPerItem / itemMarketSoldPrice)*100

  if(profitPercentage < 0){
      profitPercentage = 0
  }

  profitPercentage = parseFloat(profitPercentage.toFixed(2))


    const usData = {

        datasets: [
            {
              data: [100 - profitPercentage , profitPercentage],
              backgroundColor: [
              "rgb(2, 132, 199)",
              "rgb(16, 185, 129)",
              ],
              hoverOffset: 4,
              },
              ],
            }
        
            const options = {
              cutout: 80,
              radius: "60%",
              borderWidth: 0,
              rotation: -((100 - profitPercentage) / 100) * 360 / 2,
            }



    return (
    <div className="w-full flex flex-col items-center p-2">

<div className="flex justify-between items-center w-full p-4 bg-gray-200 mb-4 rounded-md">
            <div className="flex justify-center items-center font-bold">Total Profit Per Item</div>
            <div className={`font-bold ${textColor}`}>{totalProfitPerItem}$</div>
</div>

        
<div className='flex flex-col w-full bg-gray-200 rounded-md sm:flex-row p-4'>

    <div className="w-full sm:w-7/12 flex flex-col">

          <div className="flex justify-between mt-2 mb-2">
              <div className="text-sm font-semibold">Profit Margin <p className="text-gray-600 text-xs">Total Profit / Total Revenue</p></div>
              <div className="flex justify-center items-center mr-2 text-sm font-medium">{profitMargin.toFixed(2)} %</div>
          </div>

          <div className="flex justify-between mt-2 mb-2">
              <div className="text-sm font-semibold">Return on Cost <p className="text-gray-600 text-xs">Total Profit / Item Cost</p></div>
              <div className="flex justify-center items-center mr-2 text-sm font-medium">{returnOnCost.toFixed(2)}%</div>
          </div>

          <div className="flex justify-between mt-2 mb-2">
              <div className="flex justify-center items-center">Shipping Charge</div>
              <div className="flex justify-center items-center font-bold mr-2">$ {shippingCharge.toFixed(2)}</div>
          </div>

      <div className='border-gray-400 border mt-2 mb-2'></div>
    
          <div className="flex justify-between mt-2 mb-2">
              <div className="flex justify-center items-center font-bold text-sm">Total Fees</div>
              <div className="flex justify-center items-center font-bold mr-2 text-sm">$ {totalFees.toFixed(2)}</div>
          </div>

          <div className="flex justify-between mt-2 mb-2">
              <div className="font-semibold text-sm">Average Fee Rate<p className="text-gray-600 text-xs">Total Fees / Total Revenue</p></div>
              <div className="flex justify-center items-center mr-2 text-sm font-medium">{averageFeeRate.toFixed(2)} %</div>
          </div>

          <div className="flex justify-center items-center w-full">
              <div className='w-full bg-gray-100 flex justify-center items-center mt-2 mb-2 rounded-xl text-xs h-6'>$ = US Dollar</div>
          </div>
    </div>

    <div className="w-full sm:w-5/12 flex justify-center items-center relative mb-5 ml-0 sm:ml-5">
          <Doughnut
            data={usData}
            options={options}
          ></Doughnut>
    </div>

</div>
      
        </div>
        
)
}

export default Consequences