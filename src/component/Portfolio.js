import React from 'react';
import profileImg from '../img/profile.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div>
          <div class="hero min-h-screen bg-black">
  <div class="hero-content flex-col lg:flex-row">
    <img className='rounded'  src={profileImg} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold text-white">ABDUR RAHIM</h1>
      <p class="py-6 text-3xl text-primary">I'm Full stack Developer</p>
      <Link to='/resume' class="btn btn-secondary">Show My Resume</Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Portfolio;