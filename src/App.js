import Consequences from "./components/consequences.js";
import ItemInfo from "./components/itemInfo";
import SellingOptions from "./components/sellingOptions.js";

function App() {

 


  

  return (
    <div className="bg-gray-800 h-full min-h-screen">
      <div className="bg-sky-600 h-20 w-full flex justify-center items-center font-bold text-white">Header</div>
      <div className="bg-emerald-600 h-10 w-full m flex justify-center items-center font-bold text-white">Navbar</div>

        <div className="h-full min-h-screen flex justify-center items-center"> {/* aside and main content */}
          <div className="bg-sky-600 w-36 h-full min-h-screen font-bold text-white hidden justify-center items-center sm:flex">aside</div>
            <div className="w-full flex justify-center items-center">

              <div className="main-container flex flex-col w-full sm:max-w-[675px]"> {/*main container*/}
                
                <ItemInfo/>
                <SellingOptions/>

                <div className="w-full font-bold text-white flex justify-center items-center p-2">Estimated Results</div>
                
                <Consequences/>

              </div>

            </div>
        </div>
        <div className="w-full bg-cyan-900 font-bold text-white flex justify-center items-center h-20">Footer</div>
    </div>
  );
}

export default App;
