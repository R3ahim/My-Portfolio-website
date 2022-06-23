import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Drawer = () => {
    return (
        <div>
           <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col ">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul   class="menu p-4 overflow-y-auto w-80 bg-primary text-base-content">
      <li><Link className='font-bold text-black' to="/portfolio">Portfolio</Link></li>
      <li><Link  className='font-bold text-black' to="/skils">Skills</Link></li>
      <li><Link  className='font-bold text-black' to="/service">Projects</Link></li>
      <li><Link  className='font-bold text-black' to="/resume">My Resume</Link></li>
      <li><Link  className='font-bold text-black' to="/about">About me</Link></li>
      <li><Link  className='font-bold text-black' to="/contact">Contact Me</Link></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Drawer;