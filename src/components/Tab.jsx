import React from 'react';

const Tab = ({setActiveTab,cardsData}) => {
    return (
        <div className='mb-5'>

            <div className='text-center w-[50%] mx-auto space-y-1 '>
                <h2 className='text-3xl font-bold text-linear-to-r from-purple-700 to-purple-500'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed  to boost your productivity and creativity.</p>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent mt-5">
                <input onClick={()=>setActiveTab("products")} type="radio" name="my_tabs_1" className="tab w-40 rounded-2xl" aria-label="Products" defaultChecked />
                <input  onClick={()=>setActiveTab("cart")} type="radio" name="my_tabs_1" className="tab w-40 rounded-2xl" aria-label={`Cart (${cardsData.length})`}/>

            </div>
        </div>
    );
};

export default Tab;