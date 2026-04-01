import React from 'react';

const Tab = ({activeTab,setActiveTab,cardsData}) => {
    return (
        <div className='mb-5'>

            <div className='text-center w-[50%] mx-auto space-y-1 '>
                <h2 className='text-3xl font-bold '>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed  to boost your productivity and creativity.</p>
            </div>
            {/* name of each tab group should be unique */}
            <div className="flex justify-center gap-3.5 mt-5">
                
                {/* <input onClick={()=>setActiveTab("products")} type="radio" name="my_tabs_1" className="tab w-40 rounded-2xl " aria-label="Products" defaultChecked />
                <input  onClick={()=>setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab w-40 rounded-2xl " aria-label={`Cart (${cardsData.length})`}/> */}

                <button onClick={()=>setActiveTab("products")}  className={`btn w-40 rounded-full  ${activeTab==="products"?"bg-linear-to-r from-purple-700 to-purple-500  text-white":""}`}>Products</button>
                <button onClick={()=>setActiveTab("cart")} className={`btn w-40 rounded-full ${activeTab === "cart" ? "bg-linear-to-r from-purple-700 to-purple-500 text-white":""}`}>{`Cart (${cardsData.length})`}</button>

            </div>
        </div>
    );
};

export default Tab;