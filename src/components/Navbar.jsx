import React from 'react';

const Navbar = () => {
    return (
        <div>

         

<div className="navbar bg-base-100 shadow-sm flex justify-between px-10 ">
  <div className="">
    <a className="btn btn-ghost text-4xl text-purple-700 font-bold">DisiTools</a>
  </div>

  <div className='ml-10 font-semibold'>
      <ul className='hidden lg:flex gap-7  '>
            <li><a href="">Products</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">FAQ</a></li></ul>
  </div>


  <div className="flex items-center">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
  
    </div>
   <div className='flex gap-2'>
    <button className='text-black font-semibold'>Login</button>
    <button className='btn text-white  bg-linear-to-r from-purple-700 to-purple-500 rounded-full'>Get Started</button>
   </div>
         
  </div>
</div>

        </div>
    );
};

export default Navbar;