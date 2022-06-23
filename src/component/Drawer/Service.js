import React, { useEffect, useState } from 'react';
import serverImg from '../../img/server (2).jpg'
import clientImg from '../../img/client.png'

const Service = () => {
    const [services,setServices]= useState([])
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-9 mb-7'><span className='text-blue-700'>Top </span>Projects</h1>
       <div className='services bg-slate-800 ' >
        {services.map(service=> <div class="card card-compact w-96  shadow-xl bg-black mb-10 mt-3 mx-auto">
  <figure><img src={service.img} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 className='text-4xl text-white'>{service.name}</h2>
    <div class="card-actions flex justify-start">
    <a href={service.liveSite} className='btn btn-circle' title='live Website'><p className='text-5xl'>🌐</p></a>
    <a href={service.clientCode} className='btn btn-circle' title='client side'><img width={50} className="btn btn-circle" src={clientImg} alt="Client side"/></a>
    {service.serverCode? <a href={service.serverCode} className='btn btn-circle' title='server side'><img width={50} className="btn btn-circle" src={serverImg}/></a>:''}
    </div>
  </div>
</div>)}
       </div>
        </div>
    );
};

export default Service;