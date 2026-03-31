import React from 'react';

const BayCard = ({ cards,handalDelete }) => {
    // console.log(card)
    // const handalDelete = (item) => {
    //     const filterdData = cards.filter(c => c.id !== item.id)
    //     setCardsData(filterdData)
    // }
    return (
        <>
            <div className=''>

                <div className='border p-4 rounded-3xl flex justify-between items-center bg-base-200'>
                    <div className='flex gap-6'>
                        <div>
                            <img src={cards.icon} alt="" className='border rounded-full p-1 bg-base-300' />
                        </div>
                        <div >
                            <h2 className='text-2xl font-bold'>{cards.name}</h2>
                            <p className='text-xl font-semibold'>${cards.price}</p>
                        </div>
                    </div>
                    <button onClick={() => handalDelete(cards)} className='btn btn-error rounded-3xl'>Delete</button>
                </div>

            </div>

        </>
    );

};

export default BayCard;