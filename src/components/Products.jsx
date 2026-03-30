import React, { use } from 'react';
import ProductsCart from './ProductsCart';

const Products = ({digiPromise}) => {
    const datas = use(digiPromise);
    // console.log(datas)
  

    return (
        <div>
        
            <div className='grid grid-cols-3 gap-6 w-11/12 mx-auto'>
                {
                  datas.map(data=> <ProductsCart key={data.id} data={data}>
                  </ProductsCart>)
                }
            </div>
        </div>
    );
};

export default Products;