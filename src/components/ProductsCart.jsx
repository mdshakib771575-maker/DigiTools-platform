import React, { useState } from 'react';



const ProductsCart = ({data,cardsData,setCardsData}) => {
    // console.log(data)
      const [isBayNaw,setIsBayNaw] = useState(false)
    // console.log(isBayNaw)

    const handalar =()=>{
setIsBayNaw(true)
setCardsData([...cardsData,data])
}
    return (
        <div>

           <div className="card bg-base-100 shadow-xl border">
  <div className="card-body">
    <div className='flex justify-between'>
    <img src={data.icon} alt="" className='border rounded-4xl p-2 bg-base-300' />
    <span className="badge badge-xs badge-warning">Most Popular</span>
    </div>
    <div className='space-y-1'>
      <h2 className="text-2zxl font-bold">{data.name}</h2>
      <p>{data.description}</p>
      <span className=" font-semibold text-xl">${data.price}/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[0]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[1]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[2]}</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>{data.features[3]}</span>
      </li>
     
     
    </ul>
    <div className="mt-6">
      <button onClick={()=>handalar()} className={`btn w-full rounded-full  text-white ${isBayNaw===true?"bg-green-600":"bg-linear-to-r from-purple-700 to-purple-500"}`}>
        {
            isBayNaw ===true ? "Bay" :"Bay Now"

        }</button>
    </div>
  </div>
</div> 
           
        </div>
    );
};

export default ProductsCart;