import React, { useEffect, useState } from 'react';
import './Skills.css'

const Skills = () => {
    const [skills,setSkills]= useState([]);
    useEffect(()=>{
        fetch('skills.json')
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[])

    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-9 mb-7'><span className='text-blue-700'>SKI</span>LLS</h1>
            <div className='skills'>
           {skills.map(skill=> <div class=" mx-auto card w-48 bg-base-100 shadow-xl">
            <figure><img src={skill.img}alt="Shoes" /></figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{skill.name}</h2>

  
  </div>
</div>)}
            </div>
        </div>
    );
};

export default Skills;