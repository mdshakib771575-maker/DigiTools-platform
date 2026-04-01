import React from 'react';

const StartedSection = () => {
    return (
        <div className='bg-base-200 p-2 pb-20 mt-10'> 
        
            <div className='text-center mb-10 mt-10 space-y-2'>
               
                <h2 className='text-4xl font-semibold'>Get Started in 3 Steps</h2>
                <p className='text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>


            <div className='w-11/12 mx-auto flex flex-col lg:flex-row gap-5 '>
            

                <div className="card bg-base-100 shadow-2xl py-10">
                   
                    <figure>
                        <img src="/src/assets/user.png" alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Create Account</h2>
                        <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                        
                    </div>
                </div>

                <div className="card bg-base-100 shadow-2xl py-20">
                    <figure>
                        <img src="/src/assets/rocket.png" alt="" />
                            
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">Choose Products</h2>
                        <p className='text-center'>Browse our catalog and select the tools that fit your needs.</p>
                       
                    </div>
                </div>

                <div className="card bg-base-100 shadow-2xl py-20">
                    <figure>
                       <img src="/src/assets/package.png" alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center ">Start Creating</h2>
                        <p className='text-center'>Download and start using your premium tools immediately.</p>
                       
                    </div>
                </div>
            </div>



        </div>
    );
};

export default StartedSection;