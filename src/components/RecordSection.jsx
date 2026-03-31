import React from 'react';

const RecordSection = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-purple-700 to-purple-500 p-10 flex justify-around text-white text-center rounded mb-10'>
               <div>
                <h2 className='text-3xl font-bold'>50K+</h2>
                <p>Active Users</p>
               </div>

               <div className=''>
                <h2  className='text-3xl font-bold '>200+</h2>
                <p>Premium Tools</p>
            
               </div>
               
                
                <div>
                    <h2  className='text-3xl font-bold'>4.9</h2>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default RecordSection;