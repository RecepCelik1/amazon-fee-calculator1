

const Consequences = () => {

    const usData = {
        /*         labels: [`Fees & Costs = ${parseFloat((100-profitPercentage).toFixed(2))} %` , `Total Profit = ${parseFloat(profitPercentage.toFixed(2))} %`], */
                datasets: [
                  {
                    data: [100-70 , 70],
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
                rotation: -((100 - 70) / 100) * 360 / 2,
              };

    return (
    <div className="w-full flex flex-col items-center p-2">
        <div className="flex justify-between items-center w-full p-4 bg-gray-200 mb-4 rounded-md">
            <div className="flex justify-center items-center">Total Profit Per Item</div>
            <div>0.00$</div>
        </div>

        
            <div className='flex flex-col w-full bg-gray-200 rounded-md sm:flex-row p-4'>

<div className="w-full sm:w-7/12 flex flex-col">

    <div className="flex justify-between mt-2 mb-2">
        <div className="text-sm font-semibold">Profit Margin <p className="text-gray-600 text-xs">Total Profit / Total Revenue</p></div>
        <div className="flex justify-center items-center mr-2 text-sm font-medium">0 %</div>
    </div>

    <div className="flex justify-between mt-2 mb-2">
        <div className="text-sm font-semibold">Return on Cost <p className="text-gray-600 text-xs">Total Profit / Item Cost</p></div>
        <div className="flex justify-center items-center mr-2 text-sm font-medium">0 %</div>
    </div>

    <div className="flex justify-between mt-2 mb-2">
        <div className="flex justify-center items-center font-bold">Breakeven Price</div>
        <div className="flex justify-center items-center font-bold mr-2 text-sm">$ 00.0</div>
    </div>

    <div className='border-gray-400 border mt-2 mb-2'></div>
    
    <div className="flex justify-between mt-2 mb-2">
        <div className="flex justify-center items-center font-bold text-sm">Total Fees</div>
        <div className="flex justify-center items-center font-bold mr-2 text-sm">$ 00.0</div>
    </div>

    <div className="flex justify-between mt-2 mb-2">
        <div className="font-semibold text-sm">Average Fee Rate<p className="text-gray-600 text-xs">Total Fees / Total Revenue</p></div>
        <div className="flex justify-center items-center mr-2 text-sm font-medium">00. %</div>
    </div>

    <div className="flex justify-center items-center w-full">
        <div className='w-full bg-gray-100 flex justify-center items-center mt-2 mb-2 rounded-xl text-xs h-6'>$ = US Dollar</div>
    </div>
</div>

<div className="w-full sm:w-5/12 flex justify-center items-center relative mb-5">


</div>

</div>

        </div>
        
)
}

export default Consequences