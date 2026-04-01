import React from 'react';
import { IoPlayCircleOutline } from "react-icons/io5";


const Banner = () => {
    return (
        <div className='w-[70%] mx-auto mt-6 mb-8'>
            <div className='flex flex-col lg:flex-row items-center gap-6  ' >
                <div className=' w-[450px] space-y-4'>
                    <h3 className='bg-sky-200 rounded-2xl px-1 text-purple-600 w-60'>New: AI-Powered Tools Available</h3>
                    <p className='text-3xl font-bold'>Supercharge Your Digital Workflow</p>
                    <p>Access premium AI tools, design assets, templates, and productivitysoftware—all in one place. Start creating faster today.Explore Products </p>
                    <div className='flex gap-3'>
                    <button className='btn bg-linear-to-r from-purple-700 to-purple-500 text-white rounded-full'>Explore Products</button>
                   <button className="btn btn-outline border-purple-700 text-purple-700 rounded-full"> <IoPlayCircleOutline />Watch Demo</button>
                    </div>
                </div>
                <div className='w-[440px]'>
                    <img src="/src/assets/banner.png" alt="" className='h-[450px] w-full' />
                </div>
            </div>
        </div>
    );
};

export default Banner;