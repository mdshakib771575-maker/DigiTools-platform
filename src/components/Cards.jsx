import React from 'react';
import BayCard from './BayCard'

const Cards = ({ cardsData, setCardsData }) => {
    // way -1
    // let total =0;
    // for(let item of cardsData){
    //     total += item.price
    // }
    //  way-2
    const totalPrice = cardsData.reduce((sum, item) => sum + item.price, 0)
    console.log(Math.floor(totalPrice))
    const handalPaymant = () => {
        setCardsData([])
    }
    const handalDelete = (item) => {
     console.log(item)
     const filterData = cardsData.filter(card=> card.id !== item.id)
    //  console.log(filterData)
     setCardsData(filterData);
    }
    return (
        <div className='w-11/12 mx-auto space-y-4 '>
            <h2 className='font-semibold mb-2 text-2xl ml-2'>Your cards :</h2>

            {cardsData.length === 0 ? <p className='text-center text-2xl p-5 '>Your Card is Empty</p>: cardsData.map(cards => <BayCard cards={cards} key={cards.id} handalDelete={handalDelete} ></BayCard>)}

            <div className='bg-black p-4 text-white rounded-xl border flex justify-between text-2xl font-semibold'>
                <div>
                    <p> total</p>
                </div>
                <div>
                    ${Math.floor(totalPrice)}
                </div>
            </div>

            <div className=''>
                <button onClick={handalPaymant} className='btn w-full p-6 bg-linear-to-r from-purple-700 to-purple-500 text-white rounded-2xl  text-2xl font-semibold'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cards;