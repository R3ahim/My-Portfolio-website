import React from 'react';
import profile from '../../img/profile.png'

const AboutMe = () => {
    return (
        <div className=''>
     <h1 className='text-center text-4xl font-bold mt-9 mb-7'><span className='text-blue-700'>About</span>Me</h1>

          <div class="hero min-h-screen bg-slate-800 text-white">
  <div class="hero-content flex-col lg:flex-row">
    <img src={profile} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold text-rose-700">ABDUR RAHIM</h1>
      <p class="text-slate-400">Full Stack Web Developer || React Developer || MERN Stack Developer</p>
      <p class="py-6">Hi, I am <span className='text-secondary'>Abdur Rahim</span>. A full stack web developer. I am doing web development for more than 6 months. To be a senior web developer is my aim in life. I am dedicated to my work. I have too many projects done.</p>
     <h2 className=' mb-2 text-4xl text-primary'>Development Skills</h2>
    <p>HTML5, CSS3, Bootstrap5, Tailwind CSS, JavaScript, GitHub, Heroku, Netlify, React JS, React Query, Firebase, Node JS, MongoDb, Express JS etc.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;