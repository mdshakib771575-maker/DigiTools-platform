import React, { use } from 'react';
import ProductsCart from './ProductsCart';

const Products = ({digiPromise,cardsData,setCardsData}) => {
    const datas = use(digiPromise);
    // console.log(datas)
  

    return (
        <div>
        
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
                {
                  datas.map(data=> <ProductsCart key={data.id} data={data} 
                  cardsData={cardsData} setCardsData={setCardsData}>
                  </ProductsCart>)
                }
            </div>
            
        </div>
    );
};

export default Products;